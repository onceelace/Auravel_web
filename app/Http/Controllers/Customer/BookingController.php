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

            // $getFirstRoom = DB::table('rooms')
            // ->leftJoin('bookings','rooms.id','=','bookings.room_id')
            // ->select('rooms.*')
            // ->where('rooms.room_type_id','=',(int)$request->roomTypeId)
            // ->whereNotBetween('bookings.check_in', $datefilters )
            // ->whereNotBetween('bookings.check_out', $datefilters )
            // ->first();
            $getFirstRoom = $this->filterRoom((int)$request->roomTypeId,$datefilters);

            //return $getFirstRoom;

            $user = Auth::user();

            //Save cookie
            // Cookie::queue('availableRoomType', json_encode($roomType),60);
            // Cookie::queue('availableRoom', json_encode($getFirstRoom),60);
            // Cookie::queue('bookedUser', json_encode($user),60);


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
                'amountPerDay' => $amountPerDay,
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


                // return view('booking.index')
                //     ->with('booking', $booking);
                return $booking;
            }

            return redirect()->route('home.rooms');
            
        }
        
    }

    public function payment(Request $request)
    {
        if($request->method() == 'POST'){
            $booking = session('bookingSession');
            if($booking)
            {
                $booked =  Booking::create([
                    'user_id' => (int)$booking['user']->id,
                    'check_in' => Carbon::parse($booking['checkIn'])->format('Y-m-d'),
                    'check_out' => Carbon::parse($booking['checkOut'])->format('Y-m-d'),
                    'room_id' => (int)$booking['availableRoom']->id,
                    'payment_status' => $request->payment_status,
                    'status' => 'Booked'
                ]);
                if($booked)
                {
    
                    $amount = $booking['total'];
                    if($request->payment_status == 'Reservation')
                    {
                        $amount = 1000;
                    }
    
                    $payment = Payment::create([
                        'booking_id' => (int)$booked->id,
                        'amount' => $amount
                    ]);
    
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
