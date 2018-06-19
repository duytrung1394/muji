<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/addonservices

/**
 * 一覧取得
 */
$router->get('addonservices', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@index',
]);

/**
 * 詳細取得
 */
$router->get('addonservices/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@show',
]);

/**
 * 登録
 */
$router->post('addonservices', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@store',
]);

/**
 * 更新
 */
$router->put('addonservices/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@update',
]);

/**
 * 削除
 */
$router->delete('addonservices/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('addonservices', [
    'middleware'    => [],
    'uses'          => 'Api\V1\AddonServicesController@destroyMulti',
]);
