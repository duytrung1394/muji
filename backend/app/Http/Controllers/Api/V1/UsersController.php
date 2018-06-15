<?php

namespace App\Http\Controllers\Api\V1;

use App\App;
use App\Mail\ResetPasswordShipped;
use App\Role;
use App\User;
use App\PasswordResets;
use Illuminate\Http\Request;
use Fernet\Fernet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Mockery\Generator\StringManipulation\Pass\Pass;

class UsersController extends Controller {

    /**
     * プロフィール配列取得メソッド
     *
     * @param User $user
     * @return array
     */
    private function _getProfile(User $user) {

        return [
            'id' => $user->id,
            'reset_password' => $user->reset_password,
        ];

    }

    /**
     * login メソッド
     *
     * username/passwordによるユーザー認証とトークン発行処理を行います。
     */
    public function login(Request $request) {

        // Fernet 生成
        $fernet = new Fernet(User::getPrivateKey());

        // リクエスト値チェック
        if ($request->has('username') && $request->has('password')) {

            // ユーザー情報取得
            $user = User:: where("username", "=", $request->input('username'))
                ->where("password", "=", hash('sha512', $request->input('password') . User::$salt))
                ->first();

            if ($user) {

                // 返却データ生成
                $data = [];

                DB::transaction(function () use ($user, $fernet) {

                    // トークン生成
                    $user->api_token = $fernet->encode(json_encode([
                        'id' => $user->id,
                        'expires_date' => strtotime("+30 minute")
                    ]));

                    // ログイン打刻
                    $user->clockIn();

                    // 保存
                    $user->save();

                });

                // 返却データ設定
                $data[ 'token' ] = $user->api_token;
                $data[ 'profile' ] = $this->_getProfile($user);


                // JSON出力
                echo(json_encode($data));
                return;

            }

        }

        // 401 Unauthorized
        abort(401, 'Authentication Failed: Invalid username or password');
    }

    /**
     * token メソッド
     *
     * トークンの有効性チェックを行います。
     */
    public function token(Request $request) {

        // ユーザー取得
        $user = Auth::user();

        if (!is_null($user)) {

            // トークン有効性チェック
            $user = User::validate_token($user->api_token, true);

            if (!is_null($user)) {

                // 返却データ生成
                $data = [];
                $data[ 'token' ] = $user->api_token;

                // JSON出力
                echo(json_encode($data));
                return;
            }
        }

        // 401 Unauthorized
        abort(401, 'Authentication Failed: Invalid token');

    }

    /**
     * ログアウト
     *
     * @param Request $request
     */
    public function logout(Request $request) {

        // ユーザー取得
        $user = Auth::user();

        if (!is_null($user)) {

            // データベース内のトークンをクリア
            $user->api_token = '';
            $user->save();

            // 204 No Content
            abort(204, 'No Content');

        }

        // 409 Conflict
        abort(409, 'Logout Failed: Invalid token');

    }

    /**
     * パスワードリセットメール送信
     *
     * @param Request $request
     * @throws \Exception
     */
    public function send_reset_password_mail(Request $request) {

        // ユーザー情報取得
        $user = User:: where("username", "=", $request->input('email'))->first();

        // ユーザーが存在しない場合は、400エラー
        if (!$user) {
            abort(400, 'Bad Request');
        }

        // Fernet 生成
        $fernet = new Fernet(User::getPrivateKey());

        // パスワード再発行用トークン生成
        $token = $fernet->encode(json_encode([
            'id' => $user->id,
            'expires_date' => strtotime("+10 minute")
        ]));

        $password_resets = PasswordResets::where("id", "=", $user->id)->first();

        // 該当するユーザーのレコードを削除
        if ($password_resets) {
            $password_resets->forceDelete();
        }

        // パスワードリセット用レコード追加
        $password_resets = new PasswordResets;
        $password_resets->id = $user->id;
        $password_resets->token = $token;
        $password_resets->save();

        // メールヘッダー設定
        $options = [
            'from' => 'info@firebird-platform.com',
            'from_jp' => 'Firebird Platform',
            'to' => $request->input('email'),
            'subject' => 'パスワード再発行URL送付',
            'template' => 'emails.reset_password.mail',
        ];

        // テンプレートデータ設定
        $data = [
            'content_url' => $request->input('url'),
            'token' => $token
        ];

        // メール送信
        Mail::to($options[ 'to' ])->send(new ResetPasswordShipped($options, $data));
    }

