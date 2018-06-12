<?php namespace App;

use Illuminate\Database\Eloquent\Model;

class Login extends Model {

    protected $table = 'logins';

    protected $fillable = ['id', 'user_id', 'login_at'];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    protected $hidden = [
    ];
}

// EOF