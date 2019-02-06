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
 * 削除
 */
$router->delete('/api/v1/favorites', [
    'middleware'    => [],
    'uses'          => 'Api\V1\FavoritesController@destroy',
]);
