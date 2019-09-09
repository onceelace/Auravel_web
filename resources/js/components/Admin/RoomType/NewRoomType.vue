<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create Room Type</div>

                <div class="card-body">
                    <form @submit.prevent="createUser" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>Name</label>
                            <input v-model="form.name" type="text" name="name"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                            <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Room Size</label>
                            <input v-model="form.roomsize" type="text" name="roomsize"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('roomsize') }">
                            <has-error :form="form" field="roomsize"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea v-model="form.description" name="description"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('description') }"></textarea>
                            <has-error :form="form" field="description"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Highlights</label>
                            <textarea v-model="form.highlights" name="highlights"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('highlights') }"></textarea>
                            <has-error :form="form" field="highlights"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Services</label>
                            <input v-model="form.services" type="text" name="services"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('services') }">
                            <has-error :form="form" field="services"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Minimum Occupant</label>
                            <input v-model="form.min_occupant" type="number" min="0" name="min_occupant"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('min_occupant') }">
                            <has-error :form="form" field="min_occupant"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Maximum Occupant</label>
                            <input v-model="form.max_occupant" type="number" min="0" name="max_occupant"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('max_occupant') }">
                            <has-error :form="form" field="max_occupant"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Rate</label>
                            <input v-model="form.rate" type="number" min="0" name="rate"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('rate') }">
                            <has-error :form="form" field="rate"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Image</label><br>
                            <b-img thumbnail rounded fluid v-show="withImage" :src="url" alt="Image 1" style="height: 50%;"></b-img>
                            <br>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                            <has-error :form="form" field="room_image"></has-error>
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
                users : {},
                imageFile : '',
                form: new Form({
                    name: '',
                    roomsize: '',
                    description: '',
                    highlights: '',
                    min_occupant: '',
                    max_occupant: '',
                    room_image: null
                }),
                url: '',
                withImage: false
            }
        },
        methods: {
            createUser(e){
                //e.preventDefault();
                // this.$Progress.start();

                let formData = new FormData();
                formData.append('room_image', this.imageFile);

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                this.form.room_image = this.imageFile;

                console.log(this.form);

                // axios.post('/api/admin/roomtype', this.form, config)
                // .then(function (response) {
                //     currentObj.success = response.data.success;
                // })
                // .catch(function (error) {
                //     currentObj.output = error;
                // });

                this.form.submit('post', '/api/admin/roomtype', {
                    // Transform form data to FormData
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }],
                    onUploadProgress: e => {
                        // Do whatever you want with the progress event
                        // console.log(e)
                    }
                })
                .then(({ data }) => {
                    this.$router.push('/admin/roomtypes');
                })

                // this.form.post('/api/admin/roomtype',config)
                //     .then(({userdata}) => {
                //         // this.$Progress.finish();
                //         // Toast.fire({
                //         //     type: 'success',
                //         //     title: 'User has been saved'
                //         // })
                //         //this.$router.push('/admin/roomtypes');
                //         console.log(userdata);
                //     }, (response) => {
                //         // this.$Progress.fail();

                //         // Toast.fire({
                //         //     type: 'error',
                //         //     title: 'Failed to save the user'
                //         // })
                //     });

                console.log(this.form);
            },
            handleFileUpload(){
                this.imageFile = this.$refs.file.files[0];
                this.url = URL.createObjectURL(this.imageFile);
                this.withImage = true;
                //console.log(this.imageFile);
                //this.form.room_image = this.imageFile;
                //this.form.set('room_image');
                //this.form.get('room_image',this.imageFile);
            }
        },
        created() {
            //this.loadUsers();
        }
    }
</script>
