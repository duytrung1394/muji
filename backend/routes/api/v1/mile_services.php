<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/mile-services

$router->get('/api/v1/mile-services/history', [
    'middleware'    => [],
    'uses'          => 'Api\V1\MileServicesController@history',
]);