<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();
Route::get('/', 'HomeController@index')->name('homepage');
Route::get('/room', 'HomeController@room')->name('home.rooms');
Route::post('/room', 'HomeController@room')->name('home.rooms');
Route::get('/room/{id}', 'HomeController@roomdetail')->name('home.rooms.details');
Route::get('/users/logout', 'Auth\LoginController@userLogout')->name('user.logout');


//CHECK IN
// Route::get('/find/room', 'HomeController@checkroom')->name('room.check');
// Route::post('/find/room', 'HomeController@checkroom')->name('room.check');

Route::prefix('admin')->group(function() {

    Route::get('/login', 'Auth\AdminLoginController@showLoginForm')->name('admin.login');
    Route::post('/login', 'Auth\AdminLoginController@login')->name('admin.login.submit');
    Route::get('/', 'AdminController@index')->name('admin.dashboard');
    Route::get('/logout', 'Auth\AdminLoginController@logout')->name('admin.logout');

    // Password reset routes
    Route::post('/password/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email');
    Route::get('/password/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request');
    Route::post('/password/reset', 'Auth\AdminResetPasswordController@reset');
    Route::get('/password/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset');

    Route::get('{path}','AdminController@index')->where( 'path', '([A-z\d\-\/_.]+)?' );

});

// Route::get('/rooms', 'HomeController@rooms')->name('rooms');
Route::get('/', 'HomeController@index')->name('homepage');


