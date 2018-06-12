<?php

namespace App;

use Fernet\Fernet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class App extends Model {

    protected $table = 'apps';

    protected $fillable = ['name', 'formal_name', 'ios_released', 'android_released'];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    protected $hidden = [
    ];
}

// EOF