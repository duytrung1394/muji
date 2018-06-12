<?php namespace App;

use Fernet\Fernet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;

class PasswordResets extends Model implements AuthenticatableContract, AuthorizableContract {

    use Authenticatable, Authorizable;

    protected $table = 'password_resets';

    protected $fillable = ['user_id', 'token'];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    protected $hidden = [
    ];
}

// EOF