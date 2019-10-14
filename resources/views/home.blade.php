@extends('layouts.app')

@section('content')
<!-- Welcome Area Start -->
<section class="welcome-area">
    @component('components.welcome-area')
    @endcomponent
</section>
<!-- Welcome Area End -->

<!-- About Us Area Start -->
<section class="roberto-about-area section-padding-100-0">
    <!-- Hotel Search Form Area -->
    @component('components.home-check-in')
    @endcomponent

    <div class="container mt-100">
        <div class="row align-items-center">
            <div class="col-12 col-lg-6">
                <!-- Section Heading -->
                <div class="section-heading wow fadeInUp" data-wow-delay="100ms">
                    <h6>About Us</h6>
                    <h2>Welcome to <br>Auravel Grande Hotel and Resort</h2>
                </div>
                <div class="about-us-content mb-100">
                    <h5 class="wow fadeInUp" data-wow-delay="300ms">With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination.</h5>
                    <!-- <p class="wow fadeInUp" data-wow-delay="400ms">Manager: <span>Michen Taylor</span></p>
                    <img src="img/core-img/signature.png" alt="" class="wow fadeInUp" data-wow-delay="500ms"> -->
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <div class="about-us-thumbnail mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <div class="row no-gutters">
                        <div class="col-6">
                            <div class="single-thumb">
                                <img src="images/covers/2nd Floor.jpg" alt="">
                            </div>
                            <div class="single-thumb">
                                <img src="images/covers/MEeting room.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="single-thumb">
                                <img src="images/covers/Pavilion.jpg" alt="">
                            </div>
                            <div class="single-thumb">
                                <img src="images/covers/Outside.jpg" alt="">
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
                        <img src="{{ asset('img/core-img/icon-1.png')}}" alt="">
                        <h5>Transportion</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="300ms">
                        <img src="{{ asset('img/core-img/icon-2.png')}}" alt="">
                        <h5>Reiseservice</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="500ms">
                        <img src="{{ asset('img/core-img/icon-3.png')}}" alt="">
                        <h5>Spa Relaxtion</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="700ms">
                        <img src="{{ asset('img/core-img/icon-4.png')}}" alt="">
                        <h5>Restaurant</h5>
                    </div>

                    <!-- Single Service Area -->
                    <div class="single-service--area mb-100 wow fadeInUp" data-wow-delay="900ms">
                        <img src="{{ asset('img/core-img/icon-1.png')}}" alt="">
                        <h5>Bar &amp; Drink</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Service Area End -->

<!-- Our Room Area Start -->
<!-- <section class="roberto-rooms-area">
    <div class="rooms-slides owl-carousel">
        <div class="single-room-slide d-flex align-items-center">
            <div class="room-thumbnail h-100 bg-img" style="background-image: url(img/bg-img/16.jpg);"></div>

            <div class="room-content">
                <h2 data-animation="fadeInUp" data-delay="100ms">Premium King Room</h2>
                <h3 data-animation="fadeInUp" data-delay="300ms">400$ <span>/ Day</span></h3>
                <ul class="room-feature" data-animation="fadeInUp" data-delay="500ms">
                    <li><span><i class="fa fa-check"></i> Size</span> <span>: 30 ft</span></li>
                    <li><span><i class="fa fa-check"></i> Capacity</span> <span>: Max persion 5</span></li>
                    <li><span><i class="fa fa-check"></i> Bed</span> <span>: King Beds</span></li>
                    <li><span><i class="fa fa-check"></i> Services</span> <span>: Wifi, Television, Bathroom</span></li>
                </ul>
                <a href="#" class="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</a>
            </div>
        </div>

        <div class="single-room-slide d-flex align-items-center">
            <div class="room-thumbnail h-100 bg-img" style="background-image: url(img/bg-img/17.jpg);"></div>

            <div class="room-content">
                <h2 data-animation="fadeInUp" data-delay="100ms">Best King Room</h2>
                <h3 data-animation="fadeInUp" data-delay="300ms">125$ <span>/ Day</span></h3>
                <ul class="room-feature" data-animation="fadeInUp" data-delay="500ms">
                    <li><span><i class="fa fa-check"></i> Size</span> <span>: 30 ft</span></li>
                    <li><span><i class="fa fa-check"></i> Capacity</span> <span>: Max persion 5</span></li>
                    <li><span><i class="fa fa-check"></i> Bed</span> <span>: King Beds</span></li>
                    <li><span><i class="fa fa-check"></i> Services</span> <span>: Wifi, Television, Bathroom</span></li>
                </ul>
                <a href="#" class="btn roberto-btn mt-30" data-animation="fadeInUp" data-delay="700ms">View Details</a>
            </div>
        </div>
    </div>
