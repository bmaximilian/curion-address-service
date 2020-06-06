<?php

namespace App\Addresses\Database;

use App\Addresses\Database\Repositories\AddressRepository;
use App\Addresses\Database\Repositories\SalutationRepository;
use Illuminate\Support\ServiceProvider;

class AddressDatabaseServiceProvider extends ServiceProvider {
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(AddressRepository::class);
        $this->app->singleton(SalutationRepository::class);
    }
}
