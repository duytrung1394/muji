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

// /api/v1/categoryItems
require_once 'api/v1/categoryItems.php';

// /api/v1/skus
require_once 'api/v1/skus.php';

// /api/v1/prices
require_once 'api/v1/prices.php';

// /api/v1/brands
require_once 'api/v1/brands.php';

// EOF