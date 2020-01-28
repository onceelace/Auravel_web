@extends('layouts.app')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">My Bookings</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">My Bookings</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End -->
<!-- Rooms Area Start -->
<div class="roberto-rooms-area section-padding-50-0">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- <div class="row">
                    <div class="col-md-4 col-xs-12">
                        <img src="{{ asset('images/pages/facilities/auravel_cafe_avelino.png') }}" class="img-fluid img-thumbnail" itemprop="thumbnail" />
                    </div>
                    <div class="col-md-8 col-xs-12">
                        <h4>Cafe Avelino</h4>
                        <p>A hot coffee is like a warm hug on this cold weather!</p>
                        <p>Come and drop by at our shop!
                            We are located at Maharlika Highway, Brgy. San Francisco Calihan, San Pablo City, Laguna.</p>
                        <p>Operating Hours:</p>
                        <p> <strong>8:00 AM</strong> to <strong>10:00 PM</strong></p>
                    </div>
                </div> -->
                @if ($message = Session::get('success'))
                <div class="alert alert-info alert-block">
                    <button type="button" class="close" data-dismiss="alert">×</button>	
                    <strong>{{ $message }}</strong>
                </div>
                @endif
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Room</th>
                            <th scope="col">Check-In</th>
                            <th scope="col">Check-Out</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        @foreach ($bookings as $booking)
                        <tr>
                            <th scope="row">{{ $booking->roomType->name }}</th>
                            <td>{{ $booking->room->name }}</td>
                            <td>{{ $booking->check_in }}</td>
                            <td>{{ $booking->check_out }}</td>
                            <td>{{ $booking->status }}</td>
                            <td>
                                @if($booking->status === "Booked")
                                <form method="POST" action="{{ route('cancelBooking') }}">
                                    @csrf
                                    <input type="hidden" name="roomTypeId" id="roomTypeId" value="{{$booking->id}}">
                                    <button type="submit" class="btn btn-danger btn-sm"><i class="fas fa-calendar-minus"></i> Cancel</button>
                                </form>
                                @endif
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $bookings->links() }}
            </div>
        </div>
    </div>
</div>

@endsection
