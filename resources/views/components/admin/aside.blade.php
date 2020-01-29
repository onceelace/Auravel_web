<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
    <img src="{{ asset('img/logo.png') }}" alt="Lara Start Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">{{ config('app.name', 'Auravel') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="{{ asset('img/profile.png') }}" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ Auth::user()->firstname }} {{ Auth::user()->lastname }}</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item">
                <router-link to="/admin" class="nav-link">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    Dashboard
                    </p>
                </router-link>
            </li>
        <li class="nav-header">Room Management</li>
        <li class="nav-item">
            <router-link to="/admin/roomtypes" class="nav-link">
                <i class="nav-icon fas fa-warehouse"></i>
                <p>Room Types</p>
            </router-link>
        </li>
        <li class="nav-item mb-2">
            <router-link to="/admin/rooms" class="nav-link">
                <i class="nav-icon fas fa-door-closed"></i>
                <p>Rooms</p>
            </router-link>
        </li>

        <li class="nav-header">Content Management</li>
        <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
                <i class="nav-icon fas fa-book"></i>
                <p>
                Pages
                <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item ml-2">
                    <router-link to="/admin/pages/home" class="nav-link">
                    <i class="nav-icon fas fa-home"></i>
                    <p>Home</p>
                    </router-link>
                </li>
                <li class="nav-item ml-2">
                    <router-link to="/admin/pages/sliders" class="nav-link">
                    <i class="nav-icon fas fa-exchange-alt"></i>
                    <p>Home Sliders</p>
                    </router-link>
                </li>
                <li class="nav-item ml-2">
                    <router-link to="/admin/pages/abouts" class="nav-link">
                    <i class="nav-icon fas fa-address-book"></i>
                    <p>About Us</p>
                    </router-link>
                </li>
                <!-- <li class="nav-item ml-2">
                    <router-link to="/admin/pages/facilities" class="nav-link">
                    <i class="nav-icon fas fa-address-book"></i>
                    <p>Facilities</p>
                    </router-link>
                </li> -->
            </ul>
        </li>
        <li class="nav-item mb-2">
            <router-link to="/admin/gallery" class="nav-link">
                <i class="nav-icon fas fa-images"></i>
                <p>Galleries</p>
            </router-link>
        </li>

        <li class="nav-header">Customer Management</li>
        <li class="nav-item">
            <router-link to="/admin/customers" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                Customers
                </p>
            </router-link>
        </li>
        <li class="nav-item mb-2">
            <router-link to="/admin/bookings" class="nav-link">
                <i class="nav-icon fas fa-clipboard"></i>
                <p>Bookings</p>
            </router-link>
        </li>
        <li class="nav-header">Settings</li>
        @if(Auth::user()->accounttype == 'Super Admin')
        <li class="nav-item">
            <router-link to="/admin/users" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                User Management
                </p>
            </router-link>
        </li>
        @endif

        <!-- <li class="nav-item">
            <router-link to="/admin/users/profile" class="nav-link">
                <i class="nav-icon fas fa-user"></i>
                <p>
                Profile
                </p>
            </router-link>
        </li> -->
        <li class="nav-item">
            {{-- <a href="/profile" class="nav-link">
                <i class="nav-icon fas fa-power-off"></i>
                <p>
                Logout
                </p>
            </a> --}}

            <a class="nav-link" href="{{ route('admin.logout') }}"
                onclick="event.preventDefault();
                            document.getElementById('logout-form').submit();">
                <i class="nav-icon fas fa-power-off text-red"></i>
                <p>
                    {{ __('Logout') }}
                </p>
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
        </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
