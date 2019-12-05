<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('admin/roomtype/alltypes', 'Admin\API\RoomController@alltypes');

Route::get('admin/dashboard/totalbooked', 'Admin\API\DashboardController@totalBooked');
Route::get('admin/dashboard/totalcheckin', 'Admin\API\DashboardController@totalCheckIn');

Route::get('admin/bookings?status={status}', 'Admin\API\BookingController@index');
Route::get('admin/bookings/{id}', 'Admin\API\BookingController@bookingDetails');
Route::put('admin/bookings/checkin/{id}', 'Admin\API\BookingController@checkIn');
Route::put('admin/bookings/checkout/{id}', 'Admin\API\BookingController@checkOut');



Route::get('admin/pages/home', 'Admin\API\PagesController@getHomePage');
Route::post('admin/pages/home', 'Admin\API\PagesController@createHomePage');
Route::put('admin/pages/home', 'Admin\API\PagesController@updateHomePage');

Route::get('admin/pages/sliders', 'Admin\API\PagesController@getSliders');
Route::get('admin/pages/sliders/{id}', 'Admin\API\PagesController@getSlider');
Route::post('admin/pages/sliders', 'Admin\API\PagesController@createSlider');
Route::put('admin/pages/sliders/{id}', 'Admin\API\PagesController@updateSlider');
Route::delete('admin/pages/sliders/{id}', 'Admin\API\PagesController@deleteSlider');

Route::apiResources([
    'admin/roomtype' => 'Admin\API\RoomTypeController',
    'admin/room' => 'Admin\API\RoomController',
    'admin/customer' => 'Admin\API\CustomerController',
    'admin/content/image' => 'Admin\API\ContentImageController',
    'admin/booking' => 'Admin\API\BookingController',
    'admin/gallery' => 'Admin\API\GalleryController',
    'admin/user' => 'Admin\API\UserController'
]);

