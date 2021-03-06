<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/categories

/**
 * 一覧取得
 */
$router->get('/api/v1/categories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoriesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/categories/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoriesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/categories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoriesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/categories/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoriesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/categories', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoriesController@destroy',
]);
