<template>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Bookings - Table View</h3>

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
                        <a class="btn btn-light" style="border-radius: 0;" href="/admin/bookings/Calendar">
                            Calendar View <i class="fas fa-calendar fa-w"></i>
                        </a>
                        <a class="btn btn-light" style="border-radius: 0;" @click="loadItems(selected)">
                            <i class="fas fa-sync-alt"></i>
                        </a>
                        <b-form-select v-model="selected" :options="options" style="display: inline-block; width: 50%;" @change="loadItems(selected)"></b-form-select>
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
                    :items="items"
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
                selected: 'Booked',
                options: [
                    { value: 'All', text: 'All' },
                    { value: 'Booked', text: 'Booked' },
                    { value: 'Checked-In', text: 'Checked-In' },
                    { value: 'Checked-Out', text: 'Checked-Out' },
                    { value: 'Cancelled', text: 'Cancelled' }
                ],
                items : [],
                fullPage: false,
                perPage: 10,
                currentPage: 1,
                filter: null,
                filterOn: [],
                fields: [
                    {
                        key: 'roomName',
                        sortable: true
                    },
                    {
                        key: 'firstname',
                        sortable: true
                    },
                    {
                        key: 'lastname',
                        sortable: true
                    },{
                        key: 'email',
                        sortable: true
                    },
                    {
                        key: 'status',
                        sortable: true
                    },
                    {
                        key: 'payment_status',
                        sortable: true
                    },
                    {
                        key: 'check_in',
                        sortable: true
                    },
                    {
                        key: 'check_out',
                        sortable: true
                    },
                    {
                        key: 'actions'
                    }
                ]
            }
        },
        methods: {
            loadItems(statusType) {
                this.filter = null;
                axios.get("/api/admin/booking?status=" + statusType).then(({ data }) => (this.items = data));
            },
            createUser(){

            },
            editRoomType(info) {
                this.$router.push({ path : '/admin/bookings/details/'+ info.id });
            },
            deleteRecord(id) {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                    })
                    .then((result) => {
                        if(result.value)
                        {
                            //Send request to the server
                            axios.delete("/api/admin/room/" + id)
                            .then((result) => {
                                console.log(result);
                                if (result.data.message === 'Deleted') {
                                     Toast.fire({
                                        type: 'success',
                                        title: 'Room has been deleted'
                                    })
                                    this.loadRooms();
                                }
                            })
                            .catch(() => {
                                if (result.value) {
                                    Swal.fire(
                                    'Failed!',
                                    'Failed to delete the room.',
                                    'success'
                                    )
                                }
                            });
                        }


                })
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },
        created() {
            this.loadItems('Booked');
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>
