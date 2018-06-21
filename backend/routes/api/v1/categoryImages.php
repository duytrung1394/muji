<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/categoryImages

/**
 * 一覧取得
 */
$router->get('categoryimages/{categoryCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@index',
]);

/**
 * 詳細取得
 */
$router->get('categoryimages/{categoryCode}/{categoryImageCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@show',
]);

/**
 * 登録
 */
$router->post('categoryimages/{categoryCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@store',
]);

/**
 * 更新
 */
$router->put('categoryimages/{categoryCode}/{categoryImageCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@update',
]);

/**
 * 削除
 */
$router->delete('categoryimages/{categoryCode}/{categoryImageCode}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('categoryimages', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@destroyMulti',
]);
