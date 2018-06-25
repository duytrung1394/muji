<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/brands

/**
 * 一覧取得
 */
$router->get('brands', [
    'middleware'    => [],
    'uses'          => 'Api\V1\BrandsController@index',
]);

/**
 * 詳細取得
 */
$router->get('brands/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\BrandsController@show',
]);

/**
 * 登録
 */
$router->post('brands', [
    'middleware'    => [],
    'uses'          => 'Api\V1\BrandsController@store',
]);

/**
 * 更新
 */
$router->put('brands/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\BrandsController@update',
]);

/**
 * 削除
 */
$router->delete('brands', [
    'middleware'    => [],
    'uses'          => 'Api\V1\BrandsController@destroy',
]);
