<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Edit Room</div>

                <div class="card-body">
                    <form @submit.prevent="updateRecord" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>Room Name</label>
                            <input v-model="form.name" type="text" name="name"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                            <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Room Type</label>
                            <select v-model="form.room_type_id" name="room_type_id"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('room_type_id') }">
                                <option v-for="roomtype in roomtypes" :value="roomtype.id">{{roomtype.name}}</option>
                            </select>
                            <has-error :form="form" field="room_type_id"></has-error>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                roomtypes : [],
                form: new Form({
                    name: '',
                    room_type_id: ''
                }),
                url: '',

            }
        },
        methods: {
            loadRoom(id){
                axios.get('/api/admin/room/' + id)
                    .then(({data})=> {
                        this.form = new Form(data);
                    });

            },
            loadRoomTypes() {
                this.filter = null;
                axios.get("/api/admin/roomtype").then(({ data }) => (this.roomtypes = data.data));
            },
            updateRecord(e){

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
                            this.form.put('/api/admin/room/'+this.form.id)
                            .then(({data}) => {
                                this.$Progress.finish();
                                Toast.fire({
                                    type: 'success',
                                    title: 'Room has been updated'
                                })
                                this.$router.push('/admin/rooms');
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
            }
        },
        async created() {
            this.loadRoomTypes();

            var id = window.location.href.split('/').pop();
            this.loadRoom(id);
        }
    }
</script>
