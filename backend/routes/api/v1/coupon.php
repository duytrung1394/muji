<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/coupon

/**
 * 一覧取得
 */
$router->get('/api/v1/coupon/validcoupon', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CouponController@getGiftList',
]);