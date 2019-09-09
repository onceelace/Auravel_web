@extends('layouts.app')

@section('content')
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url({{$roomtype->room_image}});">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">{{$roomtype->name}}</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="/rooms">Rooms</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{$roomtype->name}}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="content-inner">
    <div class="container content-container">
        <div class="row content-row">
            {{-- LEFT SIDE --}}
            <div id="primary" class="content-area content-has-sidebar float-left  col-lg-8 col-md-12 col-xl-8">
            <main id="main" class="site-main">
                <article id="post-85" class="single-hentry post-85 post type-post status-publish format-standard has-post-thumbnail hentry category-consulting category-insurance tag-bussiness tag-corporate tag-modern tag-responsive">
                    <div class="entry-featured">
                        <div class="post-image">
                            <img width="1200" height="807" src="{{$roomtype->room_image}}" class="attachment-full size-full wp-post-image" alt="" sizes="(max-width: 1200px) 100vw, 1200px">
                        </div>
                    </div><!-- .entry-featured -->
                    <div class="entry-body">
                        <div class="entry-content clearfix">
                            <div class="post-meta clearfix">
                                <div class="data">
                                    <h2 class="entry-title">
                                        <a href="/room/{{$roomtype->id}}">
                                            {{$roomtype->name}}
                                        </a>
                                    </h2>
                                </div>
                            </div>
                            <div class="vc_row wpb_row vc_row-fluid">
                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                    <div class="vc_column-inner">
                                        <div class="wpb_wrapper">
                                            <div class="wpb_text_column wpb_content_element ">
                                                <div class="wpb_wrapper">
                                                <p>{!!html_entity_decode($roomtype->description)!!}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><!-- .entry-content -->
                    </div>
                </article><!-- #post -->
            </main><!-- #main -->
        </div>
            {{-- LEFT SIDE --}}
        </div>
    </div>
</div><!-- #content inner -->
@endsection
