@extends('layouts.app')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Book Now</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="index.html">Rooms</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Book Now</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End -->
<!-- Rooms Area Start -->
<div class="roberto-rooms-area section-padding-100-0">
    <div class="container">
        <div class="row">
            <div class="col-12 col-lg-8">
                <div class="single-room-area d-flex align-items-center mb-50">
                    <!-- Room Thumbnail -->
                    <div class="room-thumbnail">
                        <img src="{{ asset($booking['availableRoomType']->room_image) }}" alt="">
                    </div>
                    <!-- Room Content -->
                    <div class="room-content">
                        <a href="{{ route('home.rooms.details',['id' => $booking['availableRoomType']->id]) }}"><h2>{{$booking['availableRoomType']->name}}</h2></a>
                        <h4>PHP {{number_format($booking['availableRoomType']->rate,2)}}<span>/ Day</span></h4>
                        <div class="room-feature">
                            <h6>Size: <span>{{$booking['availableRoomType']->roomsize}}</span></h6>
                            <h6>Capacity: <span>Max persion {{$booking['availableRoomType']->max_occupant}}</span></h6>
                        </div>
                    </div>
                </div>
                <div class="single-room-area d-flex align-items-center mb-50">
                    <div class="row">
                        <div class="col-12">
                            <p>{!!html_entity_decode($booking['availableRoomType']->description)!!}</p>
                        </div>
                        <div class="col-12">
                            <p>{!!html_entity_decode($booking['availableRoomType']->amenities)!!}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <!-- Hotel Reservation Area -->
                <div class="hotel-reservation--area">
                    <div class="jumbotron">
                        <h4>Booking Details</h4>
                        <dl class="row">
                            <dt class="col-md-7 col-sm-12">Check-in Date</dt>
                            <dd class="col-md-5  col-sm-12">{{$booking['checkIn']}}</dd>

                            <dt class="col-md-7 col-sm-12">Check-out Date</dt>
                            <dd class="col-md-5 col-sm-12">{{$booking['checkOut']}}</dd>
                        </dl>

                        <dl class="row">
                            <dt class="col-md-7 col-sm-12">Adult</dt>
                            <dd class="col-md-5  col-sm-12">{{$booking['totalAdult']}}</dd>

                            <dt class="col-md-7 col-sm-12">Children</dt>
                            <dd class="col-md-5 col-sm-12">{{$booking['totalChildren']}}</dd>

                            <dt class="col-md-7 col-sm-12">Total Guests</dt>
                            <dd class="col-md-5 col-sm-12"><strong>{{$booking['totalGuest']}}</strong></dd>
                        </dl>

                        <dl class="row">
                            <dt class="col-md-7 col-sm-12">Room Type</dt>
                            <dd class="col-md-5  col-sm-12"><strong>{{$booking['availableRoomType']->name}}</strong></dd>

                            <dt class="col-md-7 col-sm-12">Room</dt>
                            <dd class="col-md-5 col-sm-12"><strong>{{$booking['availableRoom']->name}}</strong></dd>

                            <dt class="col-md-7 col-sm-12">Rate</dt>
                            <dd class="col-md-5 col-sm-12"><strong>PHP {{number_format($booking['availableRoomType']->rate,2)}}</strong></dd>
                        </dl>
                        <dl class="row">
                            <dt class="col-md-7 col-sm-12">Reservation</dt>
                            <dd class="col-md-5  col-sm-12"><strong><h5>PHP 1,000.00</h5></strong></dd>
                            
                        </dl>
                        <dl class="row">
                            <dt class="col-md-7 col-sm-12">TOTAL</dt>
                            <dd class="col-md-5  col-sm-12"><strong><h5>PHP {{number_format($booking['total'],2)}}</h5></strong></dd>
                        </dl>
                        <div class="row" style=" margin-bottom: 20px;">
                            <form method="POST" action="{{ route('booking.payment') }}" style="width: 100%;">
                                @csrf
                                <input type="hidden" name="payment_status" id="payment_status" value="Full">
                                <button type="submt" class="btn btn-success btn-block">FULL PAYMENT</button>
                            </form>
                        </div>
                        <div class="row">
                            <form method="POST" action="{{ route('booking.payment') }}" style="width: 100%;">
                                @csrf
                                <input type="hidden" name="payment_status" id="payment_status" value="Reservation">
                                <button type="submt" class="btn btn-success btn-block">Pay the Reservation</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Rooms Area End -->
@endsection
