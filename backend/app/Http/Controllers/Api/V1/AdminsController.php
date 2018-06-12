<?php

namespace App\Http\Controllers\Api\V1;

use App\App;
use App\Mail\ResetPasswordShipped;
use App\Role;
use App\User;
use App\PasswordResets;
use ErrorException;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Http\Request;
use Fernet\Fernet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Mockery\Generator\StringManipulation\Pass\Pass;

class AdminsController extends Controller
{

    /**
     * getMaintenances メソッド
     *
     * メンテナンス状態を取得します。
     */
    public function getMaintenances(Request $request)
    {

        // ユーザー取得
        $user = Auth::user();

        $json_text = implode('', [
            '{',
            '  "maintenances": []',
            '}'
        ]);

        $json = json_decode($json_text);

        try {

            $status_json = json_decode(
                Storage::disk('local')->get('monitor/status.json')
            );

        } catch (FileNotFoundException $e) {

            $status_json_text = implode('', [
                '{',
                '  "maintenances": []',
                '}'
            ]);

            $status_json = json_decode($status_json_text);

            foreach ($user->apps() as $app) {

                $data = new \stdClass();
                $data->id = $app['id'];
                $data->state = false;
                $data->time = false;
                $data->begin_at = 0;
                $data->end_at = 0;

                array_push($status_json->maintenances, $data);
            }

        }

        foreach ($user->apps() as $app) {

            try {

                if (in_array_field($app['id'], 'id', $status_json->maintenances)) {

                    foreach ($status_json->maintenances as $maintenance) {
                        if ($maintenance->id === $app['id']) {
                            array_push($json->maintenances, $maintenance);
                            break;
                        }
                    }

                } else {

                    $data = new \stdClass();
                    $data->id = $app['id'];
                    $data->state = false;
                    $data->time = false;
                    $data->begin_at = 0;
                    $data->end_at = 0;
                    array_push($json->maintenances, $data);
                }

            } catch (ErrorException $e) {

                // 500 Internal Server Error
                abort(500, 'Internal Server Error');

            }

        }

        // JSON出力
        echo(json_encode($json));

    }

    /**
     * updateMaintenances メソッド
     *
     * メンテナンス状態を更新します。
     */
    public function updateMaintenances(Request $request)
    {

        // ユーザー取得
        $user = Auth::user();

        // 入力チェック
        $maintenances = json_decode($request->input('maintenances'));

        $errors = [];

        foreach ($maintenances as $index => $t) {

            if ($t->time) {

                // begin_at と end_at が前後していないか
                if ($t->begin_at > $t->end_at || $t->begin_at === 0 || $t->end_at === 0) {

                    array_push($errors, [
                        'index' => $index,
                        'time' => $t->time,
                        'begin_at' => $t->begin_at,
                        'end_at' => $t->end_at,
                        'message' => '開始日時と終了日時が正しくありません。'
                    ]);

                }

                if (($t->end_at / 1000) < time()) {

                    array_push($errors, [
                        'index' => $index,
                        'time' => $t->time,
                        'begin_at' => $t->begin_at,
                        'end_at' => $t->end_at,
                        'message' => '終了日時は、未来の日付を指定してください。'
                    ]);

                }

            } else {

                // 日時指定を利用しない場合
                $t->begin_at = 0;
                $t->end_at = 0;
            }

        }

        if (sizeof($errors) > 0) {

            return response()->json([
                'error' => 400,
                'message' => 'Bad Request',
                'meta' => [
                    'errors' => $errors
                ]
            ], 400);
        }

        $json_text = implode('', [
            '{',
            '  "maintenances": []',
            '}'
        ]);

        $json = json_decode($json_text);

        try {

            $status_json = json_decode(
                Storage::disk('local')->get('monitor/status.json')
            );

        } catch (FileNotFoundException $e) {

            $status_json_text = implode('', [
                '{',
                '  "maintenances": []',
                '}'
            ]);

            $status_json = json_decode($status_json_text);

            foreach ($user->apps() as $app) {
                $data = new \stdClass();
                $data->id = $app['id'];
                $data->state = false;
                $data->time = false;
                $data->begin_at = 0;
                $data->end_at = 0;
                array_push($status_json->maintenances, $data);
            }

        }

        $json->maintenances = $maintenances;

        // 保存
        Storage::disk('local')->put('monitor/status.json', json_encode($json));

        // 204 No Content
        abort(204, 'No Content');
    }

    //

}

// EOF
