<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/item-images

/**
 * 一覧取得
 */
$router->get('itemimages/{item_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@index',
]);

/**
 * 詳細取得
 */
$router->get('itemimages/{item_code}/{item_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@show',
]);

/**
 * 登録
 */
$router->post('itemimages/{item_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@store',
]);

/**
 * 更新
 */
$router->put('itemimages/{item_code}/{item_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@update',
]);

/**
 * 削除
 */
$router->delete('itemimages/{item_code}/{item_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('itemimages', [
    'middleware'    => [],
    'uses'          => 'Api\V1\ItemImagesController@destroyMulti',
]);
