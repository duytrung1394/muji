<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider {
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot() {
        Validator::extend('requiredRoles', function ($attribute, $value, $parameters) {
            $roles = json_decode($value);
            return !(is_null($roles) || sizeof($roles) === 0);
        });

        Validator::extend('resetPasswordFlag', function ($attribute, $value, $parameters) {
            $value = (int)$value;
            return ($value === 0 || $value === 1);
        });

        Validator::extend('uniqueExcludeOwn', function ($attribute, $value, $parameters) {

            $table = $parameters[ 0 ];
            $user_id = $parameters[ 1 ];

            $ret = DB::table($table)
                ->where('id', '!=', $user_id)
                ->where('username', $value)
                ->count();

            return ($ret === 0);
        });

        class_alias("Prismatix\Prismatix", "Prismatix");

        \Prismatix::initialize(
            env('PRISMATIX_ACCESS_DOMAIN'),
            env('PRISMATIX_ACCESS_TOKEN'),
            env('PRISMATIX_ACCESS_TOKEN_SECRET')
        );
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register() {
        if ($this->app->environment() == 'local') {
            $this->app->register('Wn\Generators\CommandsServiceProvider');
        }

        $this->app->configure('services');

        $this->app->singleton('mailer', function ($app) {
            return $app->loadComponent('mail', 'Illuminate\Mail\MailServiceProvider', 'mailer');
        });

        $this->app->alias('mailer', \Illuminate\Contracts\Mail\Mailer::class);
    }
}
