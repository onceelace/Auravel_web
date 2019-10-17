<template>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Bookings - Calendar View</h3>

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
                        <a class="btn btn-light" style="border-radius: 0;" href="/admin/bookings">
                            Table View <i class="fas fa-table fa-w"></i>
                        </a>
                        <a class="btn btn-light" style="border-radius: 0;" @click="loadItems()">
                            <i class="fas fa-sync-alt"></i>
                        </a>
                    </div>
                </div>
<v-app id="dayspan" v-cloak>
    <ds-calendar-app :calendar="calendar"></ds-calendar-app>
  </v-app>
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
            loadItems() {
                this.filter = null;
                axios.get("/api/admin/booking").then(({ data }) => (this.items = data));
            },
            createUser(){

            },
            editRoomType(info) {
                this.$router.push({ path : '/admin/room/edit/' + info.id });
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
            this.loadItems();
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>
