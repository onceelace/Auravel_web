<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">About Us Page Content</div>

                <div class="card-body">
                    <form @submit.prevent="updatePage" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <vue-editor id="editor" useCustomImageHandler @image-added="handleImageAdded" v-model="form.content"></vue-editor>
                            <has-error :form="form" field="content"></has-error>
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
                isWithData: false,
                form: new Form({
                    content: '',
                }),
            }
        },
        methods: {
            loadHomeDetail(){
                axios.get('/api/admin/pages/aboutus')
                    .then(({data})=> {
                        if(data == '')
                        {
                            this.isWithData = false;
                        }else if (data == null)
                        {
                            this.isWithData = false;
                        }else{
                            this.isWithData = true;
                            this.form = new Form(data)
                        }
                        
                    });

            },
            updatePage(e){
                let formData = new FormData();
                formData.append('content', this.form.content);

                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }
                this.form.image1 = this.imageFile1;
                this.form.image2 = this.imageFile2;
                this.form.image3 = this.imageFile3;
                this.form.image4 = this.imageFile4;
                if(this.isWithData === true)
                {
                    formData.append('id', this.form.id);
                    formData.append('_method', 'PUT')
                    axios.post('/api/admin/pages/aboutus', formData, { headers: {
                        'content-type': 'multipart/form-data',
                        }
                    })
                    .then(({ data }) => {
                        this.$Progress.finish();
                        Toast.fire({
                            type: 'success',
                            title: 'About Us content has been updated'
                        })
                        this.loadHomeDetail();
                        //this.$router.push('/admin/roomtypes');
                    })
                    .catch(function (error) {
                        Swal.fire(
                                'Failed!',
                                'Failed to update the content.',
                                'success'
                            )
                    });
                }else{
                    formData.append('_method', 'POST')
                    this.form.submit('post', '/api/admin/pages/aboutus', {
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
                            title: 'About Us content has been created'
                        })
                        this.loadHomeDetail();
                    }, (response) => {
                        this.$Progress.fail();

                        Toast.fire({
                            type: 'error',
                            title: 'Failed to save the content'
                        })
                    });
                }
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
            handleFileUpload(id){
                
                if(id === 1)
                {
                    this.imageFile1 = this.$refs.image1.files[0];
                    this.url1 = URL.createObjectURL(this.imageFile1);
                }

                if(id === 2)
                {
                    this.imageFile2 = this.$refs.image2.files[0];
                    this.url2 = URL.createObjectURL(this.imageFile2);
                }

                if(id === 3)
                {
                    this.imageFile3 = this.$refs.image3.files[0];
                    this.url3 = URL.createObjectURL(this.imageFile3);
                }

                if(id === 4)
                {
                    this.imageFile4 = this.$refs.image4.files[0];
                    this.url4 = URL.createObjectURL(this.imageFile4);
                }
                
                //this.form.room_image = this.imageFile;
                //this.form.set('room_image');
                //this.form.get('room_image',this.imageFile);
            }
        },
        created() {
            this.loadHomeDetail();
        }
    }
</script>
