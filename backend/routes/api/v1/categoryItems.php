<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/category-items

/**
 * 一覧取得
 */
$router->get('category-items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@index',
]);

/**
 * 詳細取得
 */
$router->get('category-items/{categoryId}/{itemId}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@show',
]);

/**
 * 登録
 */
$router->post('category-items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@store',
]);

/**
 * 更新
 */
$router->put('category-items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@update',
]);

/**
 * 削除
 */
$router->delete('category-items/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('category-items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryItemsController@destroyMulti',
]);
