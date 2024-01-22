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
            $table->id('id_transaction');
            $table->integer('amount_diamond');
            $table->integer('total_price');
            $table->string('status');
            $table->bigInteger('user_id')->index();
            $table->bigInteger('id_diamond')->index();

            $table->foreign('user_id')
                ->references('user_id')
                ->on('users')
                ->onDelete('cascade'); // Menambahkan onDelete('cascade') di sini

            $table->foreign('id_diamond')
                ->references('id_diamond')
                ->on('diamonds')
                ->onDelete('cascade'); // Menambahkan onDelete('cascade') di sini

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
