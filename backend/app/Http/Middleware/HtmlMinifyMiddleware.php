<?php

namespace App\Http\Middleware;

use Closure;
use zz\Html\HTMLMinify;

class HtmlMinifyMiddleware {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next) {
        $response = $next($request);

        // Perform action
        $response->setContent(
            $str = str_replace(PHP_EOL, '',
                HTMLMinify::minify(
                    $response->content(),
                    ['optimizationLevel' => HTMLMinify::OPTIMIZATION_ADVANCED]
                )
            )
        );

        return $response;
    }
}

// EOF