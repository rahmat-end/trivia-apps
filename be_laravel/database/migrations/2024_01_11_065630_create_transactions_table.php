<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            // Use bigIncrements for auto-incrementing primary key
            $table->id('id_transaction');
            $table->integer('amount_diamond');
            $table->integer('total_price');
            $table->string('status');

            // Use UUID type for user_id
            $table->bigInteger('user_id')->index();

            // Define other columns without auto-incrementing for composite primary key
            $table->bigInteger('id_diamond')->index();

            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('id_diamond')->references('id_diamond')->on('diamonds');

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
        Schema::dropIfExists('transactions');
    }
};
