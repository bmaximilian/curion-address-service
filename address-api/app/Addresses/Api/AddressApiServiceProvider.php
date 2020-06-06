<?php

namespace App\Addresses\Api;

use Illuminate\Support\ServiceProvider;

class AddressApiServiceProvider extends ServiceProvider {
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadRoutesFrom(__DIR__.'/routes/api.php');
    }
}
