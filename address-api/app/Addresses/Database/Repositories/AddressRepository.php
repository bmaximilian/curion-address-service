<?php

namespace App\Addresses\Database\Repositories;

use App\Addresses\Database\Models\Address;
use Illuminate\Database\Eloquent\ModelNotFoundException;
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
    /**
     * Finds one address
     *
     * @param string $id - Id of the requested address
     * @return Address
     * @throws ModelNotFoundException
     */
    public function findById(string $id): Address {
        return Address::findOrFail($id);
    }

    public function store(Address $formValue): Address{
        $formValue->save();
        return $formValue;
    }

    public function destroy(string $id): void{
        $this->findById($id)->delete();
    }
}
