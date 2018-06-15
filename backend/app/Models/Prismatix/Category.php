<?php

namespace App\Models\Prismatix;

class Category extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Category';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'category_code';
}
