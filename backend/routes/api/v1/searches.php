<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/searches

/**
 * フリーワード検索（店舗）一覧取得
 */
$router->get('/api/v1/searches', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@index',
]);

/**
 * フリーワード検索（商品）一覧取得
 */
$router->get('/api/v1/searches/item', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchesController@indexItem',
]);

