<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;

use Illuminate\Support\Facades\DB;

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

    public function room(Request $request)
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

            return view('home.room')
                ->with('finddata', $request)
                ->with('roomtypes',$roomTypes);
            //return $roomTypes;

        }else{
            $roomTypes = DB::table('room_types')
            ->select('*')
            ->orderBy('name','asc')
            ->paginate(15);
            return view('home.room')
                ->with('finddata', $request)
                ->with('roomtypes',$roomTypes);
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
