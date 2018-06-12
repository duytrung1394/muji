<?php

namespace App\Providers;

use App\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider {
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot() {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        $this->app[ 'auth' ]->viaRequest('token', function ($request) {

            if ($request->header('Authorization')) {

                $key = explode(' ', $request->header('Authorization'));

                // リクエスト値チェック
                if (isset($key[ 0 ]) && isset($key[ 1 ]) && $key[ 0 ] === 'Bearer') {

                    // トークン有効性チェック
                    return User::validate_token($key[ 1 ]);
                }
            }
        });
    }
}

// EOF