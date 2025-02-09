/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import { Form, HasError, AlertError } from 'vform'

window.Form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import objectToFormData from 'object-to-formdata'
window.objectToFormData = objectToFormData

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import Vue from "vue";
import Vue2Editor from "vue2-editor";

Vue.use(Vue2Editor);

import VueProgressBar from 'vue-progressbar'
const vueProgressBarOption = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false,
    location: 'top'
}
Vue.use(VueProgressBar, vueProgressBarOption)


// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
})
window.Toast = Toast;

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);

Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'PHP',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
});

let routes = [

    { path: '/admin', component: require('./components/Admin/Dashboard.vue').default },

    { path: '/admin/roomtypes', component: require('./components/Admin/RoomType/RoomTypes.vue').default },
    { path: '/admin/roomtypes/new', component: require('./components/Admin/RoomType/NewRoomType.vue').default },
    { path: '/admin/roomtypes/edit/:id', component: require('./components/Admin/RoomType/EditRoomType.vue').default },

    { path: '/admin/rooms', component: require('./components/Admin/Room/Rooms.vue').default },
    { path: '/admin/room/new', component: require('./components/Admin/Room/NewRoom.vue').default },
    { path: '/admin/room/edit/:id', component: require('./components/Admin/Room/EditRoom.vue').default },

    { path: '/admin/bookings', component: require('./components/Admin/Booking/Bookings.vue').default },
    { path: '/admin/bookings/Calendar', component: require('./components/Admin/Booking/CalendarView.vue').default },
    { path: '/admin/bookings/details/:id', component: require('./components/Admin/Booking/BookingDetails.vue').default },

    { path: '/admin/reports', component: require('./components/Admin/Reports/BoookingReport.vue').default },

    //PAGES
    { path: '/admin/pages/home', component: require('./components/Admin/Pages/Home.vue').default },
    { path: '/admin/pages/abouts', component: require('./components/Admin/Pages/AboutUs.vue').default },


    { path: '/admin/pages/sliders', component: require('./components/Admin/Pages/Sliders/Sliders.vue').default },
    { path: '/admin/pages/sliders/new', component: require('./components/Admin/Pages/Sliders/NewSlider.vue').default },
    { path: '/admin/pages/sliders/edit/:id', component: require('./components/Admin/Pages/Sliders/EditSlider.vue').default },

    { path: '/admin/gallery', component: require('./components/Admin/Gallery/Galleries.vue').default },
    { path: '/admin/gallery/new', component: require('./components/Admin/Gallery/NewGallery.vue').default },
    { path: '/admin/gallery/edit/:id', component: require('./components/Admin/Gallery/EditGallery.vue').default },

    { path: '/admin/pages/facilities', component: require('./components/Admin/Facilities/Facilities.vue').default },
    
    { path: '/admin/customers', component: require('./components/Admin/Customer/Customers.vue').default },

    { path: '/admin/users', component: require('./components/Admin/Users/Users.vue').default },
    { path: '/admin/users/profile', component: require('./components/Admin/Users/Profile.vue').default },
    { path: '/admin/users/new', component: require('./components/Admin/Users/NewUser.vue').default },
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});
