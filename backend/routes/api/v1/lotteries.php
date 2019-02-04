<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/lotteries

/**
 * 一覧取得
 */
$router->get('/api/v1/lotteries/{sectionCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/lotteries/{sectionCode}/{janCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\LotteriesController@show',
]);
