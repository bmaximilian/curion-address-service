<?php

namespace App\Addresses\Database\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Address
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address query()
 * @mixin \Eloquent
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Address whereUpdatedAt($value)
 * @property int $salutation_id
 * @property string $last_name
 * @property string $first_name
 * @property string $address
 * @property string $postal_code
 * @property string $city
 * @property string $birthday
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereBirthday($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address wherePostalCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Addresses\Models\Address whereSalutationId($value)
 */
class Address extends Model
{
    //
}
