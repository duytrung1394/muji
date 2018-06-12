<?php

namespace App\Http\Controllers\Api\V1;

use App\Mail\ResetPasswordShipped;
use App\App;
use App\Permission;
use App\Role;
use App\User;
use App\PasswordResets;
use Illuminate\Http\Request;
use Fernet\Fernet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Mockery\Generator\StringManipulation\Pass\Pass;
use Illuminate\Support\Facades\Lang;

class AppController extends Controller {

    /**
     * info メソッド
     *
     * 以下の情報を取得します。
     *
     * * ユーザーが利用可能なアプリケーション一覧
     * * メッセージ一覧
     * * お知らせ一覧
     * * ユーザー情報
     *   * プロフィール画像
     */
    public function info(Request $request) {

        $user = Auth::user();

        // 操作可能アプリ一覧作成

        // /users/apps に変更



        // ロール一覧送信



        // * メッセージ一覧
            // /messages
            // 個別で作成
        // * お知らせ一覧
            // /notification
            // 個別で作成
        // * ユーザー情報
            // /users/info
            // 個別で作成
            // * プロフィール画像

        //var_export($user->hasRole('admin'));

        /*
        var_export($user->hasRole('admin'));
        var_export($user->can('edit-user'));
        var_export($user->can('create-post'));
        */

       // echo trans('message.user_not_exists');








        /*
        $admin = new Role();
        $admin->name         = 'admin';
        $admin->display_name = 'User Administrator'; // optional
        $admin->description  = 'User is allowed to manage and edit other users'; // optional
        $admin->save();

        $createPost = new Permission();
        $createPost->name         = 'create-post';
        $createPost->display_name = 'Create Posts'; // optional
// Allow a user to...
        $createPost->description  = 'create new blog posts'; // optional
        $createPost->save();

        $editUser = new Permission();
        $editUser->name         = 'edit-user';
        $editUser->display_name = 'Edit Users'; // optional
// Allow a user to...
        $editUser->description  = 'edit existing users'; // optional
        $editUser->save();

        $admin->attachPermission([$createPost, $editUser]);

        $user->attachRole($admin);
        */
    }

}

// EOF