<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/skus

/**
 * 一覧取得
 */
$router->get('skus', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@index',
]);

/**
 * 詳細取得
 */
$router->get('skus/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@show',
]);

/**
 * 登録
 */
$router->post('skus', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@store',
]);

/**
 * 更新
 */
$router->put('skus/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@update',
]);

/**
 * 削除
 */
$router->delete('skus/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('skus', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkusController@destroyMulti',
]);
