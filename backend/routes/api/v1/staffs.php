<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/staffs

/**
 * 一覧取得
 */
$router->get('staffs', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@index',
]);

/**
 * 詳細取得
 */
$router->get('staffs/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@show',
]);

/**
 * 登録
 */
$router->post('staffs', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@store',
]);

/**
 * 更新
 */
$router->put('staffs/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@update',
]);

/**
 * 削除
 */
$router->delete('staffs/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('staffs', [
    'middleware'    => [],
    'uses'          => 'Api\V1\StaffsController@destroyMulti',
]);
