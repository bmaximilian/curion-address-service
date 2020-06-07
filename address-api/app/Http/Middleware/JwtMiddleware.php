<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class JwtMiddleware extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     * @throws JWTException
     */
    public function handle(Request $request, Closure $next)
    {
        $payload = $this->auth->parseToken()->getPayload();

        $request->merge([ 'jwtTokenPayload' => $payload ]);

        return $next($request);
    }
}
