<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {

            $table->id();

            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->string('title')->nullable();
            $table->string('price')->nullable();
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->text('images')->nullable();

            $table->unsignedBigInteger('category_id')->nullable();
            $table->foreign('category_id')->references('id')->on('categories');
            
            $table->boolean('homepageCarousel')->default(true);
            $table->boolean('popularFoods')->default(true);
            
            $table->string('status')->default('published');
            
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
        Schema::dropIfExists('menus');
    }
}
