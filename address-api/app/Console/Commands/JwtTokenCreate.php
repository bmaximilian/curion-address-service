<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtTokenCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jwt:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Creates a new jwt token to authenticate with';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $factory = JWTFactory::customClaims([
            'sub'   => '1',
            'iss'   => config('app.name'),
            'iat'   => Carbon::now()->timestamp,
            // 'exp'   => JWTFactory::getTTL(),
            'nbf'   => Carbon::now()->timestamp,
            'jti'   => uniqid('', false),
        ]);

        $payload = $factory->make();

        $token = JWTAuth::encode($payload);
        $this->info($token);
    }
}
