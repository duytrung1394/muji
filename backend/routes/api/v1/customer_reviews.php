<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/customer-reviews

/**
 * 一覧取得
 */
$router->get('/api/v1/customer-reviews', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@index',
]);

/**
 * 一部取得
 */
$router->get('/api/v1/customer-reviews/{itemCode}/{commentCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@getReportMock',
]);

/**
 * ユーザ別一覧取得
 */
$router->get('/api/v1/customer-reviews/user', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@indexByUser',
]);

/**
 * フォロー中のユーザー一覧取得
 */
$router->get('/api/v1/customer-reviews/following', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@indexByFollowing',

]);

/**
 * 商品別一覧取得
 */
$router->get('/api/v1/customer-reviews/item', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@indexByItem',
]);

/**
  * 作成
  */
 $router->get('/api/v1/customer-reviews/create', [
     'middleware'    => [],
     'uses'          => 'Api\V1\CustomerReviewsController@create',
]);

/**
 * 詳細
 */
$router->get('/api/v1/customer-reviews/{reviewCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@show',
]);