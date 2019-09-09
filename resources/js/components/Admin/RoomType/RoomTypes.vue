<template>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Room Types</h3>

                <div class="card-tools">
                    <div class="card-tools">
                        <!-- <a class="btn btn-success" href="/admin/roomtypes/new">
                            Add New <i class="fas fa-user-plus fa-w"></i>
                        </a> -->
                    </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive" style="min-height: 400px;">

                <div class="row mb-2">
                    <div class="col-md-6 col-xs-12">
                        <a class="btn btn-light" style="border-radius: 0;" href="/admin/roomtypes/new">
                            Add New <i class="fas fa-user-plus fa-w"></i>
                        </a>
                        <a class="btn btn-light" style="border-radius: 0;" @click="loadRoomTypes()">
                            <i class="fas fa-sync-alt"></i>
                        </a>
                    </div>
                    <div class="col-md-6 col-xs-12">
                        <b-form-group
                            label="Filter"
                            label-cols-sm="3"
                            label-align-sm="right"
                            label-size="sm"
                            label-for="filterInput"
                            class="mb-0"
                            >
                            <b-input-group size="sm">
                                <b-form-input
                                v-model="filter"
                                type="search"
                                id="filterInput"
                                placeholder="Type to Search"
                                ></b-form-input>
                                <b-input-group-append>
                                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form-group>
                    </div>
                </div>
                <b-table sticky-header striped hover show-empty
                    :items="roomtypes"
                    :fields="fields"
                    :current-page="currentPage"
                    :per-page="perPage"filterInput
                    :filter="filter"
                    @filtered="onFiltered"
                    >
                    <!-- <template v-slot:cell(room_image)="row">
                        <b-img thumbnail rounded fluid :src="`${row.item.room_image}`" alt="Image 1" style="height: 50%;"></b-img>
                    </template> -->
                    <template v-slot:cell(actions)="row">
                        <b-button size="sm" @click="editRoomType(row.item)" class="mr-2" variant="link">
                            <i class="fa fa-edit text-blue"></i>
                        </b-button>
                        <b-button size="sm" class="mr-2" variant="link">
                            <i class="fa fa-trash text-red"></i>
                        </b-button>
                    </template>
                </b-table>
                <b-row align-h="end">
                    <b-col cols="4">
                        <b-pagination
                            style="float: right"
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table">
                        </b-pagination>
                    </b-col>
                </b-row>
                <!-- <table class="table table-hover">
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
                </table> -->
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
                roomtypes : [],
                fullPage: false,
                perPage: 10,
                currentPage: 1,
                filter: null,
                filterOn: [],
                fields: [
                    {
                        key: 'name',
                        sortable: true
                    },
                    {
                        key: 'min_occupant',
                        sortable: true
                    },
                    {
                        key: 'max_occupant',
                        sortable: true
                    },
                    {
                        key: 'roomsize',
                        sortable: true
                    },
                    {
                        key: 'rate',
                        sortable: true
                    },
                    {
                        key: 'actions'
                    }
                ]
            }
        },
        methods: {
            loadRoomTypes() {
                this.filter = null;
                axios.get("/api/admin/roomtype").then(({ data }) => (this.roomtypes = data.data));
            },
            createUser(){

            },
            editRoomType(info) {
                this.$router.push({ path : '/admin/roomtypes/edit/' + info.id });
            },
            deleteUser(id) {

            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },
        created() {
            this.loadRoomTypes();
        },
        computed: {
            rows() {
                return this.roomtypes.length
            }
        }
    }
</script>
