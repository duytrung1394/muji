<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/reviews

/**
 * 一覧取得
 */
$router->get('/api/v1/reviews', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ReviewsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/reviews/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ReviewsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/reviews', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ReviewsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/reviews/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ReviewsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/reviews', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ReviewsController@destroy',
]);
