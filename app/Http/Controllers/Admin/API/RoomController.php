<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Room;
use App\Models\RoomType;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // $roomTypes = DB::table('rooms')
        // ->select('*')
        // ->orderBy('name','asc')
        // ->paginate(15);
        // return $roomTypes;

        $rooms = DB::table('rooms')
            ->join('room_types', 'rooms.room_type_id', '=', 'room_types.id')
            ->select('rooms.*', 'room_types.id as roomtypeid', 'room_types.name as roomtypename')
            ->get();
        return $rooms;
    }

    public function alltypes()
    {
        //
        $roomTypes = DB::table('room_types')
        ->select('*')
        ->orderBy('min_occupant','asc')
        ->get();

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
            'name' => 'required|string|max:191|unique:rooms',
            'room_type_id' => 'required|integer',
        ]);

        return Room::create([
            'name' => $request['name'],
            'room_type_id' => $request['room_type_id']
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
        return Room::find($id);
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
        $room = Room::find($id);
        $this->validate($request,[
            'name' => 'required|string|max:191|unique:rooms,name,'.$room->id,
            'room_type_id' => 'required|integer',
        ]);

        $room->update([
            'name' => $request->name,
            'room_type_id' => $request->room_type_id
        ]);

        return ['message' => 'Room has been Updated'];
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
        $room = Room::find($id);
        $room->delete();

        return ['message' => 'Deleted'];
    }
}
