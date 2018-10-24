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
            'category_code'  => $categoryCode,
            'category_title' => "婦人ウェア",
            'sort_type'      => 'group',
            'total'          => 550,
            'groups' => [
                [
                    'group_name' => 'セーター',
                    'total'      => 321,
                    'items'      => [
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
                    'total'      => 123,
                    'items'      => [
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
                    'total'      => 123,
                    'items'      => [
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
            'items' => [],
        ];
    }

    /**
     * モックデータ: アイテム.
     */
    private function getMockItemData($swatchNumber, $tags=[])
    {
        $item = [
            'title' => '首のチクチクをおさえた洗えるタートルネックセーター',
            'price' => 4900,
            'swatches' => $this->getMockSwatches($swatchNumber),
            'tags' => $tags,
        ];

        if (in_array("campaign", $tags) || in_array("discount", $tags)) {
            $item['new_price'] = 1900;
        }

        return $item;
    }

    /**
     * モックデータ: アイテムの見本部分.
     */
    private function getMockSwatches($swatchNumber)
    {
        $swatches = [
            [
                'jancode' => '4549738163794',
                'color_title' => 'モカブラウン',
                'nostock' => false
            ],
            [
                'jancode' => '4549738164098',
                'color_title' => 'スモーキーブルー',
                'nostock' => false
            ],
            [
                'jancode' => '4549738164142',
                'color_title' => 'チャコールグレー',
                'nostock' => false
            ],
            [
                'jancode' => '4549738164241',
                'color_title' => 'スモーキーグリーン',
                'nostock' => true
            ],
            [
                'jancode' => '4550002031824',
                'color_title' => 'オフ白',
                'nostock' => false
            ],
            [
                'jancode' => '4550002031886',
                'color_title' => 'オートミール',
                'nostock' => true
            ],
            [
                'jancode' => '4550002031947',
                'color_title' => 'グレー',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032005',
                'color_title' => 'ネイビー',
                'nostock' => true
            ],
            [
                'jancode' => '4550002032067',
                'color_title' => '黒',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032128',
                'color_title' => 'オートミール×ボーダー',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032180',
                'color_title' => '黒×ボーダー',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032241',
                'color_title' => 'ピンク',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032302',
                'color_title' => 'ブルー',
                'nostock' => false
            ],
            [
                'jancode' => '4550002032364',
                'color_title' => 'バーガンディ',
                'nostock' => false
            ],
        ];

        return array_splice($swatches, 0, $swatchNumber);
    }
}
