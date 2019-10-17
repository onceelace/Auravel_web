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
Route::get('admin/bookings?status={status}', 'Admin\API\BookingController@index');
Route::get('admin/bookings/{id}', 'Admin\API\BookingController@bookingDetails');
Route::put('admin/bookings/checkin/{id}', 'Admin\API\BookingController@checkIn');
Route::put('admin/bookings/checkout/{id}', 'Admin\API\BookingController@checkOut');
Route::apiResources([
    'admin/roomtype' => 'Admin\API\RoomTypeController',
    'admin/room' => 'Admin\API\RoomController',
    'admin/customer' => 'Admin\API\CustomerController',
    'admin/content/image' => 'Admin\API\ContentImageController',
    'admin/booking' => 'Admin\API\BookingController'
]);

