<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('booking_id')->nullable()->unsigned();
            $table->integer('mattress')->default(0);
            $table->decimal('mattress_amount', 8, 2);
            $table->decimal('reservation', 8, 2);
            $table->decimal('amount', 8, 2);
            $table->decimal('totalamount', 8, 2);
            $table->decimal('amountpaid', 8, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
