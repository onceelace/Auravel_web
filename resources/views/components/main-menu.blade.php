<div class="main-header-area">
    <div class="classy-nav-container breakpoint-off">
        <div class="container-fluid">
            <!-- Classy Menu -->
            <nav class="navbar navbar-expand-lg classy-navbar flex-end" id="robertoNav">
                <a class="nav-brand" href="index.html"><img src="{{ asset('img/core-img/B.png') }}" width="53%" alt=""></a>
                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler classy-navbar-toggler">
                    <span class="navbarToggler"><span></span><span></span><span></span></span>
                </div>

                <div class="collapse navbar-collapse classy-menu" id="navbarSupportedContent">
                    <!-- Menu Close Button -->
                    <div class="classycloseIcon">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>
                    <ul class="navbar-nav mr-auto" id="nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="{{route('homepage')}}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('home.rooms')}}">Rooms</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">3D Virtual Tour</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Facilities</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{route('home.gallery')}}">Galleries</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About us</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                            @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->firstname }} {{ Auth::user()->lastname }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('user.logout') }}" >
                                        {{ __('Logout') }}
                                    </a>

                                </div>
                            </li>
                        @endguest
                    </ul>
                    
                    <div class="book-now-btn ml-3 ml-lg-5">
                        <a href="{{ route('booking') }}">Book Now <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
			</nav>
        </div>
    </div>
</div>
