<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $fillable = [
        'description','image','status','order',
    ];
}
