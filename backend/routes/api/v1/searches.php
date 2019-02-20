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

