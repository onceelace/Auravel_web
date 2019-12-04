<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">New User</div>

                <div class="card-body">
                    <form @submit.prevent="createRecord" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
                        <div class="form-group">
                            <label>First Name</label>
                            <input v-model="form.firstname" type="text" name="firstname"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('firstname') }">
                            <has-error :form="form" field="firstname"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input v-model="form.lastname" type="text" name="lastname"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('lastname') }">
                            <has-error :form="form" field="lastname"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Contact Number</label>
                            <input v-model="form.contactnumber" type="text" name="contactnumber"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('contactnumber') }">
                            <has-error :form="form" field="contactnumber"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Address</label>
                            <textarea v-model="form.address" id="address" type="text" name="address"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('address') }"></textarea>
                            <has-error :form="form" field="address"></has-error>
                        </div>
                        <hr>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input v-model="form.email" type="email" name="email"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input v-model="form.username" type="text" name="username"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('username') }">
                            <has-error :form="form" field="username"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Account Type</label>
                            <select v-model="form.accounttype" name="accounttype"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('accounttype') }">
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                            </select>
                            <has-error :form="form" field="accounttype"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input v-model="form.password" type="password" name="password"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                            <has-error :form="form" field="password"></has-error>
                        </div>
                        <div class="form-group">
                            <label>Confirm Password</label>
                            <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
                            <has-error :form="form" field="password_confirmation"></has-error>
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
                    firstname: '',
                    lastname: '',
                    status: 'Active',
                    contactnumber: '',
                    address: '',
                    email: '',
                    username: '',
                    accounttype: 'Admin',
                    password: '',
                    password_confirmation: ''
                }),
                url: '',

            }
        },
        methods: {
            createRecord(e){
                 this.form.post('/api/admin/user')
                    .then(({data}) => {
                        this.$Progress.finish();
                        Toast.fire({
                            type: 'success',
                            title: 'User has been created'
                        })
                        this.$router.push('/admin/admin');
                    }, (response) => {
                        this.$Progress.fail();

                        Toast.fire({
                            type: 'error',
                            title: 'Failed to save the user'
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
        async created() {
           
        }
    }
</script>
