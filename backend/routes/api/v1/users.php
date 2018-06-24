<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/users

/**
 * ログイン
 */
// $router->post('/api/v1/users/auth', [
//     'middleware' => $api_middleware,
//     'uses' => 'Api\V1\UsersController@login'
// ]);

// /**
//  * トークン認証&更新
//  */
// $router->put('/api/v1/users/auth', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@token'
// ]);

// /**
//  * ログアウト
//  */
// $router->delete('/api/v1/users/auth', [
//     'middleware' => $api_middleware,
//     'uses' => 'Api\V1\UsersController@logout'
// ]);

// /**
//  * パスワードリセットメール送信
//  */
// $router->post('/api/v1/users/send_reset_password_mail', [
//     'middleware' => $api_middleware,
//     'uses' => 'Api\V1\UsersController@send_reset_password_mail'
// ]);

// /**
//  * パスワードリセット
//  */
// $router->post('/api/v1/users/reset_password', [
//     'middleware' => $api_middleware,
//     'uses' => 'Api\V1\UsersController@reset_password'
// ]);

// /**
//  * パスワード更新
//  */
// $router->post('/api/v1/users/renewal_password', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@renewal_password'
// ]);

// /**
//  * アプリケーション情報取得
//  */
// $router->get('/api/v1/users/apps', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@apps'
// ]);

// /**
//  * ロール・パーミッション情報取得
//  */
// $router->get('/api/v1/users/permissions', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@permissions'
// ]);

// /**
//  * プロフィール画像アップロード
//  */
// $router->post('/api/v1/users/profile', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@save_profile'
// ]);

// /**
//  * プロフィール画像取得
//  *
//  * ログインユーザーのプロフィール画像を取得します。
//  */
// $router->get('/api/v1/users/profile', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@get_user_profile'
// ]);

// /**
//  * プロフィール画像取得
//  */
// $router->get('/api/v1/users/profile/{user_id}', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@get_profile'
// ]);

// /**
//  * ユーザーリスト取得
//  */
// $router->get('/api/v1/users', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@get_list'
// ]);

// /**
//  * ユーザー追加
//  */
// $router->post('/api/v1/users', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@add'
// ]);

// /**
//  * ユーザー更新
//  */
// $router->put('/api/v1/users/{user_id}', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@modify'
// ]);

// /**
//  * ユーザー取得
//  */
// $router->get('/api/v1/users/{user_id}', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@get_user'
// ]);

// /**
//  * ユーザー削除
//  */
// $router->delete('/api/v1/users/{user_id}', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@destroy'
// ]);

// /**
//  * ユーザー削除
//  */
// $router->delete('/api/v1/users', [
//     'middleware' => array_merge([
//         'auth'
//     ], $api_middleware),
//     'uses' => 'Api\V1\UsersController@multi_destroy'
// ]);

// {{{ /api/v1/users

/**
 * 一覧取得
 */
$router->get('users', [
    'middleware'    => [],
    'uses'          => 'Api\V1\UsersController@index',
]);

/**
 * 詳細取得
 */
$router->get('users/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\UsersController@show',
]);

/**
 * 登録
 */
$router->post('users', [
    'middleware'    => [],
    'uses'          => 'Api\V1\UsersController@store',
]);

/**
 * 更新
 */
$router->put('users/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\UsersController@update',
]);

/**
 * 削除
 */
$router->delete('users', [
    'middleware'    => [],
    'uses'          => 'Api\V1\UsersController@destroy',
]);

// }}}

// EOF