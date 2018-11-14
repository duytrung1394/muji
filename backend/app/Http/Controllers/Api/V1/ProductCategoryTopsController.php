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
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
            ],
            'category_code'  => $categoryCode,
            'category_title' => "婦人ウェア",
            'article' => [
                'title' =>"家で洗えるウールシルク",
                'description' =>"メリウールとシルクを合わせて、肌触りがやわらかく、光沢のあるニットをつくりました。\nご家庭の洗濯機で洗えるのでお手入れ簡単です。",
                'back_ground_image' => 'https://www.muji.com/jp/img/store/section/promotion/T10000.jpg',
                'items' => [
                    [
                        'img' => 'https://img.muji.net/img/item/4550002557768_95.jpg',
                        'name' => 'ウールシルク洗えるクルーネックセーター　婦人M・オートミール',
                        'price' => '2,990'
                    ],
                    [
                        'img' => 'https://img.muji.net/img/item/4550002802899_95.jpg',
                        'name' => '起毛ストレッチピケイージーワイドパンツ　婦人M・キャメル',
                        'price' => '5,990'
                    ]
                ]
            ],
            'rankings' => [
                [
                    'title' => 'ウールシルク洗えるVネックセーター',
                    'img' => '//img.muji.net/img/item/4550002561062_1260.jpg'
                ],
                [
                    'title' => 'ウールシルク洗えるクルーネックセーター',
                    'img' => '//img.muji.net/img/item/4550002557867_1260.jpg'
                ],
                [
                    'title' => '首のチクチクをおさえた・洗えるタートルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002687540_1260.jpg'
                ],
                [
                    'title' => 'ヤクウールVネックセーター',
                    'img' => '//img.muji.net/img/item/4550002691622_1260.jpg'
                ],
                [
                    'title' => 'ウールシルク洗えるワイドリブボトルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002558239_1260.jpg'
                ]
            ],
            'innerCategories' => [
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002677299_01_180.jpg',
                    'title' => 'ジャケット・コート',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002691226_01_180.jpg',
                    'title' => 'セーター',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002560522_01_180.jpg',
                    'title' => 'カーディガン',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002683931_01_180.jpg',
                    'title' => 'カットソー',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002659820_01_180.jpg',
                    'title' => 'シャツ・ブラウス',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002757267_01_180.jpg',
                    'title' => 'ワンピース・チュニック',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002320768_01_180.jpg',
                    'title' => 'トレーナー・パーカー',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002802882_01_180.jpg',
                    'title' => 'パンツ',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002773137_01_180.jpg',
                    'title' => 'スカート',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002679583_01_180.jpg',
                    'title' => 'MUJI WALKER',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002757168_01_180.jpg',
                    'title' => 'ONE-ALL',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/store/section/icon_xs_xxl.png',
                    'title' => 'ネット限定サイズ',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002326555_01_180.jpg',
                    'title' => '雨の日アイテム｜婦人',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002832100_01_180.jpg',
                    'title' => '伝統から学んだ、暮らしの服。｜婦人',
                ],
                [
                    'img_src' => '//img.muji.net/img/item/4550002653026_01_180.jpg',
                    'title' => '【ネットストア限定 配送料無料】先行予約（秋冬）',
                ]
            ],
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
