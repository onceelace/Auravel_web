<template>
    <div class="row justify-content-center mt-5">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Create Room</div>

                <div class="card-body">
                    <form @submit.prevent="createRecord" @keydown="form.onKeydown($event)" enctype="multipart/form-data">
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
                    room_type_id: '',
                    status: 'Available'
                }),
                url: '',

            }
        },
        methods: {
            loadRoomTypes() {
                this.filter = null;
                axios.get("/api/admin/roomtype").then(({ data }) => (this.roomtypes = data.data));
            },
            createRecord(e){
                 this.form.post('/api/admin/room')
                    .then(({data}) => {
                        this.$Progress.finish();
                        Toast.fire({
                            type: 'success',
                            title: 'Room has been created'
                        })
                        this.$router.push('/admin/rooms');
                    }, (response) => {
                        this.$Progress.fail();

                        Toast.fire({
                            type: 'error',
                            title: 'Failed to save the room'
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
            this.loadRoomTypes();
        }
    }
</script>
