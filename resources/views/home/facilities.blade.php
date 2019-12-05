@extends('layouts.app')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Facilities</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Facilities</li>
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
                <h3 class="font-weight-light mb-5">Our Facilities</h3>
                <div class="row">
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
                </div>
                <div class="row">
                    <div class="col-md-4 col-xs-12">
                        <img src="{{ asset('images/pages/facilities/auravel_fusion_cuisine.png') }}" class="img-fluid img-thumbnail" itemprop="thumbnail" />
                    </div>
                    <div class="col-md-8 col-xs-12">
                        <h4>Fusion Cuisine</h4>
                        <p>Spend your weekends with us together with your family and friends and enjoy the newest addition to our family sets, FAM D! 🍻😁🥳😋</p>
                        <p>also watch out for our ACOUSTIC BAND every FRIDAY and SATURDAY!🍻🥂</p>
                        <p>Visit us at:</p>
                        <p>🚩 Maharlika Highway, Calihan. San Pablo City (infront of Highshine Car wash)</p>
                        <br>
                        <p>Follow us on</p>
                        <p>IG: auravelfusioncuisine</p>
                        <br>
                        <p>Contact us at</p>
                        <p>📞0966-728-1455</p>
                        <p>📞0949-490-9626</p>
                        <p>☎️(049)523-7104</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
