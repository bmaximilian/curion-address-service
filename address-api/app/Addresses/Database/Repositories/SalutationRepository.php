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
        Salutation::all();
    }
}
