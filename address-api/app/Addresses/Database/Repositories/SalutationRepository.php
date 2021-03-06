<?php
/**
 * Created on 06.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace App\Addresses\Database\Repositories;

use App\Addresses\Database\Models\Salutation;
use Illuminate\Support\Collection;

class SalutationRepository {
    /**
     * Finds all salutations
     *
     * @return Collection<Salutation>
     */
    public function findAll(): Collection {
        return Salutation::all();
    }

    public function findByKey(string $key): Salutation {
        return Salutation::where('key', $key)->first();
    }
}
