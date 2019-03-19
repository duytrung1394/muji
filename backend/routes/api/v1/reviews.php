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
    'uses'          => 'Api\V1\ReviewsController@history',
]);