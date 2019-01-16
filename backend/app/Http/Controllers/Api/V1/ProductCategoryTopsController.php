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
            'data' => $this->getMockdata($categoryCode),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($categoryCode)
    {
        if (substr($categoryCode, 0, 1) === 'S') {
            return $this->getMockdataSecond($categoryCode);
        } else {
            return $this->getMockdataFirst($categoryCode);
        }
    }

    /**
     * 商品リスト(第1階層)
     */
    private function getMockDataFirst($categoryCode)
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
                    'material' => 'ウールシルク',
                    'title' => '洗えるVネックセーター',
                    'img' => '//img.muji.net/img/item/4550002561062_1260.jpg'
                ],
                [
                    'material' => 'ウールシルク',
                    'title' => '洗えるクルーネックセーター',
                    'img' => '//img.muji.net/img/item/4550002557867_1260.jpg'
                ],
                [
                    'material' => '首のチクチクをおさえた',
                    'title' => '洗えるタートルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002687540_1260.jpg'
                ],
                [
                    'material' => 'ヤクウール',
                    'title' => 'Vネックセーター',
                    'img' => '//img.muji.net/img/item/4550002691622_1260.jpg'
                ],
                [
                    'material' => 'ウールシルク',
                    'title' => '洗えるワイドリブボトルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002558239_1260.jpg'
                ]
            ],
            'innerCategories' => [
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002677299_01_180.jpg',
                    'title' => 'ジャケット・コート',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002691226_01_180.jpg',
                    'title' => 'セーター',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002560522_01_180.jpg',
                    'title' => 'カーディガン',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002683931_01_180.jpg',
                    'title' => 'カットソー',
                    'sectionCode' => 'S10003',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002659820_01_180.jpg',
                    'title' => 'シャツ・ブラウス',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002757267_01_180.jpg',
                    'title' => 'ワンピース・チュニック',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002320768_01_180.jpg',
                    'title' => 'トレーナー・パーカー',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002802882_01_180.jpg',
                    'title' => 'パンツ',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002773137_01_180.jpg',
                    'title' => 'スカート',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002679583_01_180.jpg',
                    'title' => 'MUJI WALKER',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002757168_01_180.jpg',
                    'title' => 'ONE-ALL',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/store/section/icon_xs_xxl.png',
                    'title' => 'ネット限定サイズ',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002326555_01_180.jpg',
                    'title' => '雨の日アイテム｜婦人',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://img.muji.net/img/item/4550002832100_01_180.jpg',
                    'title' => '伝統から学んだ、暮らしの服。｜婦人',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => '//img.muji.net/img/item/4550002653026_01_180.jpg',
                    'title' => '【ネットストア限定 配送料無料】先行予約（秋冬）',
                    'sectionCode' => '',
                ]
            ],
            'campaigns' => [
                [
                    'title' => 'ネット限定 | 先行予約（秋冬）',
                ],
                [
                    'title' => '伝統から学んだ、暮らしの服。',
                ],
                [
                    'title' => '人と自然 ー直線栽ちの服ー',
                ],
                [
                    'title' => '日本の布作りの旅（後編）',
                ],
            ],
            'sort_type'      => 'group',
            'total'          => 550,
            'groups' => [
                [
                    'group_name' => 'セーター',
                    'total'      => 321,
                    'items'      => [
                        $this->getMockItemData(1,3),
                        $this->getMockItemData(1,4, ['new']),
                        $this->getMockItemData(1,5, ['discount']),
                        $this->getMockItemData(1,6, ['early']),
                        $this->getMockItemData(1,7, ['new', 'discount', 'early']),
                        $this->getMockItemData(1,8),
                        $this->getMockItemData(1,9),
                        $this->getMockItemData(1,10),
                        $this->getMockItemData(1,11),
                        $this->getMockItemData(1,12),
                        $this->getMockItemData(1,13),
                        $this->getMockItemData(1,14),
                    ],
                ],
                [
                    'group_name' => 'セーター2',
                    'total'      => 123,
                    'items'      => [
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                    ],
                ],
                [
                    'group_name' => 'セーター3',
                    'total'      => 123,
                    'items'      => [
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                        $this->getMockItemData(1,4),
                    ],
                ],
            ],
            'items' => [],
        ];
    }

    /**
     * 商品リスト(第2階層)
     */
    private function getMockDataSecond($categoryCode)
    {
        return [
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/section/T10000',
                    'name' => '婦人ウェア',
                ],
            ],
            'category_code'  => $categoryCode,
            'category_title' => "カットソー",
            'article' => [
                'title' =>"首まわりを丈夫にしました。",
                'description' =>"洗濯を繰り返してもよれにくいよう、首元のリブにストレッチ性のある糸を加えました。洗濯ラベルも生地にプリントして、着心地よく。一枚でも、インにも着られる厚みです。。",
                'back_ground_image' => 'https:////www.muji.com/jp/img/store/section/promotion/hakkentohinto/18aw/1927_1.jpg',
                'items' => [
                    [
                        'img' => 'https://img.muji.net/img/item/4550002676117_95.jpg',
                        'name' => 'オーガニックコットンクルーネック長袖Tシャツ 婦人M・黒',
                        'price' => '990'
                    ],
                ]
            ],
            'rankings' => [
                [
                    'material' => 'ウールシルク',
                    'title' => '洗えるVネックセーター',
                    'img' => '//img.muji.net/img/item/4550002561062_1260.jpg'
                ],
                [
                    'material' => 'ウールシルク',
                    'title' => '洗えるクルーネックセーター',
                    'img' => '//img.muji.net/img/item/4550002557867_1260.jpg'
                ],
                [
                    'material' => '首のチクチクをおさえた',
                    'title' => '洗えるタートルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002687540_1260.jpg'
                ],
                [
                    'material' => 'ヤクウール',
                    'title' => 'Vネックセーター',
                    'img' => '//img.muji.net/img/item/4550002691622_1260.jpg'
                ],
                [
                    'material' => 'ウールシルク',
                    'title' => '洗えるワイドリブボトルネックセーター',
                    'img' => '//img.muji.net/img/item/4550002558239_1260.jpg'
                ]
            ],
            'categories_in_page' => [
                [
                    'title' => 'オーガニックコットンTシャツ',
                    'code' => 'product-t-shirt',
                    'description' => '首回りに、洗濯や乾燥機で変化しにくい糸を加え、伸び留めテープで首元を捕強して丈夫に仕上げました。洗濯ラベルは、肌に当たらないように生地に直接プリントしています。',
                    'img' => 'https://img.muji.net/img/item/4550002756703_06_400.jpg',
                ],
                [
                    'title' => '吸湿速乾UVカット',
                    'code' => 'product-uv-cut',
                    'description' => '軽い運動にも快適な、適度なストレッチ性と柔らかいです肌触りが特徴のポリエステル素材を使いました。普段着としても使えて便利です。',
                    'img' => 'https://img.muji.net/img/item/4550002388942_05_400.jpg',
                ],
            ],
            'sort_type'      => 'group',
            'total'          => 550,
            'groups' => [
                [
                    'group_name' => '長袖・七分袖',
                    'category_code_in_page' => 'product-t-shirt',
                    'total'      => 321,
                    'items'      => [
                        $this->getMockItemData(2,3),
                        $this->getMockItemData(2,4, ['new']),
                        $this->getMockItemData(2,5, ['discount']),
                        $this->getMockItemData(2,6, ['early']),
                        $this->getMockItemData(2,7, ['new', 'discount', 'early']),
                        $this->getMockItemData(2,8),
                        $this->getMockItemData(2,9),
                        $this->getMockItemData(2,10),
                        $this->getMockItemData(2,11),
                        $this->getMockItemData(2,12),
                        $this->getMockItemData(2,13),
                        $this->getMockItemData(2,14),
                    ],
                ],
                [
                    'group_name' => '半袖',
                    'category_code_in_page' => 'product-t-shirt',
                    'total'      => 123,
                    'items'      => [
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                    ],
                ],
                [
                    'group_name' => '半袖',
                    'category_code_in_page' => 'product-uv-cut',
                    'total'      => 123,
                    'items'      => [
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                        $this->getMockItemData(2,4),
                    ],
                ],
            ],
            'items' => [],
        ];
    }
    
    /**
     * モックデータ: アイテム.
     */
    private function getMockItemData($level, $swatchNumber, $tags=[])
    {
        $title = 'タートルネックセーター';
        $material = 'ウールシルク洗える';
        if ($level === 2) {
            $title = 'レベル2';
        }
        $item = [
            'title' => $title,
            'material' => $material,
            'price' => 4900,
            'swatches' => $this->getMockSwatches($level, $swatchNumber),
            'tags' => $tags,
            'minSize' => 'XS',
            'maxSize' => 'XXL',
        ];

        if (in_array("campaign", $tags) || in_array("discount", $tags)) {
            $item['new_price'] = 1900;
        }

        return $item;
    }

    /**
     * モックデータ: アイテムの見本部分.
     */
    private function getMockSwatches($level, $swatchNumber)
    {
        $swatches = [
            [
                'jancode' => '4550002032364',
                'color_title' => 'バーガンディ',
                'nostock' => false
            ],
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
        ];

        if ($level === 2) {
            $swatches[0]['jancode'] = '4550002208479';
            $swatches[1]['jancode'] = '4550002208516';
            $swatches[2]['jancode'] = '4550002361402';
            $swatches[3]['jancode'] = '4550002361440';
            $swatches[4]['jancode'] = '4550002361525';
            $swatches[5]['jancode'] = '4550002361624';
            $swatches[6]['jancode'] = '4550002361648';
            $swatches[7]['jancode'] = '4550002361686';
            $swatches[8]['jancode'] = '4550002361723';
            $swatches[9]['jancode'] = '4550002208431';
            $swatches[10]['jancode'] = '4550002361488';
            $swatches[11]['jancode'] = '4550002361563';
            $swatches[12]['jancode'] = '4550002389062';
            $swatches[13]['jancode'] = '4550002388942';
        }

        return array_splice($swatches, 0, $swatchNumber);
    }
}
