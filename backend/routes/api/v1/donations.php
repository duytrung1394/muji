<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/donations

/**
 * 一覧取得
 */
$router->get('/api/v1/donations', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/donations/{donationCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@show',
]);

/**
 * お支払い方法の選択
 */
$router->get('/api/v1/donations/payment/{donationCode}/{numberOfUnits}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@showPayment',
]);

/**
 * 寄付内容の確認
 */
$router->post('/api/v1/donations/payment/confirm', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@confirm',
]);

/**
 * 寄付の確定(注文)
 */
$router->post('/api/v1/donations/payment/order', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationsController@order',
]);