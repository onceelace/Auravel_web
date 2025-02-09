<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Title -->
    <title>{{ config('app.name', 'Auravel') }}</title>

    <!-- Core CSS file -->
    <link rel="stylesheet" href="{{ asset('photoswipe/photoswipe.css') }}"> 
    <link rel="stylesheet" href="{{ asset('photoswipe/default-skin/default-skin.css') }}"> 

    <!-- Favicon -->
    <link rel="icon" href="{{ asset('img/core-img/A.jpg') }}">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/jquery-ui.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">

</head>

<body>
    <!-- Preloader -->
    <div id="preloader">
        <div class="loader"></div>
    </div>
    <!-- /Preloader -->

    <!-- Header Area Start -->
    <header class="header-area">
        <!-- Main Header Start -->
        @component('components.main-menu')
        @endcomponent
    </header>
    <!-- Header Area End -->

    @yield('content')

    <!-- Partner Area Start -->
    @component('components.partners')
    @endcomponent
    <!-- Partner Area End -->

    <!-- Footer Area Start -->
    <footer class="footer-area section-padding-20-0 mt-50">
        <!-- Main Footer Area -->
        @component('components.footer')
        @endcomponent
    </footer>
    <!-- Footer Area End -->

    <!-- **** All JS Files ***** -->
    <!-- jQuery 2.2.4 -->
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/jquery-ui.min.js') }}"></script>
    <!-- Popper -->
    <script src="{{ asset('js/popper.min.js') }}"></script>
    <!-- Bootstrap -->
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <!-- All Plugins -->
    <script src="{{ asset('js/roberto.bundle.js') }}"></script>
    <!-- Active -->
    <script src="{{ asset('js/default-assets/active.js') }}"></script>

    <!-- Core JS file -->
    <script src="{{ asset('photoswipe/photoswipe.min.js') }}"></script> 

    <!-- UI JS file -->
    <script src="{{ asset('photoswipe/photoswipe-ui-default.min.js') }}"></script>
    <script src="{{ asset('photoswipe/photoswipeinit.js') }}"></script> 

    
    <script src="{{ asset('js/stripe-design.js') }}"></script>

    <script src="{{ asset('js/script.js') }}"></script>

</body>

</html>
