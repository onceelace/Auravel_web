@extends('layouts.app')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Check Availability</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="{{ route('homepage') }}">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Check Availability</li>
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
                @isset($roomtypes)
                @foreach($roomtypes as $roomtype)
                <!-- Single Room Area -->
                <div class="single-room-area d-flex align-items-center mb-50 wow fadeInUp" data-wow-delay="100ms">
                    <!-- Room Thumbnail -->
                    <div class="room-thumbnail">
                        <img src="{{ asset($roomtype->room_image) }}" alt="">
                    </div>
                    <!-- Room Content -->
                    <div class="room-content">
                        <a href="{{ route('home.rooms.details',['id' => $roomtype->id]) }}"><h2>{{$roomtype->name}}</h2></a>
                        
                        <h4>PHP {{$roomtype->rate}} <span>/ Day</span></h4>
                        <div class="room-feature">
                            <h6>Size: <span>{{$roomtype->roomsize}}</span></h6>
                            <h6>Capacity: <span>Max persion {{$roomtype->max_occupant}}</span></h6>
                            {{-- <h6>Bed: <span>King beds</span></h6>
                            <h6>Services: <span>Wifi, television ...</span></h6> --}}
                        </div>
                    <a href="{{ route('home.rooms.details',['id' => $roomtype->id]) }}" class="btn view-detail-btn">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                @endforeach

                    {{ $roomtypes->links() }}
                @endisset
            </div>

            <div class="col-12 col-lg-4">
                <!-- Hotel Reservation Area -->
                <div class="hotel-reservation--area mb-100">
                
                    <form method="POST" action="{{ route('room.check') }}">
                    @csrf
                        <div class="form-group mb-30">
                            <div class="col-12 mb-20">
                                <label for="checkIn">Check In</label>
                                <input type="date" class="form-control" id="checkIn" name="checkIn" value="{{ $finddata->checkIn }}">
                            </div>
                            <div class="col-12">
                                <label for="checkOut">Check Out</label>
                                <input type="date" class="form-control" id="checkOut" name="checkOut" value="{{ $finddata->checkOut }}">
                            </div>
                        </div>
                        <div class="form-group mb-30">
                            <label for="guests">Guests</label>
                            <div class="row">
                                <div class="col-6">
                                    <select name="adults" id="guests" class="form-control">
                                        <option value="adults">Adults</option>
                                        @for ($i = 1; $i <= 10; $i++)
                                            <option value="{{ $i }}" {{ ( $i == $finddata->adults) ? 'selected' : '' }}> {{ $i }} </option>
                                        @endfor
                                    </select>
                                </div>
                                <div class="col-6">
                                    <select name="children" id="children" class="form-control">
                                        <option value="children">Children</option>
                                        @for ($i = 1; $i <= 10; $i++)
                                            <option value="{{ $i }}" {{ ( $i == $finddata->children) ? 'selected' : '' }}> {{ $i }} </option>
                                        @endfor
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="form-group mb-50">
                            <div class="col-12">
                                <div class="slider-range">
                                    <div class="range-price">Max Price: $0 - $3000</div>
                                    <div data-min="0" data-max="3000" data-unit="PHP" class="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="3000" data-label-result="Max Price: ">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all"></div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <div class="form-group">
                            <button type="submit" class="btn roberto-btn w-100">Check Available</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Rooms Area End -->
@endsection
