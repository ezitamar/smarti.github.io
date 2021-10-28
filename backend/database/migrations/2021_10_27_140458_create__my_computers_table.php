<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMyComputersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('MyComputers', function (Blueprint $table) {
            $table->id();
            $table->string('Manufacturer');
            $table->string('model');
            $table->bigInteger('size');
            $table->string('Processor');
            $table->bigInteger('Memory');
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
        Schema::dropIfExists('_my_computers');
    }
}
