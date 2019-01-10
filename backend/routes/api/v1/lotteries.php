<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/lotteries

/**
 * 一覧取得
 */
$router->get('/api/v1/lotteries/{sectionCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/lotteries/{taskCode}/{code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/lotteries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/lotteries/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/lotteries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@destroy',
]);
