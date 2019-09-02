<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoomTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('room_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('roomsize');
            $table->longText('highlights');
            $table->longText('description');
            $table->longText('services');
            $table->decimal('rate', 15, 2);
            $table->integer('min_occupant');
            $table->integer('max_occupant');
            $table->string('room_image');
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
        Schema::dropIfExists('room_types');
    }
}
