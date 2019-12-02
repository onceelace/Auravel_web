<?php

namespace App\Models\Pages;

use Illuminate\Database\Eloquent\Model;

class Home extends Model
{
    protected $fillable = [
        'title','content','image1','image2','image3','image4',
    ];
}
