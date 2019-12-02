<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $fillable = [
        'title','content','image','order','status',
    ];
}
