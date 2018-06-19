<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/category-images

/**
 * 一覧取得
 */
$router->get('categoryimages/{category_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@index',
]);

/**
 * 詳細取得
 */
$router->get('categoryimages/{category_code}/{category_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@show',
]);

/**
 * 登録
 */
$router->post('categoryimages/{category_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@store',
]);

/**
 * 更新
 */
$router->put('categoryimages/{category_code}/{category_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\CategoryImagesController@update',
]);

/**
 * 削除
 */
$router->delete('categoryimages/{category_code}/{category_image_code}', [
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
