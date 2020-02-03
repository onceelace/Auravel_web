@extends('layouts.app')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Our Rooms</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Room</li>
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
            @if(!$roomtypes->isEmpty())
                <h4 class="pb-2">Select room</h4>
                @foreach($roomtypes as $roomtype)
                    <!-- Single Room Area -->
                    <div class="single-room-area d-flex align-items-center mb-50 wow fadeInUp" data-wow-delay="100ms">
                        <!-- Room Thumbnail -->
                        <div class="room-thumbnail">
                            <img src="{{ asset($roomtype->room_image) }}" alt="">
                        </div>
                        <!-- Room Content -->
                        <div class="room-content">
                            <h2>{{$roomtype->name}}</h2>
                            <h4>PHP {{number_format($roomtype->rate,2)}} <span>/ Day</span></h4>
                            <div class="room-feature">
                                <h6>Size: <span>{{$roomtype->roomsize}}</span></h6>
                                <h6>
                                    Capacity<small>(Person)</small>:
                                    <span>Min: {{$roomtype->min_occupant}}</span>
                                    <span>Max: {{$roomtype->max_occupant}}</span>
                                </h6>
                                <p>{!!html_entity_decode($roomtype->description)!!}</p>
                            </div>
                            @if($isFiltered == true)
                            <form method="POST" action="{{ route('booking') }}">
                                @csrf
                                <input type="hidden" name="mattress" id="mattress" value="0">
                                <input type="hidden" name="mattress_amount" id="mattress_amount" value="0">
                                <input type="hidden" name="roomTypeId" id="roomTypeId{{$roomtype->id}}" value="{{$roomtype->id}}">
                                <input type="hidden" name="checkIn" id="hdncheckIn{{$roomtype->id}}" value="{{ $finddata->checkIn }}">
                                <input type="hidden" name="checkOut" id="hdncheckOut{{$roomtype->id}}" value="{{ $finddata->checkOut }}">
                                <input type="hidden" name="adults" id="adults{{$roomtype->id}}" value="{{ $finddata->adults }}">
                                <input type="hidden" name="children" id="children{{$roomtype->id}}" value="{{ $finddata->children }}">
                                <button class="btn btn-success">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                            </form>
                            @endif
                        </div>
                    </div>

                @endforeach

                <!-- $roomtypes->links() -->
                <!-- Pagination -->
            @else
                <h4>No available room</h4>
                <p>Try to change the Check-in and Check-out date.</p>
            @endif
                
            </div>
            <div class="col-12 col-lg-4">
                <!-- Hotel Reservation Area -->
                <div class="hotel-reservation--area mb-100">
                <h4>Book your room now</h4>
                
                    <form method="POST" action="{{ route('home.rooms') }}">
                    @csrf
                        <div class="form-group mb-30">
                            <div class="col-12 mb-20 p-0">
                                <label for="checkIn">Check In</label>
                                <!-- <input id="checkIn" type="text" class="form-control clickable input-md" id="checkIn" placeholder="&#xf133; Check-In"  value="{{ $finddata->checkIn }}" required> -->
<!-- </div> -->
                                <input type="text" class="form-control DateFrom" placeholder="mm/dd/yyyy" id="checkIn" name="checkIn" value="{{ $finddata->checkIn }}" required>
                            </div>
                            <div class="col-12 p-0">
                                <label for="checkOut">Check Out</label>
                                <!-- <input id="checkOut" type="text" class="form-control clickable input-md" id="checkOut" placeholder="&#xf133;  Check-Out" value="{{ $finddata->checkOut }}" required> -->
                                <input type="text" class="form-control clickable" placeholder="mm/dd/yyyy" id="checkOut" name="checkOut" value="{{ $finddata->checkOut }}" required>
                            </div>
                        </div>
                        <div class="form-group mb-30">
                            <label for="guests">Guests</label>
                            <div class="row">
                                <div class="col-6">
                                    <select name="adults" id="adults" class="form-control" required>
                                        <option value="" selected>Adults</option>
                                        @for ($i = 1; $i <= 10; $i++)
                                            <option value="{{ $i }}" {{ ( $i == $finddata->adults) ? 'selected' : '' }}> {{ $i }} </option>
                                        @endfor
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select name="children" id="children" class="form-control">
                                        <option value="" selected>Children</option>
                                        @for ($i = 1; $i <= 10; $i++)
                                            <option value="{{ $i }}" {{ ( $i == $finddata->children) ? 'selected' : '' }}> {{ $i }} </option>
                                        @endfor
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn roberto-btn w-100">Check Availability</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Rooms Area End -->
@endsection
