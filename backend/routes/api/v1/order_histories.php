<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/order-histories

/**
 * 一覧取得
 */
$router->get('/api/v1/order-histories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@index',
]);

/**
  * 作成
  */
$router->get('/api/v1/order-histories/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@create',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/order-histories/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/order-histories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/order-histories/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/order-histories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrderHistoriesController@destroy',
]);
