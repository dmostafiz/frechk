<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDayPackageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('day_package', function (Blueprint $table) {
           
            $table->unsignedBigInteger('day_id');
            $table->foreign('day_id')->references('id')->on('days');

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
        Schema::dropIfExists('day_package');
    }
}
