<?php

namespace Tests\Feature\Addresses;

use Tests\TestCase;

class ListSalutationsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testListAllSalutations(): void
    {
        $response = $this->get('/api/v1/salutations');

        $response->assertStatus(200);
        $response->assertJsonCount(2, 'data');
        $response->assertJsonStructure(['data' => [['id', 'key']]]);
    }
}
