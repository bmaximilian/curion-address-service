<?php

namespace App\Addresses\Database\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Addresses\Database\Models\Salutation
 *
 * @property int $id
 * @property string $key
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 *
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation query()
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Salutation whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Salutation extends Model
{
}
