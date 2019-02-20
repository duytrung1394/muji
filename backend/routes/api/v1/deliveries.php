<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/deliveries

/**
 * 一覧取得
 */
$router->get('/api/v1/deliveries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/deliveries/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/deliveries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/deliveries/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/deliveries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@destroy',
]);
