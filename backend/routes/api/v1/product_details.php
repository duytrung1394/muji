<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/product-details

/**
 * 商品詳細.
 */
$router->get('/api/v1/product-details/{janCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductDetailsController@index',
]);
