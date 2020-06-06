<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', static function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('salutation_id');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('address');
            $table->string('postal_code', '5');
            $table->string('city');
            $table->date('birthday');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
