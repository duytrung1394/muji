<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/orders

/**
 * 一覧取得
 */
$router->get('/api/v1/orders', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@index',
]);

/**
 * 購入履歴一覧取得
 */
$router->get('/api/v1/orders/purchase-history', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@indexPurchaseHistory',
]);

/**
 * 予約履歴一覧取得
 */
$router->get('/api/v1/orders/reservation-history', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@indexReservationHistory',
]);

/**
  * 作成
  */
$router->get('/api/v1/orders/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@create',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/orders/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/orders', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/orders/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/orders', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@destroy',
]);
