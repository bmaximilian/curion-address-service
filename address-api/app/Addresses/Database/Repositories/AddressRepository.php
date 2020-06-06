<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Addresses\Database\Repositories;

use App\Addresses\Database\Models\Address;
use Illuminate\Support\Collection;

class AddressRepository {

    /**
     * Finds all addresses
     *
     * @return Collection<Address>
     */
    public function findAll(): Collection {
        return Address::all();
    }
}
