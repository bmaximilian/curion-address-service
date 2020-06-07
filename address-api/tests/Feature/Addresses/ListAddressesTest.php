<?php

namespace Tests\Feature\Addresses;

use App\Addresses\Database\Models\Address;
use Tests\CreatesAuthToken;
use Tests\TestCase;

class ListAddressesTest extends TestCase
{
    use CreatesAuthToken;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListAllSalutations(): void
    {
        $addressCount = Address::all()->count();
        $token = $this->createToken('1');
        $response = $this->get('/api/v1/addresses', [ 'Authorization' => "Bearer $token" ]);

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

    public function testGetAddressInvalidToken(): void
    {
        $response = $this->get('/api/v1/addresses');

        $response->assertStatus(403);
        $response->assertExactJson([
            'status' => 403,
            'message' => 'Forbidden Resource',
            'details' => 'The token could not be parsed from the request',
        ]);
    }
}
