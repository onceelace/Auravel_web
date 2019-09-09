@extends('layouts.app')

@section('content')

<!-- Welcome Area Start -->
<section class="welcome-area">
    <div class="welcome-slides owl-carousel">
        <!-- Single Welcome Slide -->
        <div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/16.jpg);" data-img-url="img/bg-img/16.jpg">
            <!-- Welcome Content -->
            <div class="welcome-content h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <!-- Welcome Text -->
                        <div class="col-12">
                            <div class="welcome-text text-center">
                                <h6 data-animation="fadeInLeft" data-delay="200ms">Hotel &amp; Resort</h6>
                                <h2 data-animation="fadeInLeft" data-delay="500ms">Welcome To Auravel</h2>
                                <a href="#" class="btn roberto-btn btn-2" data-animation="fadeInLeft" data-delay="800ms">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single Welcome Slide -->
        <div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/17.jpg);" data-img-url="img/bg-img/17.jpg">
            <!-- Welcome Content -->
            <div class="welcome-content h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <!-- Welcome Text -->
                        <div class="col-12">
                            <div class="welcome-text text-center">
                                <h6 data-animation="fadeInUp" data-delay="200ms">Hotel &amp; Resort</h6>
                                <h2 data-animation="fadeInUp" data-delay="500ms">Welcome To Auravel</h2>
                                <a href="#" class="btn roberto-btn btn-2" data-animation="fadeInUp" data-delay="800ms">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Single Welcome Slide -->
        <div class="single-welcome-slide bg-img bg-overlay" style="background-image: url(img/bg-img/18.jpg);" data-img-url="img/bg-img/18.jpg">
            <!-- Welcome Content -->
            <div class="welcome-content h-100">
                <div class="container h-100">
                    <div class="row h-100 align-items-center">
                        <!-- Welcome Text -->
                        <div class="col-12">
                            <div class="welcome-text text-center">
                                <h6 data-animation="fadeInDown" data-delay="200ms">Hotel &amp; Resort</h6>
                                <h2 data-animation="fadeInDown" data-delay="500ms">Welcome To Auravel</h2>
                                <a href="#" class="btn roberto-btn btn-2" data-animation="fadeInDown" data-delay="800ms">Discover Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Welcome Area End -->

<!-- About Us Area Start -->
<section class="roberto-about-area section-padding-100-0">
    <!-- Hotel Search Form Area -->
    <div class="hotel-search-form-area">
        <div class="container-fluid">
            <div class="hotel-search-form">
                <form action="#" method="post">
                    <div class="row justify-content-between align-items-end">
                        <div class="col-6 col-md-2 col-lg-3">
                            <label for="checkIn">Check In</label>
                            <input type="date" class="form-control" id="checkIn" name="checkin-date">
                        </div>
                        <div class="col-6 col-md-2 col-lg-3">
                            <label for="checkOut">Check Out</label>
                            <input type="date" class="form-control" id="checkOut" name="checkout-date">
                        </div>
                        <div class="col-4 col-md-1">
                            <label for="room">Room</label>
                            <select name="room" id="room" class="form-control">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                            </select>
                        </div>
                        <div class="col-4 col-md-1">
                            <label for="adults">Adult</label>
                            <select name="adults" id="adults" class="form-control">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                            </select>
                        </div>
                        <div class="col-4 col-md-2 col-lg-1">
                            <label for="children">Children</label>
                            <select name="children" id="children" class="form-control">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-3">
                            <button type="submit" class="form-control btn roberto-btn w-100">Check Availability</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="container mt-100">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <!-- Section Heading -->
                <div class="section-heading wow fadeInUp" data-wow-delay="100ms">
                    <h6>About Us</h6>
                    <h2>Welcome to <br>Roberto Hotel Luxury</h2>
                </div>
                <div class="about-us-content mb-100">
                    <h5 class="wow fadeInUp" data-wow-delay="300ms">With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.</h5>
                    <p class="wow fadeInUp" data-wow-delay="400ms">Manager: <span>Michen Taylor</span></p>
                    <img src="img/core-img/signature.png" alt="" class="wow fadeInUp" data-wow-delay="500ms">
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="about-us-thumbnail mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <div class="row no-gutters">
                        <div class="col-6">
                            <div class="single-thumb">
                                <img src="img/bg-img/13.jpg" alt="">
                            </div>
                            <div class="single-thumb">
                                <img src="img/bg-img/14.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="single-thumb">
                                <img src="img/bg-img/15.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- About Us Area End -->

