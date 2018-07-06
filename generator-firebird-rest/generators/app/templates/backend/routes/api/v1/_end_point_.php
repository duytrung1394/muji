<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/<%= end_point %>

/**
 * 一覧取得
 */
$router->get('/api/v1/<%= end_point %>', [
    'middleware'    => [],
    'uses'          => 'Api\V1\<%= EndPoint %>Controller@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/<%= end_point %>/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\<%= EndPoint %>Controller@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/<%= end_point %>', [
    'middleware'    => [],
    'uses'          => 'Api\V1\<%= EndPoint %>Controller@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/<%= end_point %>/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\<%= EndPoint %>Controller@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/<%= end_point %>', [
    'middleware'    => [],
    'uses'          => 'Api\V1\<%= EndPoint %>Controller@destroy',
]);
