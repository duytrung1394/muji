<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/product-category-tops

/**
 * カテゴリトップ取得
 */
$router->get('/api/v1/product-category-tops/{categoryCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ProductCategoryTopsController@index',
]);
