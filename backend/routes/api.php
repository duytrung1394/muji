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

// /api/v1/tops
require_once 'api/v1/tops.php';

// /api/v1/product-category-tops
require_once 'api/v1/product_category_tops.php';

// /api/v1/customer-reviews
require_once 'api/v1/customer_reviews.php';

// /api/v1/customer-addresses
require_once 'api/v1/customer_addresses.php';

// /api/v1/donations
require_once 'api/v1/donations.php';

// /api/v1/lotteries
require_once 'api/v1/lotteries.php';

// /api/v1/orders
require_once 'api/v1/orders.php';


// /api/v1/searches
require_once 'api/v1/searches.php';

// YEOMAN-INSERT-POINT
// ↑ジェネレータによる差し込み箇所です。 編集・削除しないでください。

// EOF
