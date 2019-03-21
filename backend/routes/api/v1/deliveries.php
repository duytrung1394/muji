<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/deliveries

/**
 * 一覧取得
 */
$router->get('/api/v1/deliveries', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/deliveries/{addressBookId}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DeliveriesController@show',
]);