<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Address;
use App\Salutation;
use Faker\Generator as Faker;

$factory->define(Address::class, static function (Faker $faker) {
    $gender = $faker->randomElement(['male', 'female']);

    return [
        'salutation_id' => static function () use ($faker, $gender) {
            $salutationIds = Salutation::all()
                ->filter(static function (Salutation $saltutation) use ($gender) {
                    return (
                        ($gender === 'male' && $saltutation->key !=='ms')
                        || ($gender === 'female' && $saltutation->key !== 'mr')
                    );
                })
                ->pluck('id')
                ->toArray();

            return $faker->randomElement($salutationIds);
        },
        'last_name' => $faker->lastName,
        'first_name' => $faker->firstName($gender),
        'address' => $faker->streetAddress,
        'postal_code' => $faker->postcode,
        'city' => $faker->city,
        'birthday' => $faker->date(),
    ];
});
