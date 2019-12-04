<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Input;
use App\Admin;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Input::get('status');
        if($id == 'All')
        {
            $customers = DB::table('admins')
            ->select('*')
            ->orderBy('lastname','asc')
            ->get();
            return $customers;
        }else{
            $customers = DB::table('admins')
            ->select('*')
            ->where('status','=',$id)
            ->orderBy('lastname','asc')
            ->get();
            return $customers;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //return $request;
        $this->validate($request,[
            'firstname' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'contactnumber' => 'required|string|max:191',
            'address' => 'required|string|min:10',
            'email' => 'required|string|max:191|unique:admins',
            'username' => 'required|string|max:191|unique:admins',
            'accounttype' => 'required|string|max:191',
            'password' => 'required|string|max:191|confirmed',
        ]);
        
        return Admin::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'contactnumber' => $request->contactnumber,
            'address' => $request->address,
            'email' => $request->email,
            'username' => $request->username,
            'accounttype' => $request->accounttype,
            'status' => 'Active',
            'password' => bcrypt($request->password)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
