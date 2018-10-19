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
