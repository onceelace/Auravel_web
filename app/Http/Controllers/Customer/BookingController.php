<?php

namespace App\Http\Controllers\Customer;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use DateTime;
use Carbon\Carbon;
use Auth;

use Cookie;
use Session;
use Mail;

use Stripe;

use App\Models\Booking;
use App\Models\Payment;

class BookingController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function filterRoom($roomTypeId, $datefilters)
    {
        $returnRooms = collect();
        $rooms = DB::table('rooms')
        ->select('*')
        ->where('room_type_id','=',$roomTypeId)
        ->get();

        if($rooms)
        {
            foreach($rooms as $room)
            {
                $bs2 = DB::table('bookings')
                ->where('room_id','=',$room->id)
                ->where('status','!=','Checked-Out')
                ->get();

                if(!is_null($bs2))
                {
                    if($bs2->count() >= 1)
                    {
                        foreach($bs2 as $tmpRoom)
                        {
    
                            //return json_encode($tmpRoom->check_out);
                            $check_in = Carbon::parse($datefilters[0])->format('Y-m-d');
                            $check_out = Carbon::parse($datefilters[1])->format('Y-m-d');
    
                            //After
                            if($check_out > $tmpRoom->check_out)
                            {
                                if($check_in > $tmpRoom->check_out)
                                {
                                    return $room;
                                }
                            }
    
                            //Before
                            if($check_out < $tmpRoom->check_in)
                            {
                                if($check_in < $tmpRoom->check_in)
                                {
                                    return $room;
                                }
                            }
    
                        }
                    }
                    else{
                        return $room;
                    }
                }else{
                    return $room;
                }
            }
        }

    }

    public function index(Request $request)
    {
        $checkIn = DateTime::createFromFormat('Y-m-d',$request->checkIn);
        $checkOut = DateTime::createFromFormat('Y-m-d',$request->checkOut);
        $datefilters=[$checkIn,$checkOut];
        if($request->method() == 'POST'){

            $roomType = DB::table('room_types')
                ->select('*')
                ->where('id','=',(int)$request->roomTypeId)
                ->first();

            $getFirstRoom = $this->filterRoom((int)$request->roomTypeId,$datefilters);

            $user = Auth::user();

            $dateFrom = Carbon::parse($request->checkIn);
            $dateTo = Carbon::parse($request->checkOut);
            $numberOfDays = $dateTo->diffInDays($dateFrom);
            $amountPerDay = $roomType->rate;
            $total = $numberOfDays * $amountPerDay;
            if($request->children == null)
            {
                $request->children = 0;
            }

            $totalGuests = (int)$request->adults + (int)$request->children;
            $booking = [
                'availableRoom' => $getFirstRoom,
                'user' => $user,
                'availableRoomType' => $roomType,
                'totalAdult' => $request->adults,
                'totalChildren' => $request->children,
                'totalGuest' => $totalGuests,
                'checkIn' => $request->checkIn,
                'checkOut' => $request->checkOut,
                'numberOfDays' => $numberOfDays,
                'mattress' => $request->mattress,
                'mattress_amount' => $request->mattress_amount,
                'amountPerDay' => $amountPerDay,
                'amount' => $total,
                'total' => $total
            ];

            session([
                'bookingSession' => $booking
            ]);
            return view('booking.index')
                ->with('booking', $booking);

            //return $booking;
        }else{
            if (Session::has('bookingSession'))
            {
                $booking = session('bookingSession');

                $user = $booking['user'];
                if(Auth::id() != $user->id)
                {
                    Session::forget('bookingSession');
                    return redirect()->route('home.rooms');
                }


                return view('booking.index')
                    ->with('booking', $booking);
                //return $booking;
            }

            return redirect()->route('home.rooms');
            
        }
        
    }

    public function myBookings()
    {
        $bookings = Booking::with('room','roomType')
            ->where('user_id','=',Auth::id())
            ->paginate(10);

        return view('booking.history')
        ->with('bookings', $bookings);
    }
    public function cancelBooking(Request $request)
    {
        $booking = Booking::find($request->roomTypeId);
        if($booking)
        {
            $booking->update([
                'status' => 'Canceled'
            ]);

            $to_name = Auth::user()->firstname." ".Auth::user()->lastname;
            $to_email = Auth::user()->email;
    
            $data = array(
                "customerName"=>$to_name,
            );
            Mail::send('emails.cancelbooking', $data, function($message) use ($to_name, $to_email) {
                $message->to($to_email, $to_name)->subject('Booking Canceled');
                $message->from('auraveldev@gmail.com','Auravel Grande');
            });

            $request->session()->flash('message.level', 'success');
        }
        $bookings = Booking::with('room','roomType')
        ->where('user_id','=',Auth::id())
        ->paginate(10);
        

        return view('booking.history')
            ->with('bookings', $bookings);
    }

    public function addMattress(Request $request)
    {
        if (Session::has('bookingSession'))
        {
            
            $booking = session('bookingSession');

            $booking['mattress'] = $request->mattress;

            $user = $booking['user'];
            if(Auth::id() != $user->id)
            {
                Session::forget('bookingSession');
                return redirect()->route('home.rooms');
            }

            $booking['mattress_amount'] = $booking['mattress'] * 550;

            $booking['total'] = $booking['mattress_amount'] + $booking['amount'];

            session([
                'bookingSession' => $booking
            ]);


            // return view('booking.index')
            //     ->with('booking', $booking);
            //return $booking;
        }

        return redirect()->route('booking');
            
    }

    public function payment(Request $request)
    {
        if($request->method() == 'POST'){
            $booking = session('bookingSession');
            if($booking)
            {
                $total = $booking['total'];

                Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
                if($request->payment_status == 'Reservation')
                {
                    Stripe\Charge::create ([
                        "amount" => 1000 * 100,
                        "currency" => "php",
                        "source" => $request->input('stripeToken'),
                        "description" => "Room Booking Payment" 
                    ]);
                }else{
                    Stripe\Charge::create ([
                        "amount" => $total * 100,
                        "currency" => "php",
                        "source" => $request->input('stripeToken'),
                        "description" => "Room Booking Payment" 
                     ]);
                }
                

                $booked =  Booking::create([
                    'user_id' => (int)$booking['user']->id,
                    'check_in' => Carbon::parse($booking['checkIn'])->format('Y-m-d'),
                    'check_out' => Carbon::parse($booking['checkOut'])->format('Y-m-d'),
                    'room_id' => (int)$booking['availableRoom']->id,
                    'room_type_id' => (int)$booking['availableRoomType']->id,
                    'payment_status' => $request->payment_status,
                    'status' => 'Booked'
                ]);

                if($booked)
                {
                    $reservationAmount = 0;
                    $amountPaid = $booking['total'];
                    if($request->payment_status == 'Reservation')
                    {
                        $amountPaid = 1000;
                        $reservationAmount = 1000;
                    }

                    $payment = Payment::create([
                        'booking_id' => (int)$booked->id,
                        'amount' => $booking['amount'],
                        'totalamount' => $booking['total'],
                        'mattress' => $booking['mattress'],
                        'mattress_amount' => $booking['mattress_amount'],
                        'reservation' => $reservationAmount,
                        'amountpaid' => $amountPaid
                    ]);

                    $to_name = $booking['user']->firstname." ".$booking['user']->lastname;
                    $to_email = $booking['user']->email;
            
                    $balance = 0;
                    if($request->payment_status == "Reservation")
                    {
                        $balance = $booking['total'] - 1000;
                    }
            
                    $data = array(
                        "transationDate"=>$booked['created_at'],
                        "customerName"=>$to_name,
                        "check_in"=>$booking['checkIn'],
                        "check_out"=>$booking['checkOut'],
                        "numberOfDays"=>$booking['numberOfDays'],
                        "payment_status"=>$request->payment_status,
                        "roomType"=>$booking['availableRoomType']->name,
                        "roomName"=>$booking['availableRoom']->name,
                        "perDay"=>$booking['availableRoomType']->rate,
                        "total"=>$booking['total'],
                        "amount"=>$payment["amount"],
                        "mattress"=>$payment["mattress"],
                        "mattress_amount"=>$payment["mattress_amount"],
                        "amountPaid"=>$amountPaid,
                        "balance"=>$balance,
                    );
                    Mail::send('emails.emailreceipt', $data, function($message) use ($to_name, $to_email) {
                        $message->to($to_email, $to_name)->subject('Booking Email Receipt');
                        $message->from('auraveldev@gmail.com','Auravel Grande');
                    });
    
                    Session::forget('bookingSession');
                    return view('booking.success')
                        ->with('message', 'Success')
                        ->with('booked', $booked);
    
                    
                }else{
                    return back();
                }
            }else{
                return redirect()->route('booking');
            }
        }else{
            return redirect()->route('booking');
        }
        
    }

}
