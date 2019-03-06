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
