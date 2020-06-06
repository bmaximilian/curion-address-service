<?php

namespace Tests\Feature\Addresses;

use App\Addresses\Database\Models\Address;
use Tests\TestCase;

class ShowSalutationsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testShowAllSalutations(): void
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
