<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'booking_id','amount','mattress','mattress_amount','totalamount','reservation','amountpaid',
    ];
}
