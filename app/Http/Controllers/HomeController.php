<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RoomType;
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

    public function room()
    {
        $roomtypes = RoomType::orderBy('rate')->paginate(5);
        return view('home.room')->with('roomtypes', $roomtypes);
    }

    public function roomdetail($id)
    {
        $roomtype = RoomType::find($id);

        return view('home.roomdetail')->with('roomtype', $roomtype);
    }
}
