<?php

use Illuminate\Support\Facades\Route;
use App\Addresses\Api\Controllers\AddressController;
use App\Addresses\Api\Controllers\SalutationController;

Route::prefix('api')->middleware('api')->group(static function () {
    Route::prefix('v1')->group(static function () {
        Route::resource('addresses', AddressController::class)->only(['index', 'show']);

        Route::group(['prefix' => 'salutations'], static function () {
            Route::get('/', SalutationController::class.'@index');
        });
    });
});
