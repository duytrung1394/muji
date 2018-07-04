<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/tasks

/**
 * 一覧取得
 */
$router->get('/api/v1/tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@index',
]);

/**
 * 詳細取得
 */
$router->get('/api/v1/tasks/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@show',
]);

/**
 * 登録
 */
$router->post('/api/v1/tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@store',
]);

/**
 * 更新
 */
$router->put('/api/v1/tasks/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@update',
]);

/**
 * 削除
 */
$router->delete('/api/v1/tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@destroy',
]);
