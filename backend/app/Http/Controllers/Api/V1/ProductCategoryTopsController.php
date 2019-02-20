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
            'category_title' => $this->mockDataFirst[$categoryCode]['category_title'],
            'article' => $this->mockDataFirst[$categoryCode]['article'],
            'rankings' => $this->mockDataFirst[$categoryCode]['rankings'],
            'innerCategories' => $this->mockDataFirst[$categoryCode]['innerCategories'],
            'campaigns' => $this->getMockDataCampaigns($categoryCode),
            'sort_type' => 'group',
            'total' => 550,
            'groups' => $this->getMockGroups($categoryCode),
            'items' => [],
        ];
    }

    /**
     * 商品リスト(第1階層)データ.
     */
    private $mockDataFirst = [
        'T10000' => [
            'category_title' => "婦人ウェア",
            'article' => [
                'title' =>"家で洗えるウールシルク",
                'description' =>"メリウールとシルクを合わせて、肌触りがやわらかく、光沢のあるニットをつくりました。\nご家庭の洗濯機で洗えるのでお手入れ簡単です。",
                'back_ground_image' => 'https://www.muji.com/jp/img/store/section/promotion/T10000.jpg',
                'items' => [
                    [
                        'img' => 'https://img.muji.net/img/item/4550002674885_95.jpg',
                        'material' => 'モダールコットンスムース',
                        'name' => 'ハイネックロングワンピース',
                        'price' => '3,990'
                    ],
                    [
                        'img' => 'https://img.muji.net/img/item/4550002003296_95.jpg',
                        'material' => 'オーガニックコットン',
                        'name' => 'フランネルワンピース',
                        'price' => '3,990'
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
        ],
        'T20003' => [
            'category_title' => "収納家具",
            'article' => [
                'title' =>"価格を見直しました",
                'description' =>"収納用品やユニットシェルフなどの価格を見直しました。生産工程を点検し、品質はそのままにさらにお求めやすい価格を実現しています。",
                'back_ground_image' => 'https://www.muji.com/jp/img/store/section/promotion/s2000316_1080.jpg',
            ],
            'rankings' => null,
            'innerCategories' => [
                [
                    'img_src' => 'https://www.muji.net/img/item/4548718121328_180.jpg',
                    'title' => 'スタッキングシェルフ',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4547315874903_180.jpg',
                    'title' => 'オーク材収納',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4547315256976_180.jpg',
                    'title' => 'スタッキングキャ…',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4549738749844_180.jpg',
                    'title' => '薄型ラック',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4548718355792_180.jpg',
                    'title' => 'パイン材収納',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4934761362458_180.jpg',
                    'title' => 'オークユニットシェ…',
                    'sectionCode' => '',
                ],
            ],
        ],
    ];

    /**
     * 特集.
     */
    private function getMockDataCampaigns($categoryCode)
    {
        return [
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
        ];
    }

    /**
     * 商品リスト(第2階層)
     *
     * $categoryCode が S10003 は 婦人ウェア→カットソー(最階層: 記事リンク(categories_in_page)が存在する).
     * $categoryCode が S20003 は 収納家具→シェルフ(中階層: 記事リンクはカラ).
     */
    private function getMockDataSecond($categoryCode)
    {
        return [
            'links' => $this->mockDataSecond[$categoryCode]['links'],
            'category_code'  => $categoryCode,
            'category_title' => $this->mockDataSecond[$categoryCode]['category_title'],
            'article' => $this->mockDataSecond[$categoryCode]['article'],
            'rankings' => $this->mockDataSecond[$categoryCode]['rankings'],
            'innerCategories' => $this->mockDataSecond[$categoryCode]['innerCategories'],
            'categories_in_page' => $this->mockDataSecond[$categoryCode]['categories_in_page'],
            'sort_type' => 'group',
            'total' => 550,
            'groups' => $this->getMockGroups($categoryCode),
            'items' => [],
        ];
    }

    /**
     * 商品リスト(第2階層)データ.
     */
    private $mockDataSecond = [
        'S10003' => [
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
            'innerCategories' => null,
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
        ],
        'S20003' => [
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/section/T20003',
                    'name' => '収納家具',
                ],
            ],
            'category_title' => "シェルフ",
            'article' => [
                'title' =>"約120品目の家具の価格を見直しました。",
                'description' =>"収納用品やユニットシェルフ、収納ベットなどの価格を見直しました。生産工程を点検し、品質はそのままにさらにお求めやすい価格を実現。",
                'back_ground_image' => 'https://img.muji.net/img/item/4548718708710_08_1260.jpg',
            ],
            'rankings' => null,
            'innerCategories' => [
                [
                    'img_src' => 'https://www.muji.net/img/item/4548718121328_180.jpg',
                    'title' => 'スタッキングシェルフ',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4547315961603_180.jpg',
                    'title' => 'ステンレスユニットシェルフ',
                    'sectionCode' => 'S02601',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4547315256976_180.jpg',
                    'title' => 'スタッキングキャ…',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4549738749844_180.jpg',
                    'title' => '薄型ラック',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4548718355792_180.jpg',
                    'title' => 'パイン材収納',
                    'sectionCode' => '',
                ],
                [
                    'img_src' => 'https://www.muji.net/img/item/4934761362458_180.jpg',
                    'title' => 'オークユニットシェ…',
                    'sectionCode' => '',
                ],
            ],
            'categories_in_page' => null,
        ],
        'S02601' => [
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/section/T20003',
                    'name' => '収納家具',
                ],
                [
                    'path' => '/store/cmdty/section/S20003',
                    'name' => 'シェルフ',
                ],
            ],
            'category_title' => "ステンレスユニットシェルフ",
            'article' => [
                'description' =>"幅や高さ、素材の違い棚板を組み合わせて完成させます。ステンレス製で水まわりにも活躍するシェルフです。",
                'back_ground_image' => 'https://img.muji.net/img/item/4549337236486_03_400.jpg',
            ],
            'rankings' => null,
            'innerCategories' => null,
            'categories_in_page' => [
                [
                    'title' => 'ステンレスユニットシェルフ',
                    'subtitle' => '基本セット',
                    'code' => 'product-stainless-basic',
                ],
                [
                    'title' => 'ステンレスユニットシェルフ',
                    'subtitle' => '帆立',
                    'code' => 'product-scallop',
                ],
            ],
        ],
    ];

    /**
     * モックデータ: カテゴリコードに合わせたグループデータ.
     *
     * S20003のときはシェルフ用. それ以外は婦人ウェア用.
     */
    private function getMockGroups($categoryCode = "")
    {
        switch ($categoryCode) {
            case "T10000":
                return [
                    [
                        'group_name' => '半袖・タンクトップ',
                        'category_code_in_page' => 'product-t-shirt',
                        'total' => 321,
                        'link' => '#',
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                    [
                        'group_name' => '半袖',
                        'category_code_in_page' => 'product-t-shirt',
                        'total' => 123,
                        'link' => '#',
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                    [
                        'group_name' => '半袖',
                        'category_code_in_page' => 'product-uv-cut',
                        'total' => 123,
                        'link' => '#',
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                ];
            case "T20003":
                return [
                    [
                        'group_name' => 'シェルフ',
                        'category_code_in_page' => 'product-shelf',
                        'total' => 66,
                        'link' => '/store/cmdty/section/S20003',
                        'items'=> $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'キャビネット',
                        'category_code_in_page' => 'product-cabinet',
                        'total' => 31,
                        'link' => '#',
                        'items' => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'ラック',
                        'category_code_in_page' => 'product-rack',
                        'total' => 25,
                        'link' => '#',
                        'items' => $this->getMockItemDataListForShelf(),
                    ],
                ];
            case "S10003":
                return [
                    [
                        'group_name' => '半袖・タンクトップ',
                        'category_code_in_page' => 'product-t-shirt',
                        'total' => 321,
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                    [
                        'group_name' => '半袖',
                        'category_code_in_page' => 'product-t-shirt',
                        'total' => 123,
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                    [
                        'group_name' => '半袖',
                        'category_code_in_page' => 'product-uv-cut',
                        'total' => 123,
                        'items' => $this->getMockItemDataListForWoman(),
                    ],
                ];
            case "S20003":
                return [
                    [
                        'group_name' => 'スタッキングシェルフ',
                        'category_code_in_page' => 'product-stacking-shelf',
                        'description' => 'タテにヨコにも自由に拡張。正方形、ワイドタイプ、オープンタイプで組み合わせ可能。',
                        'img' => 'https://img.muji.net/img/item/4548718708710_08_400.jpg',
                        'total'      => 321,
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'ステンレスユニットシェルフ',
                        'category_code_in_page' => 'product-stainless-shelf',
                        'description' => '錆びにくいステンレスを使用したユニットシェラフ',
                        'img' => 'https://img.muji.net/img/item/4548718708710_08_400.jpg',
                        'total'      => 123,
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'スチールユニットシェルフ',
                        'category_code_in_page' => 'product-steel-shelf',
                        'description' => '豊富なオプションを自由に組み合わせることができるユニットシェルフ。',
                        'img' => 'https://img.muji.net/img/item/4548718708710_08_400.jpg',
                        'total'      => 123,
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'パイン材ユニットシェルフ',
                        'category_code_in_page' => 'product-pine-wood-shelf',
                        'description' => '天然の”節”の表情が楽しめるパイン村。',
                        'img' => 'https://img.muji.net/img/item/4548718708710_08_400.jpg',
                        'total'      => 123,
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                ];
            case "S02601":
                return [
                    [
                        'group_name' => 'オーク材棚セット',
                        'category_code_in_page' => 'product-stainless-basic',
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => 'ウォールナット材棚セット',
                        'category_code_in_page' => 'product-stainless-basic',
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                    [
                        'group_name' => '',
                        'category_code_in_page' => 'product-scallop',
                        'items'      => $this->getMockItemDataListForShelf(),
                    ],
                ];
            default:
                return [];
        }
    }

    /**
     * モックデータ: 婦人ウェア用アイテムリスト.
     */
    private function getMockItemDataListForWoman()
    {
        return [
            $this->getMockItemDataForWoman(1,3),
            $this->getMockItemDataForWoman(1,4, ['new']),
            $this->getMockItemDataForWoman(1,5, ['discount']),
            $this->getMockItemDataForWoman(1,6, ['early']),
            $this->getMockItemDataForWoman(1,7, ['new', 'discount', 'early']),
            $this->getMockItemDataForWoman(1,8),
            $this->getMockItemDataForWoman(1,9),
            $this->getMockItemDataForWoman(1,10),
            $this->getMockItemDataForWoman(1,11),
            $this->getMockItemDataForWoman(1,12),
            $this->getMockItemDataForWoman(1,13),
            $this->getMockItemDataForWoman(1,14),
        ];
    }

    /**
     * モックデータ: シェルフ用アイテムリスト.
     */
    private function getMockItemDataListForShelf()
    {
        return [
            [
                'jancode' => '4549337263970',
                'nostock' => false,
                'title' => '3段x2列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => true,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
            [
                'jancode' => '4549337263635',
                'nostock' => false,
                'title' => '3段x3列・オーク材',
                'material' => 'スタッキングシェルフ',
                'price' => 26990,
                'tags' => [],
            ],
        ];
    }

    /**
     * モックデータ: 婦人ウェア用アイテム.
     */
    private function getMockItemDataForWoman($level, $swatchNumber, $tags=[])
    {
        $title = 'タートルネックセーター';
        $material = 'ウールシルク洗える';
        if ($level === 2) {
            $title = 'プリントTシャツ';
            $material = 'オーガニックコットン';
        }
        $item = [
            'jancode' => '4550002032364',
            'nostock' => false,
            'title' => $title,
            'material' => $material,
            'price' => 2903,
            'swatches' => $this->getMockSwatches($level, $swatchNumber),
            'tags' => $tags,
            'minSize' => 'XS',
            'maxSize' => 'XXL',
        ];

        if (in_array("campaign", $tags) || in_array("discount", $tags)) {
            $item['new_price'] = 1495;
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
            $swatches[0]['jancode'] = '4550002253899';
            $swatches[1]['jancode'] = '4550002253912';
            $swatches[2]['jancode'] = '4550002253936';
            $swatches[3]['jancode'] = '4550002253974';
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
