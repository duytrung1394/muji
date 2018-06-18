<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/category-items

/**
 * 一覧取得
 */
$router->get('categoryitems', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@index',
]);

/**
 * 詳細取得
 */
$router->get('categoryitems/{categoryId}/{itemId}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@show',
]);

/**
 * 登録
 */
$router->post('categoryitems', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@store',
]);

/**
 * 更新
 */
$router->put('categoryitems/{categoryId}/{itemId}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@update',
]);

/**
 * 削除
 */
$router->delete('categoryitems/{categoryId}/{itemId}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('categoryitems', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@destroyMulti',
]);