<!-- Service Area Start -->
<div class="roberto-service-area">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="service-content d-flex align-items-center justify-content-between">
                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="100ms">
                        <img src="img/core-img/icon-1.png" alt="">
                        <h5>Transportion</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/core-img/icon-2.png" alt="">
                        <h5>Reiseservice</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="500ms">
                        <img src="img/core-img/icon-3.png" alt="">
                        <h5>Spa Relaxtion</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="700ms">
                        <img src="img/core-img/icon-4.png" alt="">
                        <h5>Restaurant</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="900ms">
                        <img src="img/core-img/icon-1.png" alt="">
                        <h5>Bar &amp; Drink</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Service Area End -->

<!-- Our Room Area Start -->
<section class="roberto-rooms-area">
    <div class="rooms-slides owl-carousel">
        @foreach($roomtypes as $roomtype)
            <!-- Single Room Slide -->
            <div class="single-room-slide d-flex align-items-center">
                <!-- Thumbnail -->
                <div class="room-thumbnail h-100 bg-img" style="background-image: url({{ asset($roomtype->room_image) }});"></div>

                <!-- Content -->
                <div class="room-content">
                    <h2 data-animation="fadeInUp" data-delay="100ms">{{$roomtype->typename}}</h2>
                    <h3 data-animation="fadeInUp" data-delay="300ms">PHP {{$roomtype->rate}} <span>/ Day</span></h3>
                    <ul class="room-feature" data-animation="fadeInUp" data-delay="500ms">
                        <li><span><i class="fa fa-check"></i> Size</span> <span>: {{$roomtype->roomsize}}</span></li>
                        <li><span><i class="fa fa-check"></i> Capacity</span> <span>: Max persion {{$roomtype->max_occupant}}</span></li>
                        {{-- <li><span><i class="fa fa-check"></i> Bed</span> <span>: King Beds</span></li>
                        <li><span><i class="fa fa-check"></i> Services</span> <span>: Wifi, Television, Bathroom</span></li> --}}
                    </ul>
                    <a href="/room/{{$roomtype->id}}" class="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</a>
                </div>
            </div>
        @endforeach
    </div>
</section>
<!-- Our Room Area End -->

<!-- Testimonials Area Start -->
<section class="roberto-testimonials-area section-padding-100-0">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <div class="testimonial-thumbnail owl-carousel mb-100">
                    <img src="img/bg-img/10.jpg" alt="">
                    <img src="img/bg-img/11.jpg" alt="">
                </div>
            </div>

            <div class="col-12 col-md-6">
                <!-- Section Heading -->
                <div class="section-heading">
                    <h6>Testimonials</h6>
                    <h2>Our Guests Love Us</h2>
                </div>
                <!-- Testimonial Slide -->
                <div class="testimonial-slides owl-carousel mb-100">

                    <!-- Single Testimonial Slide -->
                    <div class="single-testimonial-slide">
                        <h5>“This can be achieved by applying search engine optimization or popularly known as SEO. This is a marketing strategy which increases the quality and quantity of traffic flow to a particular website via search engines.”</h5>
                        <div class="rating-title">
                            <div class="rating">
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                            </div>
                            <h6>Robert Downey <span>- CEO Deercreative</span></h6>
                        </div>
                    </div>

                    <!-- Single Testimonial Slide -->
                    <div class="single-testimonial-slide">
                        <h5>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus delectus facilis molestias, error vitae praesentium quos eaque qui ea, tempore blanditiis sint reprehenderit, quaerat. Commodi ab architecto sit suscipit exercitationem!”</h5>
                        <div class="rating-title">
                            <div class="rating">
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                            </div>
                            <h6>Akash Downey <span>- CEO Deercreative</span></h6>
                        </div>
                    </div>

                    <!-- Single Testimonial Slide -->
                    <div class="single-testimonial-slide">
                        <h5>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex quos. Alias a rem maiores, possimus dicta sit distinctio quis iusto!”</h5>
                        <div class="rating-title">
                            <div class="rating">
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                            </div>
                            <h6>Downey Sarah <span>- CEO Deercreative</span></h6>
                        </div>
                    </div>

                    <!-- Single Testimonial Slide -->
                    <div class="single-testimonial-slide">
                        <h5>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore sequi laboriosam fugit suscipit aspernatur, minima minus voluptatum, id ab atque similique ex earum. Magni.”</h5>
                        <div class="rating-title">
                            <div class="rating">
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                                <i class="icon_star"></i>
                            </div>
                            <h6>Robert Brown <span>- CEO Deercreative</span></h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
<!-- Testimonials Area End -->

@endsection
