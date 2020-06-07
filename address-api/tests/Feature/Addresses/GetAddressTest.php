<?php

namespace Tests\Feature\Addresses;

use App\Addresses\Database\Models\Address;
use Faker\Factory as FakerFactory;
use Tests\CreatesAuthToken;
use Tests\TestCase;

class GetAddressTest extends TestCase
{
    use CreatesAuthToken;

    /**
     * Test for successfully loading a address
     *
     * @return void
     */
    public function testGetAddressSuccess(): void
    {
        $addressCount = Address::all()->count();
        $faker = FakerFactory::create();

        $id = $faker->numberBetween(1, $addressCount);
        $address = Address::findOrFail($id);
        $token = $this->createToken('1');

        $response = $this->get('/api/v1/addresses/'.$address->id, [ 'Authorization' => "Bearer $token" ]);

        $response->assertStatus(200);
        $response->assertJsonStructure([
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
        ]);
        $response->assertExactJson([
            'id' => $address->id,
            'createdAt' => $address->created_at->toISOString(),
            'updatedAt' => $address->updated_at->toISOString(),
            'salutation' => $address->salutation->key,
            'firstName' => $address->first_name,
            'lastName' => $address->last_name,
            'address' => $address->address,
            'postalCode' => $address->postal_code,
            'city' => $address->city,
            'birthday' => $address->birthday->toISOString(),
        ]);
    }

    /**
     * Test for loading a not existing address
     *
     * @return void
     */
    public function testGetAddressNotFound(): void
    {
        $addressId = Address::all()->count() + 100;

        $token = $this->createToken('1');

        $response = $this->get('/api/v1/addresses/'.$addressId, [ 'Authorization' => "Bearer $token" ]);

        $response->assertStatus(404);
        $response->assertExactJson([
            'status' => 404,
            'message' => "Could not find Address with id $addressId",
        ]);
    }

    public function testGetAddressInvalidToken(): void
    {
        $response = $this->get('/api/v1/addresses/1');

        $response->assertStatus(403);
        $response->assertExactJson([
            'status' => 403,
            'message' => 'Forbidden Resource',
            'details' => 'The token could not be parsed from the request',
        ]);
    }
}
