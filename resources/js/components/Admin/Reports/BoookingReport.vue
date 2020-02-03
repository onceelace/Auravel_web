<template>
    <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Reports</h3>

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
                        <div class="row">
                            <div class="col-md-5 m-0 p-0 pl-3">
                            
                                <datepicker v-model="fromDate" input-class="form-control clickable" name="fromDate"></datepicker>
                            
                            </div>
                            <div class="col-md-5 m-0 p-0 pl-2">
                            
                            
                                <datepicker v-model="toDate" input-class="form-control clickable" name="toDate"></datepicker>
                            
                            </div>
                            <div class="col-md-2 m-0 p-0 pl-2">
                                 <a class="btn btn-light" style="border-radius: 0;" @click="filterReports()">
                                    <i class="fas fa-check"></i>
                                </a>
                            </div>

                        </div>
                       
                    </div>
                    <div class="col-md-6 col-xs-12">
                        
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
                    <template v-slot:cell(customerName)="row">
                        {{ row.item.firstname }} {{ row.item.lastname }}<br><small>{{ row.item.email }}</small>
                    </template>
                    <template v-slot:cell(amount)="row">
                        PHP {{ row.item.amount | toCurrency }}
                    </template>
                    <template v-slot:cell(mattressAmount)="row">
                        PHP {{ row.item.mattressAmount | toCurrency }}<br><small>{{ row.item.mattressQty }} x 550.00</small>
                    </template>
                    <template v-slot:cell(amountpaid)="row">
                        PHP {{ row.item.amountpaid | toCurrency }}
                    </template>
                </b-table>
                <div class="d-flex justify-content-end">
                    <div class="p-2">Total Amount</div>
                    <div class="p-2"><strong>{{totalItem | toCurrency}}</strong></div>
                </div>
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
import moment from 'moment'
import Datepicker from 'vuejs-datepicker';
    export default {
        components:{
            Datepicker
        },
        data(){
            return {
                fromDate: new Date(),
                toDate: new Date(),
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
                        key: 'customerName',
                        sortable: true,
                        label: 'Customer Name'
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
                        key: 'amount',
                        sortable: true
                    },
                    {
                        key: 'mattressAmount',
                        sortable: true,
                        label: 'Mattress'
                    },
                    {
                        key: 'amountpaid',
                        sortable: true,
                        label: 'Total Amount'
                    }
                ]
            }
        },
        methods: {
            loadItems(fDate,tDate) {
                this.filter = null;
                axios.get("/api/admin/booking/reports?from=" + moment(fDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + " 00:00:00" + "&to=" + moment(tDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + " 23:59:59").then(({ data }) => (this.items = data));
            },
            filterReports(){
                this.loadItems(this.fromDate,this.toDate);
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        },
        created() {
            this.loadItems(new Date(),new Date());
        },
        computed: {
            rows() {
                return this.items.length
            },
            totalItem: function(){
                let sum = 0;
                for(let i = 0; i < this.items.length; i++){
                    sum += (parseFloat(this.items[i].amountpaid));
                }

                return sum;
            }
        }
    }
</script>
