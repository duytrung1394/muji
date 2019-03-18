<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/cms

/**
 * 商品一覧セクションページインクルード取得
 */
$router->get('/api/v1/cms/store/cmdty/section/{sectionCode}/include', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CmsController@getCmdtySectionInclude',
]);

/**
 * 商品一覧サブセクション一覧インクルード取得
 */
$router->get('/api/v1/cms/store/cmdty/section/{sectionCode}/subsections', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CmsController@getCmdtySectionSubsections',
]);

/**
 * 商品詳細インクルード(エリア1)取得
 */
$router->get('/api/v1/cms/store/cmdty/detail/{productCode}/include1', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CmsController@getCmdtyDetailInclude1',
]);

/**
 * 商品詳細インクルード(エリア2)取得
 */
$router->get('/api/v1/cms/store/cmdty/detail/{productCode}/include2', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CmsController@getCmdtyDetailInclude2',
]);
