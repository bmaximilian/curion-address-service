<?php
namespace App\Addresses;

use App\Addresses\Api\AddressApiServiceProvider;
use App\Addresses\Database\AddressDatabaseServiceProvider;
use Illuminate\Support\ServiceProvider;

/**
 * Class UserServiceProvider
 *
 * @package App\User\Providers
 */
class AddressServiceProvider extends ServiceProvider
{
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register(): void
    {
        $this->app->register(AddressDatabaseServiceProvider::class);
        $this->app->register(AddressApiServiceProvider::class);
    }
}
