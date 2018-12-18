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
  * 作成
  */
 $router->get('/api/v1/customer-reviews/create', [
     'middleware'    => [],
     'uses'          => 'Api\V1\CustomerReviewsController@create',
 ]);
 
/**
 * 更新
 */
$router->put('/api/v1/customer-reviews/{taskCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/customer-reviews', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@destroy',
]);

/**
 * Customer Review (もっと見る).
 */
$router->get('/api/v1/customer-reviews/seemore', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CustomerReviewsController@getCustomerReviewsSeeMore',
]);
