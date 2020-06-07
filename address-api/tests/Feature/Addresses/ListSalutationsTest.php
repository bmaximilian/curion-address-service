<?php

namespace Tests\Feature\Addresses;

use Tests\CreatesAuthToken;
use Tests\TestCase;

class ListSalutationsTest extends TestCase
{
    use CreatesAuthToken;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListAllSalutations(): void
    {
        $token = $this->createToken('1');
        $response = $this->get('/api/v1/salutations', [ 'Authorization' => "Bearer $token" ]);

        $response->assertStatus(200);
        $response->assertJsonCount(2, 'data');
        $response->assertJsonStructure(['data' => [['id', 'key']]]);
    }

    public function testGetAddressInvalidToken(): void
    {
        $response = $this->get('/api/v1/salutations');

        $response->assertStatus(403);
        $response->assertExactJson([
            'status' => 403,
            'message' => 'Forbidden Resource',
            'details' => 'The token could not be parsed from the request',
        ]);
    }
}
