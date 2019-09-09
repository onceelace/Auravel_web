<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContentImageController extends Controller
{
    //
    public function __construct()
    {
        //$this->middleware('auth:admin');
    }

    public function store(Request $request)
    {
        $imageName = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images/quileImages'), $imageName);
        return ['url' => '/images/quileImages/'.$imageName];
    }
}