    /**
     * パスワードリセット
     *
     * @param Request $request
     * @throws \Exception
     */
    public function reset_password(Request $request) {

        // トークン情報取得
        $token = $request->input('token');

        // Fernet 生成
        $fernet = new Fernet(User::getPrivateKey());

        // トークンからリセットデータ取得
        $data = $fernet->decode($token);

        // JSONデコード
        $json = json_decode($data);

        // 有効期限チェック
        if (time() > $json->expires_date) {

            // 有効期限が切れている場合、400エラー
            abort(400, 'Bad Request');

        }

        // パスワードリセット情報取得
        $password_resets = PasswordResets::where("id", "=", $json->id)->first();

        // ユーザー情報取得
        $user = User:: where("id", "=", $password_resets->id)->first();

        // ユーザーが存在しない場合は、400エラー
        if (!$user) {
            abort(400, 'Bad Request');
        }

        // 新しいパスワード設定
        $user->password = hash('sha512', $request->input('password') . User::$salt);
        $user->save();

        // 該当するユーザーのレコードを削除
        if ($password_resets) {
            $password_resets->forceDelete();
        }

    }

    /**
     * パスワード更新
     *
     * @param Request $request
     * @throws \Exception
     */
    public function renewal_password(Request $request) {

        // ユーザー取得
        $user = Auth::user();

        // 新しいパスワード設定
        $user->password = hash('sha512', $request->input('password') . User::$salt);
        $user->reset_password = 0;
        $user->save();
    }

    /**
     * apps メソッド
     *
     * 利用できるアプリ一覧を取得します。
     */
    public function apps(Request $request) {

        // 返却データ生成
        $data = [
            'apps' => []
        ];

        // ユーザー取得
        $user = Auth::user();

        // アプリ定義一覧取得
        App::all()->each(function ($app) use (&$data) {

            // ロール一覧
            Role::all()->each(function ($role) use (&$data, $app) {

                if (starts_with($role->name, $app->name . '_')) {

                    // 利用可能なアプリ情報を追加
                    $data[ 'apps' ][] = [
                        'id' => $app->id,
                        'name' => $app->name,
                        'formal_name' => $app->formal_name,
                        'ios_released' => $app->ios_released,
                        'android_released' => $app->android_released,
                    ];

                }

            });
        });

        // JSON出力
        echo(json_encode($data));
    }

    /**
     * permissions メソッド
     *
     * ユーザーのロールとパーミッション一覧を取得します。
     */
    public function permissions(Request $request) {

        // 返却データ生成
        $data = [
            'permissions' => [],
            'roles' => []
        ];

        // ユーザー取得
        $user = Auth::user();

        // ロール一覧
        $user->roles()->each(function ($role) use (&$data, $user) {

            $data[ 'roles' ][] = $role->name;

            foreach ($role->perms as $perm) {

                if ($user->can($perm->name)) {
                    $data[ 'permissions' ][] = $perm->name;
                }

            }

        });

        // JSON出力
        echo(json_encode($data));
    }

