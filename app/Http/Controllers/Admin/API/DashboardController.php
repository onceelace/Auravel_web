<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    
    public function totalBooked()
    {
        return DB::table('bookings')
        ->where('status','=','Booked')
        ->count();
    }

    public function totalCheckIn()
    {
        return DB::table('bookings')
        ->where('status','=','Checked-In')
        ->count();
    }

}
