<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/searches

/**
 * フリーワード検索（店舗）一覧取得
 */
$router->get('/api/v1/search/stores', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchController@index',
]);

/**
 * フリーワード検索（商品）一覧取得
 */
$router->get('/api/v1/search/items', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchController@indexItem',
]);

/**
 * フリーワード検索（読み物）一覧取得
 */
$router->get('/api/v1/search/articles', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SearchController@indexArticle',
]);

