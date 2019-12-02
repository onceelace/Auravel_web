<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Edit Room Type</div>

                <div class="card-body">
                    <form @submit.prevent="updateSlider" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>Title</label>
                            <input v-model="form.title" type="text" name="title"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                            <has-error :form="form" field="title"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Sub-Title</label>
                            <input v-model="form.content" type="text" name="content"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('content') }">
                            <has-error :form="form" field="content"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Status</label>
                            <select v-model="form.status" name="status"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('status') }">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                            <has-error :form="form" field="status"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Order</label>
                            <input v-model="form.order" type="number" min="0" name="order"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('order') }">
                            <has-error :form="form" field="order"></has-error>
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
                    title: '',
                    content: '',
                    status: 'Active',
                    order: '',
                    image: null,
                    old_image: '',
                    isChangedImage: false
                }),
                url: ''
            }
        },
        methods: {
            loadSlider(id){
                axios.get('/api/admin/pages/sliders/' + id)
                    .then(({data})=> {
                        this.form = new Form(data)
                        this.form.isChangedImage = false;
                        this.url = data.image;
                        this.form.old_image = data.image;
                    });

            },
            updateSlider(e){

                let formData = new FormData();
                formData.append('id', this.form.id);
                formData.append('title', this.form.title);
                formData.append('content', this.form.content);
                formData.append('status', this.form.status);
                formData.append('order', this.form.order);
                formData.append('old_image', this.form.old_image);
                formData.append('image', this.imageFile);
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

                            axios.post('/api/admin/pages/sliders/' + this.form.id, formData, { headers: {
                                 'content-type': 'multipart/form-data',
                                }
                            })
                            .then(({ data }) => {
                                this.$Progress.finish();
                                Toast.fire({
                                    type: 'success',
                                    title: 'Page Slider has been updated'
                                })
                                this.$router.push('/admin/pages/sliders');
                            })
                            .catch(function (error) {
                                Swal.fire(
                                        'Failed!',
                                        'Failed to update the Page SLider.',
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
            this.loadSlider(id);
            console.log(id)
        }
    }
</script>
