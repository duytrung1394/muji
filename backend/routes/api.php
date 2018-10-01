<?php

$api_middleware = [
    'accept_header_json',
];

if (empty($router)) {
    return;
}

// /api/v1/users
require_once 'api/v1/users.php';

// /api/v1/admins
require_once 'api/v1/admins.php';

// /api/v1/tasks
require_once 'api/v1/tasks.php';

// /api/v1/categories
require_once 'api/v1/categories.php';

// /api/v1/items
require_once 'api/v1/items.php';


// /api/v1/fruits
require_once 'api/v1/fruits.php';


// /api/v1/httpbins
require_once 'api/v1/httpbins.php';

// YEOMAN-INSERT-POINT
// ↑ジェネレータによる差し込み箇所です。 編集・削除しないでください。

// EOF
