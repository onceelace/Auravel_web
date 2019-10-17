<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">


                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5><strong>Booking Details</strong></h5>
                            <dl class="row">
                                <dt class="col-md-7 col-sm-12">Check-in Date</dt>
                                <dd class="col-md-5  col-sm-12">{{item.booking.check_in}}</dd>

                                <dt class="col-md-7 col-sm-12">Check-out Date</dt>
                                <dd class="col-md-5 col-sm-12">{{item.booking.check_out}}</dd>

                                <dt class="col-md-7 col-sm-12">Room Type</dt>
                                <dd class="col-md-5 col-sm-12">{{item.roomType.name}}</dd>

                                <dt class="col-md-7 col-sm-12">Room Name</dt>
                                <dd class="col-md-5 col-sm-12">{{item.room.name}}</dd>

                                <dt class="col-md-7 col-sm-12">Payment Status</dt>
                                <dd class="col-md-5 col-sm-12">{{item.booking.payment_status}}</dd>

                                <dt class="col-md-7 col-sm-12">Status</dt>
                                <dd class="col-md-5 col-sm-12">{{item.booking.status}}</dd>
                            </dl>
                        </div>
                        <div class="col-md-6">
                            <h5><strong>Customer Details</strong></h5>
                            <dl class="row">
                                <dt class="col-md-7 col-sm-12">Name</dt>
                                <dd class="col-md-5  col-sm-12">{{item.user.firstname}} {{item.user.lastname}}</dd>

                                <dt class="col-md-7 col-sm-12">Name</dt>
                                <dd class="col-md-5 col-sm-12">{{item.user.email}}</dd>

                                <dt class="col-md-7 col-sm-12">Contact Number</dt>
                                <dd class="col-md-5 col-sm-12">{{item.user.contactnumber}}</dd>

                                <dt class="col-md-7 col-sm-12">Address</dt>
                                <dd class="col-md-5 col-sm-12">{{item.user.address}}</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success"  @click="checkIn()" v-if="item.booking.status != 'Checked-In' && item.booking.status != 'Checked-Out' && item.booking.status != 'Cancelled'">Check-In</button>
                    <button class="btn btn-success" @click="checkOut()" v-if="item.booking.status != 'Booked' && item.booking.status != 'Cancelled' && item.booking.status != 'Checked-Out'">Check-Out</button>
                    <button class="btn btn-danger float-right" v-if="item.booking.status != 'Checked-Out' && item.booking.status != 'Checked-In'">Cancel Booking</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                item : {},
                form: new Form({
                    name: '',
                    room_type_id: '',
                    status: 'Available'
                }),
                url: '',

            }
        },
        methods: {
            loadRoomTypes(id) {
                this.filter = null;
                axios.get("/api/admin/bookings/" + id ).then(({ data }) => (this.item = data));
            },
            checkIn(e)
            {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                    })
                    .then((result) => {
                        if(result.value)
                        {
                            var id = window.location.href.split('/').pop();
                            this.form.put('/api/admin/bookings/checkin/'+id)
                            .then(({data}) => {
                                this.$Progress.finish();
                                Toast.fire({
                                    type: 'success',
                                    title: 'Room has been updated'
                                })
                                this.item = data;
                                //this.$router.push('/admin/rooms');
                            })
                            .catch(() => {
                                if (result.value) {
                                    Swal.fire(
                                        'Failed!',
                                        'Failed to update the room.',
                                        'success'
                                    )
                                }
                            });
                        }


                })
            },
            checkOut(e)
            {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                    })
                    .then((result) => {
                        if(result.value)
                        {
                            var id = window.location.href.split('/').pop();
                            this.form.put('/api/admin/bookings/checkout/'+id)
                            .then(({data}) => {
                                this.$Progress.finish();
                                Toast.fire({
                                    type: 'success',
                                    title: 'Room has been updated'
                                })
                                this.item = data;
                                //this.$router.push('/admin/rooms');
                            })
                            .catch(() => {
                                if (result.value) {
                                    Swal.fire(
                                        'Failed!',
                                        'Failed to update the room.',
                                        'success'
                                    )
                                }
                            });
                        }


                })
            },
            handleImageAdded: function(file, Editor, cursorLocation, resetUploader) {
                // An example of using FormData
                // NOTE: Your key could be different such as:
                // formData.append('file', file)

                var formData = new FormData();
                formData.append("image", file);

                axios({
                    url: "/api/admin/content/image",
                    method: "POST",
                    data: formData
                })
                .then(result => {
                    let url = result.data.url; // Get url from response
                    console.log(result);
                    Editor.insertEmbed(cursorLocation, "image", url);
                    resetUploader();
                })
                .catch(err => {
                    console.log(err);
                });
            },
            handleFileUpload(){
                this.imageFile = this.$refs.file.files[0];
                this.url = URL.createObjectURL(this.imageFile);
                this.withImage = true;
            }
        },
        async created() {
            var id = window.location.href.split('/').pop();
            this.loadRoomTypes(id);
        }
    }
</script>
