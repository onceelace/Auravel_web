<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Home Page Content</div>

                <div class="card-body">
                    <form @submit.prevent="updatePage" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>Title</label>
                            <input v-model="form.title" type="text" name="title"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('title') }">
                            <has-error :form="form" field="title"></has-error>
                        </div>

                        <div class="form-group">
                            <label>Content</label>
                            <vue-editor id="editor" v-model="form.content"></vue-editor>
                            <has-error :form="form" field="content"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Image 1</label><br>
                            <b-img thumbnail rounded fluid v-show="form.old_image1" :src="url1" alt="Image 1" style="height: 30%; width: 30%;"></b-img>
                            <br>
                            <input type="file" id="image1" ref="image1" v-on:change="handleFileUpload(1)"/>
                            <has-error :form="form" field="image1"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Image 2</label><br>
                            <b-img thumbnail rounded fluid v-show="form.old_image2" :src="url2" alt="Image 2" style="height: 30%; width: 30%;"></b-img>
                            <br>
                            <input type="file" id="image2" ref="image2" v-on:change="handleFileUpload(2)"/>
                            <has-error :form="form" field="image2"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Image 3</label><br>
                            <b-img thumbnail rounded fluid v-show="form.old_image3" :src="url3" alt="Image 3" style="height: 30%; width: 30%;"></b-img>
                            <br>
                            <input type="file" id="image3" ref="image3" v-on:change="handleFileUpload(3)"/>
                            <has-error :form="form" field="image3"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Image 4</label><br>
                            <b-img thumbnail rounded fluid v-show="form.old_image4" :src="url4" alt="Image 4" style="height: 30%; width: 30%;"></b-img>
                            <br>
                            <input type="file" id="image4" ref="image4" v-on:change="handleFileUpload(4)"/>
                            <has-error :form="form" field="image4"></has-error>
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
                users : {},
                imageFile1 : '',
                imageFile2 : '',
                imageFile3 : '',
                imageFile4 : '',
                form: new Form({
                    title: '',
                    content: '',
                    image1: null,
                    image2: null,
                    image3: null,
                    image4: null,
                    old_image1: '',
                    old_image2: '',
                    old_image3: '',
                    old_image4: '',
                }),
                url1: '',
                url2: '',
                url3: '',
                url4: '',

            }
        },
        methods: {
            loadHomeDetail(){
                axios.get('/api/admin/pages/home/')
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
                            this.form.isChangedImage = false;

                            this.url1 = data.image1;
                            this.form.old_image1 = data.image1;

                            this.url2 = data.image2;
                            this.form.old_image2 = data.image2;

                            this.url3 = data.image3;
                            this.form.old_image3 = data.image3;
                            
                            this.url4 = data.image4;
                            this.form.old_image4 = data.image4;
                        }
                        
                    });

            },
            updatePage(e){
                let formData = new FormData();
                
                formData.append('title', this.form.title);
                formData.append('content', this.form.content);
                formData.append('image1', this.imageFile1);
                formData.append('image2', this.imageFile2);
                formData.append('image3', this.imageFile3);
                formData.append('image4', this.imageFile4);

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
                    formData.append('old_image1', this.form.old_image1);
                    formData.append('old_image2', this.form.old_image2);
                    formData.append('old_image3', this.form.old_image3);
                    formData.append('old_image4', this.form.old_image4);
                    formData.append('_method', 'PUT')
                    axios.post('/api/admin/pages/home', formData, { headers: {
                        'content-type': 'multipart/form-data',
                        }
                    })
                    .then(({ data }) => {
                        this.$Progress.finish();
                        Toast.fire({
                            type: 'success',
                            title: 'Room Type has been updated'
                        })
                        this.loadHomeDetail();
                        //this.$router.push('/admin/roomtypes');
                    })
                    .catch(function (error) {
                        Swal.fire(
                                'Failed!',
                                'Failed to update the room.',
                                'success'
                            )
                    });
                }else{
                    formData.append('_method', 'POST')
                    this.form.submit('post', '/api/admin/pages/home', {
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
                        this.loadHomeDetail();
                    }, (response) => {
                        this.$Progress.fail();

                        Toast.fire({
                            type: 'error',
                            title: 'Failed to save the room type'
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
                
                console.log(this.imageFile1);
                console.log(this.imageFile2);
                console.log(this.imageFile3);
                console.log(this.imageFile4);
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
