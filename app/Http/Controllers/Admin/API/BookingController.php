<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Models\Booking;
use App\Models\Room;
use App\Models\RoomType;
use App\Models\Payment;
use App\User;

use Illuminate\Support\Facades\Input;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Input::get('status');
        if($id == 'All')
        {
            $bookings = DB::table('bookings')
            ->join('users', 'bookings.user_id', '=', 'users.id')
            ->join('rooms', 'bookings.room_id', '=', 'rooms.id')
            ->select('bookings.*', 'rooms.name as roomName', 'users.firstname as firstname', 'users.lastname as lastname', 'users.email as email')
            ->orderBy('bookings.check_in', 'desc')
            ->get();
        }else{
            $bookings = DB::table('bookings')
            ->join('users', 'bookings.user_id', '=', 'users.id')
            ->join('rooms', 'bookings.room_id', '=', 'rooms.id')
            ->where('bookings.status','=',$id)
            ->select('bookings.*', 'rooms.name as roomName', 'users.firstname as firstname', 'users.lastname as lastname', 'users.email as email')
            ->orderBy('bookings.check_in', 'desc')
            ->get();
        }
        return $bookings;
    }

    public function bookingDetails($id)
    {
        $booking = DB::table('bookings')
        ->select('*')
        ->where('id','=',(int)$id)
        ->first();
        

        if($booking)
        {
            $room = DB::table('rooms')
            ->select('*')
            ->where('id','=', $booking->room_id)
            ->first();


            $roomType = DB::table('room_types')
            ->select('*')
            ->where('id','=', $room->room_type_id)
            ->first();

            $user = DB::table('users')
            ->select('firstname','lastname','contactnumber','address','email')
            ->where('id','=', $booking->user_id)
            ->first();

            $payments = DB::table('payments')
            ->select('*')
            ->where('booking_id','=',$booking->id)
            ->get();

            $returnValues = [
                'booking' => $booking,
                'room' => $room,
                'roomType' => $roomType,
                'user' => $user,
                'payments' => $payments
            ];

            return $returnValues;
        }
            
    }

    public function checkIn($id)
    {
        $booking = Booking::find($id);
        if($booking)
        {
            $booking->update([
                'status' => 'Checked-In'
            ]);

            $returnValues = $this->bookingDetails($id);
            return $returnValues;
        }
        $returnValues = $this->bookingDetails($id);
            return $returnValues;
    }

    public function checkOut($id)
    {
        $booking = Booking::find($id);
        if($booking)
        {
            $booking->update([
                'status' => 'Checked-Out'
            ]);

            $returnValues = $this->bookingDetails($id);
            return $returnValues;
        }
        $returnValues = $this->bookingDetails($id);
            return $returnValues;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
