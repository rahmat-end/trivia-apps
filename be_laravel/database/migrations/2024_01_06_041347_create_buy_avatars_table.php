<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('buy_avatars', function (Blueprint $table) {
            $table->id('id_buyavatar');
            $table->string('photo_buyavatar');
            $table->integer('price_buyavatar');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('buy_avatars');
    }
};
