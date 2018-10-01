<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/httpbins

/**
 * 一覧取得
 */
$router->get('/api/v1/httpbins', [
    'middleware'    => [],
    'uses'          => 'Api\V1\HttpbinsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/httpbins/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\HttpbinsController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/httpbins', [
    'middleware'    => [],
    'uses'          => 'Api\V1\HttpbinsController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/httpbins/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\HttpbinsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/httpbins', [
    'middleware'    => [],
    'uses'          => 'Api\V1\HttpbinsController@destroy',
]);
