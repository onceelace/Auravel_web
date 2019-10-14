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
                            <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="form.description"></vue-editor>
                            <has-error :form="form" field="description"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Amenities</label>
                            <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="form.amenities"></vue-editor>
                            <has-error :form="form" field="amenities"></has-error>
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
                    amenities: '',
                    min_occupant: '',
                    max_occupant: '',
                    room_image: null
                }),
                url: '',
                withImage: false,

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
                .then(({data}) => {
                    this.$Progress.finish();
                    Toast.fire({
                        type: 'success',
                        title: 'Room Type has been created'
                    })
                    this.$router.push('/admin/roomtypes');
                }, (response) => {
                    this.$Progress.fail();

                    Toast.fire({
                        type: 'error',
                        title: 'Failed to save the room type'
                    })
                });
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
