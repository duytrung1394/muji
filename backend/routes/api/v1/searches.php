<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/searches

/**
 * 一覧取得
 */
$router->get('/api/v1/searches', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@index',
]);

/**
  * 作成
  */
$router->get('/api/v1/searches/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@create',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/searches/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/searches', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/searches/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/searches', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@destroy',
]);
