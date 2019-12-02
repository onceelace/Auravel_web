<?php

namespace App\Http\Controllers\Admin\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

use App\Models\Pages\Home;
use App\Models\Pages\Slider;

class PagesController extends Controller
{
    
    public function getHomePage()
    {
        //
        return json_encode(DB::table('homes')->first());
    }

    public function createHomePage(Request $request)
    {

        $this->validate($request,[
            'title' => 'required|string|max:191',
            'content' => 'required|string',
        ]);

        $noImage = '/images/pages/home/no_image.jpg';

        
        if($request->hasFile('image1'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image1->getClientOriginalName()), 0, strrpos(trim($request->image1->getClientOriginalName()), "."))).time().'.'.$request->image1->getClientOriginalExtension();
            $request->image1->move(public_path('images/pages/home'), $imageName1);

            $imageName1 = '/images/pages/home/'.$imageName1;
        }else{
            $imageName1 = $noImage;
        }

        //$imageName2 = $request->old_image2;
        if($request->hasFile('image2'))
        {
            $imageName2 = str_replace(' ','',substr(trim($request->image2->getClientOriginalName()), 0, strrpos(trim($request->image2->getClientOriginalName()), "."))).time().'.'.$request->image2->getClientOriginalExtension();
            $request->image2->move(public_path('images/pages/home'), $imageName2);

            $imageName2 = '/images/pages/home/'.$imageName2;

            //return $imageName;
        }else{
            $imageName2 = $noImage;
        }

        if($request->hasFile('image3'))
        {
            $imageName3 = str_replace(' ','',substr(trim($request->image3->getClientOriginalName()), 0, strrpos(trim($request->image3->getClientOriginalName()), "."))).time().'.'.$request->image3->getClientOriginalExtension();
            $request->image3->move(public_path('images/pages/home'), $imageName3);

            $imageName3 = '/images/pages/home/'.$imageName3;

            //return $imageName;
        }else{
            $imageName3 = $noImage;
        }

        if($request->hasFile('image4'))
        {
            $imageName4 = str_replace(' ','',substr(trim($request->image4->getClientOriginalName()), 0, strrpos(trim($request->image4->getClientOriginalName()), "."))).time().'.'.$request->image4->getClientOriginalExtension();
            $request->image4->move(public_path('images/pages/home'), $imageName4);

            $imageName4 = '/images/pages/home/'.$imageName4;

            //return $imageName;
        }else{
            $imageName4 = $noImage;
        }

        

        return Home::create([
            'title' => $request['title'],
            'content' => $request['content'],
            'image1' => $imageName1,
            'image2' => $imageName2,
            'image3' => $imageName3,
            'image4' => $imageName4,
        ]);
    }

    public function updateHomePage(Request $request)
    {
        //return $request;
        $home = Home::find($request->id);

        $this->validate($request,[
            'title' => 'required|string|max:191',
            'content' => 'required|string',
        ]);
        
        $imageName1 = $request->old_image1;
        if($request->hasFile('image1'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image1->getClientOriginalName()), 0, strrpos(trim($request->image1->getClientOriginalName()), "."))).time().'.'.$request->image1->getClientOriginalExtension();
            $request->image1->move(public_path('images/pages/home'), $imageName1);

            $imageName1 = '/images/pages/home/'.$imageName1;

            //return $imageName;
        }

        $imageName2 = $request->old_image2;
        if($request->hasFile('image2'))
        {
            $imageName2 = str_replace(' ','',substr(trim($request->image2->getClientOriginalName()), 0, strrpos(trim($request->image2->getClientOriginalName()), "."))).time().'.'.$request->image2->getClientOriginalExtension();
            $request->image2->move(public_path('images/pages/home'), $imageName2);

            $imageName2 = '/images/pages/home/'.$imageName2;

            //return $imageName;
        }

        $imageName3 = $request->old_image3;
        if($request->hasFile('image3'))
        {
            $imageName3 = str_replace(' ','',substr(trim($request->image3->getClientOriginalName()), 0, strrpos(trim($request->image3->getClientOriginalName()), "."))).time().'.'.$request->image3->getClientOriginalExtension();
            $request->image3->move(public_path('images/pages/home'), $imageName3);

            $imageName3 = '/images/pages/home/'.$imageName3;

            //return $imageName;
        }

        $imageName4 = $request->old_image4;
        if($request->hasFile('image4'))
        {
            $imageName4 = str_replace(' ','',substr(trim($request->image4->getClientOriginalName()), 0, strrpos(trim($request->image4->getClientOriginalName()), "."))).time().'.'.$request->image4->getClientOriginalExtension();
            $request->image4->move(public_path('images/pages/home'), $imageName4);

            $imageName4 = '/images/pages/home/'.$imageName4;

            //return $imageName;
        }

        $noImage = 'no_image.jpg';

        $home->update([
            'title' => $request['title'],
            'content' => $request['content'],
            'image1' => $imageName1,
            'image2' => $imageName2,
            'image3' => $imageName3,
            'image4' => $imageName4,
        ]);

        return ['message' => 'Homepage has been Updated'];
    }

    public function getSliders()
    {
        //
        return json_encode(DB::table('sliders')->get());
    }

    public function getSlider($id)
    {
        //
        return Slider::find($id);
    }

    public function createSlider(Request $request)
    {

        $this->validate($request,[
            'title' => 'required|string|max:191',
            'order' => 'required|integer|gt:0',
            'status' => 'required|string',
        ]);

        $noImage = '/images/pages/sliders/no_image.jpg';

        
        if($request->hasFile('image'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image->getClientOriginalName()), 0, strrpos(trim($request->image->getClientOriginalName()), "."))).time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/pages/sliders'), $imageName1);

            $imageName1 = '/images/pages/sliders/'.$imageName1;
        }else{
            $imageName1 = $noImage;
        }

        return Slider::create([
            'title' => $request['title'],
            'content' => $request['content'],
            'image' => $imageName1,
            'order' => $request['order'],
            'status' => $request['status'],
        ]);
    }

    public function updateSlider(Request $request, $id)
    {

        $slider = Slider::find($id);

        $this->validate($request,[
            'title' => 'required|string|max:191',
            'order' => 'required|integer|gt:0',
            'status' => 'required|string',
        ]);

        $noImage = '/images/pages/sliders/no_image.jpg';

        
        $imageName1 = $request->old_image;
        if($request->hasFile('image'))
        {
            $imageName1 = str_replace(' ','',substr(trim($request->image->getClientOriginalName()), 0, strrpos(trim($request->image->getClientOriginalName()), "."))).time().'.'.$request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/pages/home'), $imageName1);

            $imageName1 = '/images/pages/home/'.$imageName1;

            //return $imageName;
        }

        $slider->update([
            'title' => $request['title'],
            'content' => $request['content'],
            'image' => $imageName1,
            'order' => $request['order'],
            'status' => $request['status'],
        ]);

        return ['message' => 'Homepage has been Updated'];

        // return Slider::create([
        //     'title' => $request['title'],
        //     'content' => $request['content'],
        //     'image' => $imageName1,
        //     'order' => $request['order'],
        //     'status' => $request['status'],
        // ]);
    }

    public function deleteSlider($id)
    {
        //
        $slider = Slider::find($id);
        $slider->delete();

        return ['message' => 'Deleted'];
    }

}
