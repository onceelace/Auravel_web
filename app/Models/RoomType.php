<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RoomType extends Model
{
    //
    protected $fillable = [
        'name','roomsize','highlights','description','services','rate', 'min_occupant','max_occupant', 'room_image',
    ];
}