    /**
     * save_profile メソッド
     *
     * プロフィール画像保存
     * @throws \Exception
     */
    public function save_profile(Request $request) {

        // ユーザー取得
        $user = Auth::user();

        // 画像アップロードチェック
        if (!$request->hasFile('photo') || !$request->file('photo')->isValid()) {
            abort(400, '画像データがありません。');
        }

        // 出力先ディレクトリ取得
        $destinationPath = storage_path('app') . '/users/profiles';

        // 出力先ディレクトリ作成
        if (!file_exists($destinationPath)) {

            if (!mkdir($destinationPath, 0777, true)) {

                // 500 Internal Server Error
                abort(500, 'Internal Server Error');

            }

        }

        $mime = $request->file('photo')->getClientMimeType();

        if ($mime === 'image/jpeg') {
        } else if ($mime === 'image/png') {
        } else {
            abort(400, 'Bad Request');
        }


        // TODO: 画像ファイルサイズチェック


        // TOOD: ファイル名適当に、保存して、JSONでかえす


        $fileName = $user->id . '_' . $request->file('photo')->getFilename();

        // ファイル移動
        if (!$request->file('photo')->move($destinationPath, $fileName)) {

            // 500 Internal Server Error
            abort(500, 'Internal Server Error');

        }


        // Fernet 生成
        try {
            $fernet = new Fernet(User::getPrivateKey());

        } catch (\Exception $e) {

            // 500 Internal Server Error
            abort(500, 'Internal Server Error');

        }

        $data = [
            "data" => $fernet->encode(json_encode([
                "filename" => $fileName
            ]))
        ];

        echo json_encode($data);
    }

    /**
     * get_user_profile メソッド
     *
     * ログインユーザーのプロフィール画像を取得します。
     */
    public function get_user_profile(Request $request) {

        // ユーザー取得
        $user = Auth::user();

        // プロフィール画像取得
        return $this->get_profile($user->id, $request);

    }

    /**
     * get_profile メソッド
     *
     * プロフィール画像を取得します。
     */
    public function get_profile($user_id, Request $request) {

        // 取得ファイルパス取得
        $profilesPath = storage_path('app') . '/users/profiles/' . $user_id;

        // ファイル存在確認
        if (!file_exists($profilesPath)) {
            $profilesPath = resource_path() . '/images/no_profile.png';
        }

        // mimeタイプ取得
        list($width, $height, $type, $attr) = getimagesize($profilesPath);
        $mime = image_type_to_mime_type($type);

        // 画像データ出力
        return response(
            file_get_contents($profilesPath)
        )->header('Content-Type', $mime);

    }


    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return User::paginate(10);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return [
            'item' => User::find($id),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'user.username'     => 'required',
            'user.last_name'    => 'required',
            'user.first_name'   => 'required',
            'user.password'     => 'required',
        ], [], [
            'user.username'     => 'ユーザ名',
            'user.last_name'    => '性',
            'user.first_name'   => '名',
            'user.password'     => 'パスワード',
        ]);

        $user = new User;

        $user->username     = $request->input('user.username');
        $user->last_name    = $request->input('user.last_name');
        $user->first_name   = $request->input('user.first_name');
        $user->password     = \Hash::make($request->input('user.password'));

        $user->save();

        return [
            'item' => $user->toArray(),
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int      $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
/*        $this->validate($request, [
            'user.username'     => '',
            'user.last_name'    => '',
            'user.first_name'   => '',
            'user.password'     => '',
        ], [], [
            'user.username'     => 'ユーザ名',
            'user.last_name'    => '性',
            'user.first_name'   => '名',
            'user.password'     => 'パスワード',
        ]);*/

        $user = User::find($id);

        if ($request->has('user.username')) {

            $user->username     = $request->input('user.username');
        }

        if ($request->has('user.last_name')) {

            $user->last_name    = $request->input('user.last_name');
        }

        if ($request->has('user.first_name')) {

            $user->first_name   = $request->input('user.first_name');
        }

        if ($request->has('user.password')) {

            $user->password     = \Hash::make($request->input('user.password'));
        }

        $user->save();

        return [
            'item' => $user->toArray(),
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {

        $user = User::find($id);

        $user->delete();

        return [
            'item' => $user,
        ];
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyMulti(Request $request)
    {
        $ids = explode(',', $request->input('ids'));
        $count = User::destroy($ids);

        return [
            'count' => $count,
        ];
    }
}

// EOF