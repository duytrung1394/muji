<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ProductCategoryTopsController extends Controller
{
    /**
     * カテゴリトップページ.
     *
     * @return Response
     */
    public function index(string $categoryCode)
    {
        return [
            'item' => $this->getMockdata($categoryCode),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($categoryCode)
    {
        return [
            'category_code'   => $categoryCode,
            'category_title'  => "婦人ウェア",
            'item' => [
                'sort_type' => 'DEFAULT',
                'groups' => [
                    [
                        'group_name' => 'セーター',
                        'total_number' => 321,
                        'items' => [
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                        ],
                    ],
                    [
                        'group_name' => 'カーディガン',
                        'total_number' => 123,
                        'items' => [
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                            [
                                'image' => 'https://img.muji.net/img/item/4550002691349_400.jpg',
                                'title' => 'ヤクウールクルーネックセーター',
                                'price' => [
                                    'tax' => '税込',
                                    'num' => 4900,
                                    'currency' => '円',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ];
    }
}
