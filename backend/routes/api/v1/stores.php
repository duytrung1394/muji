<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/stores

/**
 * 一覧取得
 */
$router->get('stores', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@index',
]);

/**
 * 詳細取得
 */
$router->get('stores/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@show',
]);

/**
 * 登録
 */
$router->post('stores', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@store',
]);

/**
 * 更新
 */
$router->put('stores/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@update',
]);

/**
 * 削除
 */
$router->delete('stores/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('stores', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StoresController@destroyMulti',
]);
