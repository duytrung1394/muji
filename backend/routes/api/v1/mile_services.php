<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/mile-services

$router->get('/api/v1/mile-services/history/{year}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@history',
]);

$router->get('/api/v1/mile-services/shopping-point/history', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@shoppingPointHistory',
]);