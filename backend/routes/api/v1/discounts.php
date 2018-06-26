<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/discounts

/**
 * 一覧取得
 */
$router->get('discounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@index',
]);

/**
 * 詳細取得
 */
$router->get('discounts/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@show',
]);

/**
 * 登録
 */
$router->post('discounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@store',
]);

/**
 * 更新
 */
$router->put('discounts/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@update',
]);

/**
 * 削除
 */
$router->delete('discounts/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('discounts', [
    'middleware'    => [],
    'uses'          => 'Api\V1\DiscountsController@destroyMulti',
]);
