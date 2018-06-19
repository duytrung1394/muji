<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/prices

/**
 * 一覧取得
 */
$router->get('/prices/{sku_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/prices/{sku_code}/{price_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@show',
]);

/**
 * 登録
 */
$router->post('/prices/{sku_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@store',
]);

/**
 * 更新
 */
$router->put('/prices/{sku_code}/{price_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@update',
]);

/**
 * 削除
 */
$router->delete('/prices/{sku_code}/{price_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('/prices/{sku_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\PricesController@destroyMulti',
]);
