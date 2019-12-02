<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create Home Slider</div>

                <div class="card-body">
                    <form @submit.prevent="createUser" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
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
                            <b-img thumbnail rounded fluid v-show="withImage" :src="url" alt="Image 1" style="height: 50%;"></b-img>
                            <br>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                            <has-error :form="form" field="image"></has-error>
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
                    title: '',
                    content: '',
                    status: 'Active',
                    order: '',
                    image: null
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
                formData.append('image', this.imageFile);

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                this.form.image = this.imageFile;
                console.log(this.form);
                this.form.submit('post', '/api/admin/pages/sliders', {
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
                        title: 'Homepage Slider has been created'
                    })
                    this.$router.push('/admin/pages/sliders');
                }, (response) => {
                    this.$Progress.fail();

                    Toast.fire({
                        type: 'error',
                        title: 'Failed to save the Page Slider'
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
            }
        },
        created() {
            //this.loadUsers();
        }
    }
</script>
