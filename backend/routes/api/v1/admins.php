<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/admins

/**
 * メンテナンス状態取得
 */
$router->get('/api/v1/admins/maintenances', [
    'middleware' => array_merge([
        'auth'
    ], $api_middleware),
    'uses' => 'Api\V1\AdminsController@getMaintenances'
]);

/**
 * メンテナンス状態更新
 */
$router->put('/api/v1/admins/maintenances', [
    'middleware' => array_merge([
        'auth'
    ], $api_middleware),
    'uses' => 'Api\V1\AdminsController@updateMaintenances'
]);

// }}}

// EOF