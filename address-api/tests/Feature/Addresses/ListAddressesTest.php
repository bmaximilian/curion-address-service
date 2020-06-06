<?php

namespace Tests\Feature\Addresses;

use App\Addresses\Database\Models\Address;
use Tests\TestCase;

class ListAddressesTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListAllSalutations(): void
    {
        $addressCount = Address::all()->count();
        $response = $this->get('/api/v1/addresses');

        $response->assertStatus(200);
        $response->assertJsonCount($addressCount, 'data');
        $response->assertJsonStructure(['data' => [[
            'id',
            'createdAt',
            'updatedAt',
            'salutation',
            'firstName',
            'lastName',
            'address',
            'postalCode',
            'city',
            'birthday',
        ]]]);
    }
}
