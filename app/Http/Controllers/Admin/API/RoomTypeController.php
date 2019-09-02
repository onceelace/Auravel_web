<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\RoomType;

class RoomTypeController extends Controller
{


    public function __construct()
    {
        //$this->middleware('auth:admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $roomTypes = DB::table('room_types')
        ->select('*')
        ->orderBy('name','asc')
        ->paginate(15);

        return $roomTypes;
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
        $this->validate($request,[
            'name' => 'required|string|max:191',
            'roomsize' => 'required|string|max:191',
            'description' => 'required',
            'highlights' => 'required',
            'min_occupant' => 'required|integer|gt:1',
            'max_occupant' => 'required|integer|gt:1',
            'rate' => 'required',
        ]);

        $imageName = time().'.'.$request->room_image->getClientOriginalExtension();
        $request->room_image->move(public_path('images/roomtype'), $imageName);

    	//return response()->json(['success'=>'You have successfully upload image.'.$request->name]);

        return RoomType::create([
            'name' => $request['name'],
            'roomsize' => $request['roomsize'],
            'description' => $request['description'],
            'highlights' => $request['highlights'],
            'services' => $request['services'],
            'min_occupant' => $request['min_occupant'],
            'max_occupant' => $request['max_occupant'],
            'rate' => $request['rate'],
            'room_image' => '/images/roomtype/'.$imageName,
        ]);
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
