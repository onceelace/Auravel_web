<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //
    protected $fillable = [
        'room_type_id','name','status','check_in','check_out',
    ];

    public function roomtype()
    {
        return $this->belongsTo('App\Models\RoomType');
    }
}
