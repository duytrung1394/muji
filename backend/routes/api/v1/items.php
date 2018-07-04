<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/items

/**
 * 一覧取得
 */
$router->get('/api/v1/items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@destroy',
]);
