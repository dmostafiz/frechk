<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->string('order_id')->nullable();

            $table->unsignedBigInteger('user_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users');

            $table->unsignedBigInteger('address_id')->nullable();
            $table->foreign('address_id')->references('id')->on('addresses');

            $table->double('vat')->default(0.00);
            $table->double('delivery_cost')->default(0.00);
            
            $table->double('order_total')->default(0.00);
            $table->double('sub_total')->default(0.00);

            $table->string('payment_method')->default('cash');
            
            $table->string('status')->default('pending');
            
            $table->boolean('pre_order')->default(false);
            $table->datetime('delivery_at');

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
        Schema::dropIfExists('orders');
    }
}
