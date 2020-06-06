<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ExpectJson
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $accept = $request->header('Accept');
        if (!$accept || $accept === '*/*') {
            $request->headers->set('Accept', 'application/json');
        }

        return $next($request);
    }
}
