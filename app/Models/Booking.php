<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'user_id','room_id','room_type_id','status','check_in','check_out','payment_status',
    ];

    public function room()
    {
        return $this->belongsTo('App\Models\Room','room_id');
    }

    public function roomType()
    {
        return $this->belongsTo('App\Models\RoomType','room_type_id');
    }
}
