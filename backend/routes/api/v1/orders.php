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
 * 店舗取り置き一覧取得
 */
$router->get('/api/v1/orders/store-reserve', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@indexStoreReserve',
]);

/**
  * 作成
  */
$router->get('/api/v1/orders/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@create',
]);