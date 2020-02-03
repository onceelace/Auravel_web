<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;
use App\Models\Booking;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use App\Models\Pages\Home;

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

        $home = DB::table('homes')->first();
        $sliders = DB::table('sliders')
                    ->where('status','=','Active')
                    ->orderBy('order', 'asc')
                    ->get();
        

        return view('home')
            ->with('homeDetails', $home)
            ->with('homeSliders', $sliders);
        //return view('home');
    }

    public function gallery()
    {
        $galleries = DB::table('galleries')
            ->where('status','=','Visible')
            ->get();
            
        return view('home.gallery')
            ->with('galleries',$galleries);
    }

    public function aboutUs()
    {
        $aboutUs = DB::table('about_us')->first();
            
        return view('home.abouts')
            ->with('aboutUs',$aboutUs);
    }

    public function facilities()
    {
        return view('home.facilities');
    }


    public function getRooms()
    {
        $checkInDate = date("2019-10-20");
        $checkOutDate = date("2019-10-21");

        $datefilters=[$checkInDate,$checkOutDate];

        $start = $checkInDate;
        $end = $checkOutDate;

        $returnRoomTypes = $this->filterRoomType(0,$datefilters);
        return $returnRoomTypes;
    }


    public function filterRoomType($totalCount, $datefilters)
    {
        $returnRoomTypes = collect();
        $roomtypes = DB::table('room_types')
        ->where('max_occupant','>=', $totalCount )
        ->get();
        if($roomtypes)
        {
            foreach($roomtypes as $rt)
            {
                $rooms = DB::table('rooms')
                    ->where('room_type_id','=',$rt->id)
                    ->get();

                if($rooms)
                {
                    
                    foreach($rooms as $room)
                    {

                        // $bs2 = DB::table('bookings')
                        //     ->where('room_id','=',$room->id)
                        //     ->where('status','=','Booked')
                        //     ->orWhere('status','=','Checked-In')
                        //     ->whereBetween('check_in',array($datefilters[0],$datefilters[1]))
                        //     ->whereBetween('check_out', array($datefilters[0],$datefilters[1]) )
                        //     ->count();

                        $bs2 = DB::table('bookings')
                            ->where('room_id','=',$room->id)
                            ->whereBetween('check_in',$datefilters)
                            ->orWhereBetween('check_out',$datefilters)
                            ->first();

                        if(!is_null($bs2))
                        {
                        
                            if($bs2->room_id == $room->id)
                            {
                                if($bs2->status == 'Checked-Out')
                                {
                                    //$returnRoomTypes = array_add($rt);
                                    if(!$returnRoomTypes->contains('id',$rt->id))
                                    {
                                        $returnRoomTypes->push($rt);
                                    }
                                }
                            }else{
                                if(!$returnRoomTypes->contains('id',$rt->id))
                                {
                                    $returnRoomTypes->push($rt);
                                }
                            }
                        }
                        else{
                            if(!$returnRoomTypes->contains('id',$rt->id))
                            {
                                $returnRoomTypes->push($rt);
                            }
                        }
                    }
                }
            }
        }

        return $returnRoomTypes;
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

            if($request->children == null)
            {
                $request->children = 0;
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

            $availableRoomType = $this->filterRoomType($totalCount,$datefilters);

            //return $availableRoomType;

            return view('home.room')
                ->with('finddata', $request)
                ->with('roomtypes',$availableRoomType)
                ->with('isFiltered',$isFiltered);
            
            
            // return $roomTypes;

            //return $availableRoomType;

        }else{

            $request->checkIn = Carbon::now()->format('m/d/Y');

            $request->checkOut = Carbon::now()->addDays(1)->format('m/d/Y');

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
