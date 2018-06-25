<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/addonServices

/**
 * 一覧取得
 */
$router->get('addon-services', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@index',
]);

/**
 * 詳細取得
 */
$router->get('addon-services/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@show',
]);

/**
 * 登録
 */
$router->post('addon-services', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@store',
]);

/**
 * 更新
 */
$router->put('addon-services/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@update',
]);

/**
 * 削除
 */
$router->delete('addon-services', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@destroy',
]);
