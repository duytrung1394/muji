<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/customer-addresses

/**
 * 一覧取得
 */
$router->get('/api/v1/customer-addresses', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerAddressesController@index',
]);

/**
  * 作成
  */
 $router->get('/api/v1/customer-addresses/create', [
     'middleware'    => [],
     'uses'          => 'Api\V1\CustomerAddressesController@create',
 ]);

/**
 * 詳細取得
 */
$router->get('/api/v1/customer-addresses/{addressBookNo}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerAddressesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/customer-addresses', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerAddressesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/customer-addresses/{addressBookNo}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerAddressesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/customer-addresses', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerAddressesController@destroy',
]);
