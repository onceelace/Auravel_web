<template>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Room Types</h3>

                <div class="card-tools">
                    <div class="card-tools">
                        <a class="btn btn-success" href="/admin/roomtypes/new">
                            Add New <i class="fas fa-user-plus fa-w"></i>
                        </a>
                    </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Min Occupant</th>
                      <th>Max Occupant</th>
                      <th>Rate</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="roomtype in roomtypes" :key="'roomtype'+roomtype.id">
                        <td>{{roomtype.name}}</td>
                        <td>{{roomtype.min_occupant}}</td>
                        <td>{{roomtype.max_occupant}}</td>
                        <td >{{roomtype.rate}}</td>
                        <td>
                            <button type="button" class="btn btn-link" v-on:click="editUser(roomtype)"><i class="fa fa-edit text-blue"></i></button>
                            /
                            <a href="#" @click="deleteUser(roomtype.id)"><i class="fa fa-trash text-red"></i></a>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
</template>

<script>
    export default {
        data(){
            return {
                roomtypes : {},
                form: new Form({
                    user_type_id: '',
                    username: '',
                    email: '',
                    firstname: '',
                    lastname: '',
                    password: '',
                    confirmPassword: ''
                })
            }
        },
        methods: {
            loadRoomTypes() {
                axios.get("/api/admin/roomtype").then(({ data }) => (this.roomtypes = data.data));
            },
            createUser(){

            },
            editUser(info) {

            },
            deleteUser(id) {

            }
        },
        created() {
            this.loadRoomTypes();
        }
    }
</script>
