<?php

namespace App\Addresses\Database\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * App\Addresses\Database\Models\Address
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $salutation_id
 * @property string $last_name
 * @property string $first_name
 * @property string $address
 * @property string $postal_code
 * @property string $city
 * @property \Illuminate\Support\Carbon|null $birthday
 * @mixin \Eloquent
 * @method static \Illuminate\Database\Eloquent\Builder|Address newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Address newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Address query()
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereSalutationId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Address find($id)
 * @method static \Illuminate\Database\Eloquent\Builder|Address findOrFail($id)
 * @property-read Salutation|null $salutation
 */
class Address extends Model
{
    protected $with = ['salutation'];

    /**
     * Define relationship between salutation and address
     *
     * @return BelongsTo - the relationship
     */
    public function salutation(): BelongsTo
    {
        return $this->belongsTo(Salutation::class);
    }

    /**
     * Parse birthday to carbon instance
     *
     * @param string $date - The date as string
     * @return Carbon - The parsed carbon instance
     */
    public function getBirthdayAttribute(string $date): Carbon
    {
        return Carbon::parse($date);
    }
}
