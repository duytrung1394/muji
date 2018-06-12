<?php

namespace App\Http\Middleware;

use Closure;
use zz\Html\HTMLMinify;

class AcceptHeaderJsonMiddleware {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next) {

        // Acceptヘッダーチェック
        if (!in_array('application/json', explode(', ', $request->header('Accept')), true)) {
            abort(406, 'Not Acceptable, You should specify "application/json" in "Accept".');
        }

        $response = $next($request);

        return $response;
    }
}

// EOF