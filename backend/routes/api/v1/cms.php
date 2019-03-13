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
