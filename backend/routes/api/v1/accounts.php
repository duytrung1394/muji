<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/accounts

/**
 * 一覧取得
 */
$router->get('/api/v1/accounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@index',
]);

/**
  * 作成
  */
$router->get('/api/v1/accounts/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@create',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/accounts/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/accounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/accounts/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/accounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AccountsController@destroy',
]);
