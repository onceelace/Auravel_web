<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    //
    protected $fillable = [
        'room_type_id','name',
    ];

    public function roomtype()
    {
        return $this->belongsTo('App\Models\RoomType');
    }

    public function bookings()
    {
        return $this->hasMany('App\Models\Booking');
    }
}
