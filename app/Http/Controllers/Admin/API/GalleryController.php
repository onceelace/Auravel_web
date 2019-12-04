<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\Pages\Gallery;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $galleries = DB::table('galleries')
            ->get();
            
        return $galleries;
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
            'description' => 'required|string|max:191',
            'order' => 'required|integer|gt:0',
            'status' => 'required|string',
        ]);

        $noImage = '/images/pages/gallery/no_image.jpg';

        
        if($request->hasFile('image'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image->getClientOriginalName()), 0, strrpos(trim($request->image->getClientOriginalName()), "."))).time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/pages/gallery'), $imageName1);

            $imageName1 = '/images/pages/gallery/'.$imageName1;
        }else{
            $imageName1 = $noImage;
        }

        return Gallery::create([
            'description' => $request['description'],
            'image' => $imageName1,
            'status' => $request['status'],
            'order' => $request['order'],
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
        return Gallery::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        
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
        $gallery = Gallery::find($id);
        $this->validate($request,[
            'description' => 'required|string|max:191',
            'order' => 'required|integer|gt:0',
            'status' => 'required|string',
        ]);

        $noImage = '/images/pages/gallery/no_image.jpg';

        
        $imageName1 = $request->old_image;
        if($request->hasFile('image'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image->getClientOriginalName()), 0, strrpos(trim($request->image->getClientOriginalName()), "."))).time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/pages/gallery'), $imageName1);

            $imageName1 = '/images/pages/gallery/'.$imageName1;

            //return $imageName;
        }

        $gallery->update([
            'description' => $request['description'],
            'image' => $imageName1,
            'status' => $request['status'],
            'order' => $request['order'],
        ]);
        return ['message' => 'Gallery has been Updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gallery = Gallery::find($id);
        $gallery->delete();

        return ['message' => 'Deleted'];
    }
}
