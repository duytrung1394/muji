<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/mile-services

$router->get('/api/v1/mile-services/history', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@history',
]);

$router->get('/api/v1/mile-services/account-info', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@accountInfo',
]);

$router->get('/api/v1/mile-services/old-mile', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@oldMile',
]);