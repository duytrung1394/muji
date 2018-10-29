<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/tops

/**
 * トップ画面.
 */
$router->get('/api/v1/tops', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TopsController@index',
]);

/**
 * From MUJI (もっと見る).
 */
$router->get('/api/v1/tops/from-mujis', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TopsController@getFromMujis',
]);
