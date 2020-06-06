<?php

namespace Tests\Feature\Addresses;

use App\Addresses\Database\Models\Address;
use Faker\Factory as FakerFactory;
use Tests\TestCase;

class GetAddressTest extends TestCase
{
    /**
     * Test for successfully loading a address
     *
     * @return void
     */
    public function testGetAddressSuccess(): void
    {
        $addressCount = Address::all()->count();
        $faker = FakerFactory::create();

        $address = Address::find($faker->numberBetween(0, $addressCount - 1));

        $response = $this->get('/api/v1/addresses/'.$address->id);

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

        $response = $this->get('/api/v1/addresses/'.$addressId);

        $response->assertStatus(404);
        $response->assertExactJson([
            'status' => 404,
            'message' => "Could not find Address with id $addressId",
        ]);
    }
}
