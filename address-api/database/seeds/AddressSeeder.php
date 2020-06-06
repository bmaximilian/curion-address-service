<?php

use App\Addresses\Database\Models\Address;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (Address::all()->count() > 0) {
            return;
        }

        factory(Address::class, 50)->create();
    }
}
