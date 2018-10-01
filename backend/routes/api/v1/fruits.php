<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/fruits

/**
 * 一覧取得
 */
$router->get('/api/v1/fruits', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FruitsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/fruits/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FruitsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/fruits', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FruitsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/fruits/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FruitsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/fruits', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FruitsController@destroy',
]);
