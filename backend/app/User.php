<?php

namespace App;

use Fernet\Fernet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Support\Facades\Log;
use Laravel\Lumen\Auth\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Model implements AuthenticatableContract, AuthorizableContract {

    use Authenticatable,
        //Authorizable,
        EntrustUserTrait;

    protected $table = 'users';

    protected $fillable = ['username', 'api_token', 'reset_password'];

    protected $dates = [];

    public static $rules = [
        // Validation rules
    ];

    protected $hidden = [
        'password',
    ];

    /**
     * @var string パスワード暗号化ソルト
     */
    public static $salt = "0pNzv9MKaUzFWPy66fWTaYXsDIz8IRjk";

    /**
     * @var string Fernet秘密鍵
     */
    public static $private_key = "MIIJKAIBAAKCAgEA+S6nErp41Jecmkyu";

    /**
     * 最終ログイン日時取得
     *
     * @param $value
     * @return string
     */
    public function getLastLoginAtAttribute($value) {

        $login = Login::where('user_id', $this->id)
            ->orderBy('login_at', 'desc')
            ->first();

        if (is_null($login)) {
            return '';
        }

        return $login->login_at;
    }

    /**
     * @return string Fernet秘密鍵取得メソッド
     */
    public static function getPrivateKey() {
        return base64_encode(self::$private_key);
    }

    /**
     * トークンチェックメソッド
     */
    public static function validate_token($token, $regenerate = false) {

        // Fernet 生成
        $fernet = new Fernet(User::getPrivateKey());

        // トークンからログインデータ取得
        $login = $fernet->decode($token);

        if ($login !== null) {

            // JSONデコード
            $json = json_decode($login);

            // 有効期限チェック
            if (time() <= $json->expires_date) {

                // ユーザー情報取得
                $user = User::where("id", "=", $json->id)->first();

                // トークンチェック
                if ($user && $user->api_token === $token) {

                    // トークン再生成
                    if ($regenerate === true) {

                        $user->api_token = $fernet->encode(json_encode([
                            'id' => $user->id,
                            'expires_date' => strtotime("+30 minute")
                        ]));
                        $user->save();

                    }

                    return $user;
                }

            }

        }

        return null;
    }

    public function roles() {
        return $this->belongsToMany('App\Role');
    }

    public function logins() {
        return $this->belongsToMany('App\Login', 'user_id');
    }

    /**
     * ログイン時刻打刻
     */
    public function clockIn() {

        $login = new Login();

        $login->user_id = $this->id;
        $login->save();

    }

    public function apps() {

        // 返却データ生成
        $data = [
        ];

        // アプリ定義一覧取得
        App::all()->each(function ($app) use (&$data) {

            // ロール一覧
            Role::all()->each(function ($role) use (&$data, $app) {

                if (starts_with($role->name, $app->name . '_')) {

                    // 利用可能なアプリ情報を追加
                    $data[] = [
                        'id' => $app->id,
                        'name' => $app->name,
                        'formal_name' => $app->formal_name,
                        'ios_released' => $app->ios_released,
                        'android_released' => $app->android_released,
                    ];

                }

            });
        });

        return $data;

    }

}

// EOF