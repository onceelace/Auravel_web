<div class="hotel-search-form-area">
    <div class="container-fluid">
        <div class="hotel-search-form">
            <form method="POST" action="{{ route('home.rooms') }}">
                @csrf
                <div class="row justify-content-between align-items-end">
                    <div class="col-6 col-md-2 col-lg-3">
                        <label for="checkIn">Check In</label>
                        <input id="checkIn" type="date" class="form-control @error('checkIn') is-invalid @enderror" name="checkIn" value="{{ old('checkIn') }}" required autocomplete="checkIn" autofocus>
                        @error('checkIn')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="col-6 col-md-2 col-lg-3">
                        <label for="checkOut">Check Out</label>
                        <input id="checkOut" type="date" class="form-control @error('checkOut') is-invalid @enderror" name="checkOut" value="{{ old('checkOut') }}" required autocomplete="checkOut" autofocus>
                        @error('checkOut')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                        @enderror
                    </div>
                    <div class="col-4 col-md-1">
                        <label for="adults">Adult</label>
                        <select name="adults" id="adults" class="form-control @error('adults') is-invalid @enderror" required autocomplete="adults" autofocus>
                            @for ($i = 1; $i <= 10; $i++)
                                <option value="{{ $i }}"> {{ $i }} </option>
                            @endfor
                        </select>
                    </div>
                    <div class="col-4 col-md-2 col-lg-1">
                        <label for="children">Children</label>
                        <select name="children" id="children" class="form-control">
                            @for ($i = 0; $i <= 10; $i++)
                                <option value="{{ $i }}"> {{ $i }} </option>
                            @endfor
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
