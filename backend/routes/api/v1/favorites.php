<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/favorites

/**
 * 一覧取得
 */
$router->get('/api/v1/favorites', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@index',
]);

/**
  * 作成
  */
$router->get('/api/v1/favorites/create', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@create',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/favorites/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/favorites', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/favorites/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/favorites', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@destroy',
]);
