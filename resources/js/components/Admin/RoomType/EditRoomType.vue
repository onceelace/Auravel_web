<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Edit Room Type</div>

                <div class="card-body">
                    <form @submit.prevent="updateRoomType" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
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
                            <!-- <textarea v-model="form.description" name="description"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('description') }"></textarea> -->
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
                            <b-img thumbnail rounded fluid :src="url" alt="Image 1" style="height: 50%;"></b-img>
                            <br>
                            <!-- <input v-el="avatar" type="file" name="avatar" id="avatar" v-on:change="upload"> -->
                            <input type="hidden" v-model="form.old_image" id="old_image" name="old_image"/>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
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
                    id: 0,
                    name: '',
                    roomsize: '',
                    description: '',
                    amenities: '',
                    min_occupant: '',
                    max_occupant: '',
                    room_image: null,
                    old_image: '',
                    isChangedImage: false
                }),
                url: ''
            }
        },
        methods: {
            loadRoomType(id){
                axios.get('/api/admin/roomtype/' + id)
                    .then(({data})=> {
                        this.form = new Form(data)
                        this.form.isChangedImage = false;
                        this.url = data.room_image;
                        this.form.old_image = data.room_image;
                    });

            },
            updateRoomType(e){

                let formData = new FormData();
                formData.append('id', this.form.id);
                formData.append('max_occupant', this.form.max_occupant);
                formData.append('min_occupant', this.form.min_occupant);
                formData.append('name', this.form.name);
                formData.append('description', this.form.description);
                formData.append('amenities', this.form.amenities);
                formData.append('old_image', this.form.old_image);
                formData.append('rate', this.form.rate);
                formData.append('room_image', this.imageFile);
                formData.append('roomsize', this.form.roomsize);
                formData.append('room_image', this.imageFile);
                formData.append('isChangedImage', this.form.isChangedImage);
                formData.append('_method', 'PUT')

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                this.form.room_image = this.imageFile;

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

                            axios.post('/api/admin/roomtype/' + this.form.id, formData, { headers: {
                                 'content-type': 'multipart/form-data',
                                }
                            })
                            .then(({ data }) => {
                                this.$Progress.finish();
                                Toast.fire({
                                    type: 'success',
                                    title: 'Room Type has been updated'
                                })
                                this.$router.push('/admin/roomtypes');
                            })
                            .catch(function (error) {
                                Swal.fire(
                                        'Failed!',
                                        'Failed to update the room.',
                                        'success'
                                    )
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
                this.form.isChangedImage = true;
                this.imageFile = this.$refs.file.files[0];
                this.url = URL.createObjectURL(this.imageFile);
            }
        },
        created() {
            var id = window.location.href.split('/').pop();
            this.loadRoomType(id);
            console.log(id)
        }
    }
</script>
