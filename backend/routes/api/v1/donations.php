<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/donations

/**
 * 一覧取得
 */
$router->get('/api/v1/donations', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/donations/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/donations', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/donations/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/donations', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@destroy',
]);
