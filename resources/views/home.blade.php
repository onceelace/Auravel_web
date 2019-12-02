@extends('layouts.app')

@section('content')
<!-- Welcome Area Start -->
<section class="welcome-area">
@if(!is_null($homeSliders))
<div class="welcome-slides owl-carousel">
    @foreach($homeSliders as $homeSlider)
    <div class="single-welcome-slide bg-img bg-overlay" style="background-image: url({{$homeSlider->image}});" data-img-url="{{$homeSlider->image}}">
        <!-- Welcome Content -->
        <div class="welcome-content h-100">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <!-- Welcome Text -->
                    <div class="col-12">
                        <div class="welcome-text text-center">
                            <h2 data-animation="fadeInLeft" data-delay="500ms">{{$homeSlider->title}}</h2>
                            <h6 data-animation="fadeInLeft" data-delay="200ms">{{$homeSlider->content}}</h6>
                            <!-- <a href="#" class="btn roberto-btn btn-2" data-animation="fadeInLeft" data-delay="800ms">Discover Now</a> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endif
</section>
<!-- Welcome Area End -->

<!-- About Us Area Start -->
<section class="roberto-about-area section-padding-100-0">
    <!-- Hotel Search Form Area -->
    @component('components.home-check-in')
    @endcomponent

    @if(!is_null($homeDetails))
    <div class="container mt-100">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <!-- Section Heading -->
                <div class="section-heading wow fadeInUp" data-wow-delay="100ms">
                    <!-- <h6>About Us1</h6> -->
                    <h2>{{$homeDetails->title}}</h2>
                </div>
                <div class="about-us-content mb-100">
                    <p class="wow fadeInUp" data-wow-delay="300ms">{!!html_entity_decode($homeDetails->content)!!}</p>
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="about-us-thumbnail mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <div class="row no-gutters">
                        <div class="col-6">
                            @if($homeDetails->image1 != '/images/pages/home/no_image.jpg')
                            <div class="single-thumb">
                                <img src="{{$homeDetails->image1}}" alt="">
                            </div>
                            @endif
                            @if($homeDetails->image2 != '/images/pages/home/no_image.jpg')
                            <div class="single-thumb">
                                <img src="{{$homeDetails->image2}}" alt="">
                            </div>
                            @endif
                        </div>
                        <div class="col-6">
                            @if($homeDetails->image3 != '/images/pages/home/no_image.jpg')
                            <div class="single-thumb">
                                <img src="{{$homeDetails->image3}}" alt="">
                            </div>
                            @endif
                            @if($homeDetails->image4 != '/images/pages/home/no_image.jpg')
                            <div class="single-thumb">
                                <img src="{{$homeDetails->image4}}" alt="">
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @endif
</section>

@endsection
