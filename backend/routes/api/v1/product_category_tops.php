<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/product-category-tops

/**
 * 一覧取得
 */
$router->get('/api/v1/product-category-tops', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/product-category-tops/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/product-category-tops', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/product-category-tops/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/product-category-tops', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@destroy',
]);
