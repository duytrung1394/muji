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
 * カート保存(注文の確認へ)
 */
$router->post('/api/v1/orders/saveShoppingCart', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@saveShoppingCart',
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
 * 定期購入一覧取得
 */
$router->get('/api/v1/orders/subscription', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@indexSubscription',
]);

/**
  * 作成
  */
$router->get('/api/v1/orders/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@create',
]);

/**
  * ご注文手続き: 配送オプション更新
  */
$router->put('/api/v1/orders/delivery-option', [
    'middleware'    => [],
    'uses'          => 'Api\V1\OrdersController@updateDeliveryOption',
]);
