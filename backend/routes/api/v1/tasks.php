<?php

if (empty($router)) {
    return;
}

// {{{ /api/v1/tasks

/**
 * 一覧取得
 */
$router->get('tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@index',
]);

/**
 * 詳細取得
 */
$router->get('tasks/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@show',
]);

/**
 * 登録
 */
$router->post('tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@store',
]);

/**
 * 更新
 */
$router->put('tasks/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@update',
]);

/**
 * 削除
 */
$router->delete('tasks/{id}', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@destroy',
]);

/**
 * 削除(複数)
 */
$router->delete('tasks', [
    'middleware'    => [],
    'uses'          => 'Api\V1\TasksController@destroyMulti',
]);