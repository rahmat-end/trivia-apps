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
        Schema::create('user_buy_avatars', function (Blueprint $table) {
            // Use bigIncrements for auto-incrementing primary key
            $table->id('id_user_buy_avatar');
            
            // Use UUID type for user_id
            $table->bigInteger('user_id')->index();
            
            // Define other columns without auto-incrementing for composite primary key
            $table->bigInteger('id_buyavatar')->index();
            
            $table->foreign('user_id')->references('user_id')->on('users');
            $table->foreign('id_buyavatar')->references('id_buyavatar')->on('buy_avatars');
            
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
        Schema::dropIfExists('user_buy_avatar');
    }
};
