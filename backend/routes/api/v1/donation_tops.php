<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/donation-tops

/**
 * 募金トップ画面.
 */
$router->get('/api/v1/donation-tops', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/donation-tops/{donationCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@show',
]);

/**
 * お支払い方法の選択
 */
$router->get('/api/v1/donation-tops/payment/{donationCode}/{numberOfUnits}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@showPayment',
]);

/**
 * MUJI GIFT CARD情報取得
 */
$router->get('/api/v1/donation-tops/payment/giftcard', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@getGiftcard',
]);

/**
 * 寄付内容の確認
 */
$router->post('/api/v1/donation-tops/payment/confirm', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@confirm',
]);

/**
 * 寄付の確定(注文)
 */
$router->post('/api/v1/donation-tops/payment/order', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DonationTopsController@order',
]);
