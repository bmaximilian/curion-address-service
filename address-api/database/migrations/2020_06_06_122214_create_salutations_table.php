<?php

use App\Addresses\Database\Models\Salutation;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalutationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salutations', static function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('key')->unique();
        });

        // insert default data
        $salutationKeys = ['mr', 'ms'];

        foreach ($salutationKeys as $salutationKey) {
            $salutation = new Salutation();
            $salutation->key = $salutationKey;
            $salutation->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('salutations');
    }
}
