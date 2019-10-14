<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;
use App\Models\Booking;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }


    public function getRooms()
    {
        
        $checkInDate = date("2019-10-20");
        $checkOutDate = date("2019-10-21");

        $datefilters=[$checkInDate,$checkOutDate];

        // $availableRoomType = DB::table('room_types')
        //         ->join('rooms','rooms.room_type_id','=','room_types.id')
        //         ->leftJoin('bookings','rooms.id','=','bookings.room_id')
        //         ->select('room_types.*')
        //         ->whereBetween('bookings.check_in', $datefilters )
        //         ->orWhereBetween('bookings.check_out', $datefilters )
        //         ->get();

        // $eventsCount = Booking::where(function ($query) use ($checkInDate, $checkOutDate) {
        //     $query->where(function ($query) use ($checkInDate, $checkOutDate) {
        //        $query->where('check_in', '>=', $checkInDate)
        //                ->where('check_out', '<', $checkInDate);
        //        })
        //        ->orWhere(function ($query) use ($checkInDate, $checkOutDate) {
        //            $query->where('check_in', '<', $checkOutDate)
        //                    ->where('check_out', '>=', $checkOutDate);
        //        });
        //    })->get();

        $availableRoomType = DB::table('room_types')
                ->join('rooms','rooms.room_type_id','=','room_types.id')
                ->leftJoin('bookings','rooms.id','=','bookings.room_id')
                ->select('room_types.*')
                ->whereNotBetween('bookings.check_in', $datefilters )
                ->whereNotBetween('bookings.check_out', $datefilters )
                ->get();

        return $availableRoomType;
    }

    public function room(Request $request)
    {
        $isFiltered = false;
        if($request->method() == 'POST')
        {

            $isFiltered = true;
            $this->validate($request,[
                'adults' => 'required|integer|gt:0',
                'checkIn' => 'required|date',
                'checkOut' => 'required|date'
            ]);

            $totalCount = 0;
            if($request->adults >0)
            {
                $totalCount += $request->adults;
            }

            if($request->children >0)
            {
                $totalCount += $request->children;
            }

            

            // $roomTypes = DB::table('room_types')
            // ->select('*')
            // ->where('max_occupant','>=', $totalCount )
            // ->orderBy('rate','asc')
            // ->paginate(15);
            $datefilters=[$request->checkIn,$request->checkOut];

            $availableRoomType = DB::table('room_types')
                ->join('rooms','rooms.room_type_id','=','room_types.id')
                ->leftJoin('bookings','rooms.id','=','bookings.room_id')
                ->select('room_types.*')
                ->where('room_types.max_occupant','>=', $totalCount )
                ->whereNotBetween('bookings.check_in', $datefilters )
                ->whereNotBetween('bookings.check_out', $datefilters )
                ->paginate(15);

            return view('home.room')
                ->with('finddata', $request)
                ->with('roomtypes',$availableRoomType)
                ->with('isFiltered',$isFiltered);
            //return $roomTypes;

            //return $availableRoomType;

        }else{
            $roomTypes = DB::table('room_types')
            ->select('*')
            ->orderBy('rate','asc')
            ->paginate(15);
            return view('home.room')
                ->with('finddata', $request)
                ->with('roomtypes',$roomTypes)
                ->with('isFiltered',$isFiltered);
        }

    }

    public function roomdetail($id)
    {
        $roomtype = RoomType::find($id);

        return view('home.roomdetail')->with('roomtype', $roomtype);
    }

    public function checkroom(Request $request)
    {

        if($request->method() == 'POST')
        {
            $this->validate($request,[
                'adults' => 'required|integer|gt:0',
                'checkIn' => 'required|date',
                'checkOut' => 'required|date'
            ]);

            $totalCount = 0;
            if($request->adults >0)
            {
                $totalCount += $request->adults;
            }

            if($request->children >0)
            {
                $totalCount += $request->children;
            }

            $roomTypes = DB::table('room_types')
            ->select('*')
            ->where('max_occupant','>=', $totalCount )
            ->orderBy('name','asc')
            ->paginate(15);

            return view('home.findroom')
                ->with('finddata', $request)
                ->with('roomtypes',$roomTypes);
            //return $roomTypes;

        }else{
            $roomTypes = DB::table('room_types')
            ->select('*')
            ->orderBy('name','asc')
            ->paginate(15);
            return view('home.findroom')
                ->with('finddata', $request)
                ->with('roomtypes',$roomTypes);
        }
    }

}
