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
     * モックデータ: アイテムの見本部分.
     */
    private function getMockSwatches($swatchNumber)
    {
        $swatches = [
            ['jancode' => '4549738163794', 'color_title' => 'モカブラウン'         ],
            ['jancode' => '4549738164098', 'color_title' => 'スモーキーブルー'     ],
            ['jancode' => '4549738164142', 'color_title' => 'チャコールグレー'     ],
            ['jancode' => '4549738164241', 'color_title' => 'スモーキーグリーン'   ],
            ['jancode' => '4550002031824', 'color_title' => 'オフ白'               ],
            ['jancode' => '4550002031886', 'color_title' => 'オートミール'         ],
            ['jancode' => '4550002031947', 'color_title' => 'グレー'               ],
            ['jancode' => '4550002032005', 'color_title' => 'ネイビー'             ],
            ['jancode' => '4550002032067', 'color_title' => '黒'                   ],
            ['jancode' => '4550002032128', 'color_title' => 'オートミール×ボーダー'],
            ['jancode' => '4550002032180', 'color_title' => '黒×ボーダー'          ],
            ['jancode' => '4550002032241', 'color_title' => 'ピンク'               ],
            ['jancode' => '4550002032302', 'color_title' => 'ブルー'               ],
            ['jancode' => '4550002032364', 'color_title' => 'バーガンディ'         ],
        ];

        return array_splice($swatches, 0, $swatchNumber);
    }

    /**
     * モックデータ: アイテム.
     */
    private function getMockItemData($swatchNumber, $tags=[])
    {
        $item = [
            'title' => '首のチクチクをおさえた洗えるタートルネックセーター',
            'price' => [
                'tax' => '税込',
                'num' => 4900,
                'currency' => '円',
            ],
            'swatches' => $this->getMockSwatches($swatchNumber),
            'tags' => $tags,
        ];

        if (in_array("campaign", $tags) || in_array("discount", $tags)) {
            $item['new_price'] = [
                'tax' => '税込',
                'num' => 1900,
                'currency' => '円',
            ];
        }

        return $item;
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
                            $this->getMockItemData(3),
                            $this->getMockItemData(4, ['new']),
                            $this->getMockItemData(5, ['new', 'freeDelivery']),
                            $this->getMockItemData(6, ['new', 'freeDelivery', 'campaign']),
                            $this->getMockItemData(7, ['new', 'freeDelivery', 'discount']),
                            $this->getMockItemData(8),
                            $this->getMockItemData(9),
                            $this->getMockItemData(10),
                            $this->getMockItemData(11),
                            $this->getMockItemData(12),
                            $this->getMockItemData(13),
                            $this->getMockItemData(14),
                        ],
                    ],
                    [
                        'group_name' => 'セーター2',
                        'total_number' => 123,
                        'items' => [
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                        ],
                    ],
                    [
                        'group_name' => 'セーター3',
                        'total_number' => 123,
                        'items' => [
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                            $this->getMockItemData(4),
                        ],
                    ],
                ],
            ],
        ];
    }
}
