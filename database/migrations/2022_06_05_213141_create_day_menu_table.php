<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDayMenuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('day_menu', function (Blueprint $table) {

            $table->unsignedBigInteger('day_id');
            $table->foreign('day_id')->references('id')->on('days');

            $table->unsignedBigInteger('menu_id');
            $table->foreign('menu_id')->references('id')->on('menus');

            $table->unsignedBigInteger('package_id');
            $table->foreign('package_id')->references('id')->on('packages');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('day_menu');
    }
}
