<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/sku-images

/**
 * 一覧取得
 */
$router->get('skuimages/{sku_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@index',
]);

/**
 * 詳細取得
 */
$router->get('skuimages/{sku_code}/{sku_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@show',
]);

/**
 * 登録
 */
$router->post('skuimages/{sku_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@store',
]);

/**
 * 更新
 */
$router->put('skuimages/{sku_code}/{sku_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@update',
]);

/**
 * 削除
 */
$router->delete('skuimages/{sku_code}/{sku_image_code}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('skuimages', [
    'middleware'    => [],
    'uses'          => 'Api\V1\SkuImagesController@destroyMulti',
]);