</section> -->
<!-- Our Room Area End -->

<!-- Testimonials Area Start -->
<!-- <section class="roberto-testimonials-area section-padding-100-0">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                <div class="testimonial-thumbnail owl-carousel mb-100">
                    <img src="img/bg-img/10.jpg" alt="">
                    <img src="img/bg-img/11.jpg" alt="">
                </div>
            </div>

            <div class="col-12 col-md-6">
                <div class="section-heading">
                    <h6>Testimonials</h6>
                    <h2>Our Guests Love Us</h2>
                </div>
                <div class="testimonial-slides owl-carousel mb-100">

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
</section> -->
<!-- Testimonials Area End -->

<!-- Projects Area Start -->
<!-- <section class="roberto-project-area">
    <div class="projects-slides owl-carousel">
        <div class="single-project-slide active bg-img" style="background-image: url(img/bg-img/5.jpg);">
            <div class="project-content">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                </div>
            </div>
            <div class="hover-effects">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                </div>
                <a href="#" class="btn project-btn">Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="single-project-slide bg-img" style="background-image: url(img/bg-img/6.jpg);">
            <div class="project-content">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                </div>
            </div>
            <div class="hover-effects">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                </div>
                <a href="#" class="btn project-btn">Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="single-project-slide bg-img" style="background-image: url({{ asset('img/bg-img/7.jpg') }});">
            <div class="project-content">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                </div>
            </div>
            <div class="hover-effects">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                </div>
                <a href="#" class="btn project-btn">Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="single-project-slide bg-img" style="background-image: url({{ asset('img/bg-img/8.jpg') }});">
            <div class="project-content">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                </div>
            </div>
            <div class="hover-effects">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                </div>
                <a href="#" class="btn project-btn">Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>

        <div class="single-project-slide bg-img" style="background-image: url({{ asset('img/bg-img/9.jpg') }});">
            <div class="project-content">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                </div>
            </div>
            <div class="hover-effects">
                <div class="text">
                    <h6>Entertaiment</h6>
                    <h5>Racing Bike</h5>
                    <p>I focus a lot on helping the first time or inexperienced traveler head out prepared and confident...</p>
                </div>
                <a href="#" class="btn project-btn">Discover Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
    </div>
</section> -->
<!-- Projects Area End -->

<!-- Blog Area Start -->
<!-- <section class="roberto-blog-area section-padding-100-0">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                    <h6>Our Blog</h6>
                    <h2>Latest News &amp; Event</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-post-area mb-100 wow fadeInUp" data-wow-delay="300ms">
                    <a href="#" class="post-thumbnail"><img src="{{ asset('img/bg-img/2.jpg') }}" alt=""></a>
                    <div class="post-meta">
                        <a href="#" class="post-date">Jan 02, 2019</a>
                        <a href="#" class="post-catagory">Event</a>
                    </div>
                    <a href="#" class="post-title">Learn How To Motivate Yourself</a>
                    <p>How many free autoresponders have you tried? And how many emails did you get through using them?</p>
                    <a href="index.html" class="btn continue-btn"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-post-area mb-100 wow fadeInUp" data-wow-delay="500ms">
                    <a href="#" class="post-thumbnail"><img src="{{ asset('img/bg-img/3.jpg') }}" alt=""></a>
                    <div class="post-meta">
                        <a href="#" class="post-date">Jan 02, 2019</a>
                        <a href="#" class="post-catagory">Event</a>
                    </div>
                    <a href="#" class="post-title">What If Let You Run The Hubble</a>
                    <p>My point here is that if you have no clue for the answers above you probably are not operating a followup.</p>
                    <a href="index.html" class="btn continue-btn"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
                <div class="single-post-area mb-100 wow fadeInUp" data-wow-delay="700ms">
                    <a href="#" class="post-thumbnail"><img src="{{ asset('img/bg-img/4.jpg') }}" alt=""></a>
                    <div class="post-meta">
                        <a href="#" class="post-date">Jan 02, 2019</a>
                        <a href="#" class="post-catagory">Event</a>
                    </div>
                    <a href="#" class="post-title">Six Pack Abs The Big Picture</a>
                    <p>Some good steps to take to ensure you are getting what you need out of a autoresponder include…</p>
                    <a href="index.html" class="btn continue-btn"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>

        </div>
    </div>
</section> -->
<!-- Blog Area End -->
@endsection
