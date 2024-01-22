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
    // ...

public function up()
{
    Schema::create('user_buy_avatars', function (Blueprint $table) {
        $table->id('id_user_buy_avatar');
        $table->bigInteger('user_id')->index();
        $table->bigInteger('id_buyavatar')->index();
        
        $table->foreign('user_id')
            ->references('user_id')
            ->on('users')
            ->onDelete('cascade'); 
            
        $table->foreign('id_buyavatar')
            ->references('id_buyavatar')
            ->on('buy_avatars')
            ->onDelete('cascade'); 

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
        Schema::dropIfExists('table_user_buy_avatar');
    }
};
