<?php
/**
 * Created on 07.06.20.
 *
 * @author Maximilian Beck <contact@maximilianbeck.de>
 */

namespace Tests;

use Illuminate\Support\Carbon;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;

trait CreatesAuthToken {
    public function createToken(string $user): string {
        $factory = JWTFactory::customClaims([
            'sub'   => $user,
            'iss'   => config('app.name'),
            'iat'   => Carbon::now()->timestamp,
            // 'exp'   => JWTFactory::getTTL(),
            'nbf'   => Carbon::now()->timestamp,
            'jti'   => uniqid('', false),
        ]);

        $payload = $factory->make();

        return JWTAuth::encode($payload);
    }
}
