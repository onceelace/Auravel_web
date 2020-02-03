@extends('layouts.app')

@section('content')
<style>
.example.example2 {
  background-color: #fff;
}

.example.example2 * {
  font-family: Source Code Pro, Consolas, Menlo, monospace;
  font-size: 16px;
  font-weight: 500;
}

.example.example2 .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 5px 10px;
}

.example.example2 .field {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 10px;
}

.example.example2 .field.half-width {
  width: 50%;
}

.example.example2 .field.quarter-width {
  width: calc(25% - 10px);
}

.example.example2 .baseline {
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background-color: #cfd7df;
  transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 label {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 8px;
  color: #cfd7df;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 50%;
  cursor: text;
  pointer-events: none;
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding-bottom: 7px;
  color: #32325d;
  background-color: transparent;
}

.example.example2 .input::-webkit-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input::-moz-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input:-ms-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input.StripeElement {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: opacity;
}

.example.example2 .input.focused,
.example.example2 .input:not(.empty) {
  opacity: 1;
}

.example.example2 .input.focused::-webkit-input-placeholder,
.example.example2 .input:not(.empty)::-webkit-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused::-moz-placeholder,
.example.example2 .input:not(.empty)::-moz-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused:-ms-input-placeholder,
.example.example2 .input:not(.empty):-ms-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused + label,
.example.example2 .input:not(.empty) + label {
  color: #aab7c4;
  transform: scale(0.85) translateY(-25px);
  cursor: default;
}

.example.example2 .input.focused + label {
  color: #24b47e;
}

.example.example2 .input.invalid + label {
  color: #ffa27b;
}

.example.example2 .input.focused + label + .baseline {
  background-color: #24b47e;
}

.example.example2 .input.focused.invalid + label + .baseline {
  background-color: #e25950;
}

.example.example2 input, .example.example2 button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.example.example2 input:-webkit-autofill {
  -webkit-text-fill-color: #e39f48;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 .StripeElement--webkit-autofill {
  background: transparent !important;
}

.example.example2 input, .example.example2 button {
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 button {
  display: block;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #24b47e;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

.example.example2 .error svg {
  margin-top: 0 !important;
}

.example.example2 .error svg .base {
  fill: #e25950;
}

.example.example2 .error svg .glyph {
  fill: #fff;
}

.example.example2 .error .message {
  color: #e25950;
}

.example.example2 .success .icon .border {
  stroke: #abe9d2;
}

.example.example2 .success .icon .checkmark {
  stroke: #24b47e;
}

.example.example2 .success .title {
  color: #32325d;
  font-size: 16px !important;
}

.example.example2 .success .message {
  color: #8898aa;
  font-size: 13px !important;
}

.example.example2 .success .reset path {
  fill: #24b47e;
}
</style>
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area bg-img bg-overlay jarallax" style="background-image: url(img/bg-img/16.jpg);">
    <div class="container h-100">
        <div class="row h-100 align-items-center">
            <div class="col-12">
                <div class="breadcrumb-content text-center">
                    <h2 class="page-title">Book Now</h2>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb justify-content-center">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item"><a href="index.html">Rooms</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Book Now</li>
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
                <div class="single-room-area d-flex align-items-center mb-50">
                    <!-- Room Thumbnail -->
                    <div class="room-thumbnail">
                        <img src="{{ asset($booking['availableRoomType']->room_image) }}" alt="">
                    </div>
                    <!-- Room Content -->
                    <div class="room-content">
                        <a href="{{ route('home.rooms.details',['id' => $booking['availableRoomType']->id]) }}"><h2>{{$booking['availableRoomType']->name}}</h2></a>
                        <h4>PHP {{number_format($booking['availableRoomType']->rate,2)}}<span>/ Day</span></h4>
                        <div class="room-feature">
                            <h6>Size: <span>{{$booking['availableRoomType']->roomsize}}</span></h6>
                            <h6>Capacity: <span>Max persion {{$booking['availableRoomType']->max_occupant}}</span></h6>
                        </div>
                    </div>
                </div>
                <div class="single-room-area d-flex align-items-center mb-50">
                    <div class="row">
                        <div class="col-12">
                            <p>{!!html_entity_decode($booking['availableRoomType']->description)!!}</p>
                        </div>
                        <div class="col-12">
                            <p>{!!html_entity_decode($booking['availableRoomType']->amenities)!!}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <!-- Hotel Reservation Area -->
                <div class="hotel-reservation--area">
                    <div class="jumbotron">
                        <h4>Booking Details</h4>
                        <dl class="row">
                            <dt class="col-md-6 col-sm-12">Check-in Date</dt>
                            <dd class="col-md-6  col-sm-12">{{$booking['checkIn']}}</dd>

                            <dt class="col-md-6 col-sm-12">Check-out Date</dt>
                            <dd class="col-md-6 col-sm-12">{{$booking['checkOut']}}</dd>
                        </dl>

                        <dl class="row">
                            <dt class="col-md-6 col-sm-12">Adult</dt>
                            <dd class="col-md-6  col-sm-12">{{$booking['totalAdult']}}</dd>

                            <dt class="col-md-6 col-sm-12">Children</dt>
                            <dd class="col-md-6 col-sm-12">{{$booking['totalChildren']}}</dd>

                            <dt class="col-md-6 col-sm-12">Total Guests</dt>
                            <dd class="col-md-6 col-sm-12"><strong>{{$booking['totalGuest']}}</strong></dd>
                        </dl>

                        <dl class="row">
                            <dt class="col-md-6 col-sm-12">Room Type</dt>
                            <dd class="col-md-6  col-sm-12"><strong>{{$booking['availableRoomType']->name}}</strong></dd>

                            <dt class="col-md-6 col-sm-12">Room</dt>
                            <dd class="col-md-6 col-sm-12"><strong>{{$booking['availableRoom']->name}}</strong></dd>

                            <dt class="col-md-6 col-sm-12">Rate</dt>
                            <dd class="col-md-6 col-sm-12"><strong>PHP {{number_format($booking['availableRoomType']->rate,2)}}</strong></dd>
                        </dl>
                        
                        <h5>Add-ons</h5>
                        <dl class="row">
                          <dt class="col-md-6 col-sm-12">Mattress<p><small>PHP 550.00 x</small></p></dt>
                          <dd class="col-md-6 col-sm-12">
                          <form method="POST" action="{{ route('addMattress') }}">
                                @csrf
                                <input id="mattress" name="mattress" type="number" class="form-control" min="0" placeholder="Quantity" value="{{$booking['mattress']}}" />
                            </form>
                            
                          </dd>
                        </dl>
                        <dl class="row">
                            <dt class="col-md-6 col-sm-12">Mattress</dt>
                            <dd class="col-md-6  col-sm-12"><strong><h5>PHP {{number_format($booking['mattress_amount'],2)}}</h5></strong></dd>
                        </dl>
                        <dl class="row">
                            <dt class="col-md-6 col-sm-12">TOTAL</dt>
                            <dd class="col-md-6  col-sm-12"><strong><h5>PHP {{number_format($booking['total'],2)}}</h5></strong></dd>
                        </dl>
                        
                        <div class="row">
                            <dt class="col-md-6 col-sm-12">Reservation</dt>
                            <dd class="col-md-6  col-sm-12"><strong><h5>PHP 1,000.00</h5></strong></dd>
                            <div class="col-md-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="chkReservation">
                                    <label class="form-check-label" for="chkReservation">
                                        Pay the Reservation Only
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <form method="POST" action="{{ route('booking.payment') }}" style="width: 100%;">
                                @csrf
                                
                                <input type="hidden" name="payment_status" id="payment_status" value="Reservation">
                                <button type="submt" class="btn btn-success btn-block">Pay the Reservation</button>
                            </form>
                        </div> -->
                    </div>
                    <div class="jumbotron" style="background-color: #e9eaea4f; padding: 1rem 2rem;">
                    <div class="row" style=" margin-bottom: 20px;">
                        <input type="hidden" name="totalAmount" id="totalAmount" value="{{number_format($booking['total'],2)}}">
                        <input type="hidden" name="reservation" id="reservation" value="{{number_format(1000,2)}}">

                        <form method="POST" id="payment-form" action="{{ route('booking.payment') }}" style="width: 100%;">
                            @csrf
                            <label for="card-element">Pay with Card</label>
                            <br>
                            <div id="card-element"  >
                            <!-- a Stripe Element will be inserted here. -->
                            </div>
                            <div id="card-errors" role="alert"></div>  
                            <input type="hidden" name="payment_status" id="payment_status" value="Full">
                            <button type="submt" class="btn btn-success btn-block mt-5" id="payButton">Pay Full PHP {{number_format($booking['total'],2)}}</button>
                        </form>
                        <!-- <form method="POST" id="payment-form" action="{{ route('booking.payment') }}" style="width: 100%;">
                            @csrf
                            <input type="hidden" name="payment_status" id="payment_status" value="Full">
                            <button type="submt" class="btn btn-success btn-block mt-5">Pay PHP {{number_format($booking['total'],2)}}</button>
                        </form>
                        <form method="POST" id="payment-form" action="{{ route('booking.payment') }}" style="width: 100%;">
                            @csrf
                            <input type="hidden" name="payment_status" id="payment_status" value="Reservation">
                                <button type="submt" class="btn btn-success btn-block mt-2">Pay the Reservation</button>
                        </form> -->
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Rooms Area End -->
<script src="https://js.stripe.com/v3/"></script>
<script>
// Create a Stripe client.
var stripe = Stripe('{{ env("STRIPE_KEY") }}');
// Create an instance of Elements.
var elements = stripe.elements();
// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
            base: {
                hidePostalCode : true,
                color: '#32325d',
                lineHeight: '18px',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '20px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
};
// Create an instance of the card Element.
var card = elements.create('card', {style: style});
// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');
// Handle real-time validation errors from the card Element.
card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});
// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});
// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  // Submit the form
  form.submit();
 
}
</script>

@endsection

