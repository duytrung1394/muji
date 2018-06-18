<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/items

/**
 * 一覧取得
 */
$router->get('items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@index',
]);

/**
 * 詳細取得
 */
$router->get('items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@show',
]);

/**
 * 登録
 */
$router->post('items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@store',
]);

/**
 * 更新
 */
$router->put('items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@update',
]);

/**
 * 削除
 */
$router->delete('items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemsController@destroyMulti',
]);
