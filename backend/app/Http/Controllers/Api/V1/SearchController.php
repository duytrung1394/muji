<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * フリーワード検索（店舗）取得.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMultiMockStoreData( (int)$request->input('page'), $request->input('keyword') ),
            'total' => 4,
        ];
    }

    /**
     * フリーワード検索（商品）取得.
     *
     * @return Response
     */
    public function indexItem(Request $request)
    {
        return [
            'data'  => $this->getMultiMockItemData( (int)$request->input('page'), $request->input('keyword') ),
            'total' => 4,
        ];
    }

    /**
     * フリーワード検索（読み物）取得.
     *
     * @return Response
     */
    public function indexArticle(Request $request)
    {
        return [
            'data'  => $this->getMultiMockArticleData( (int)$request->input('page'), $request->input('keyword') ),
            'total' => 4
        ];
    }

    /*
     * フリーワード検索（サービス）取得.
     *
     * @return Response
     */
    public function indexService(Request $request)
    {
        return [
            'data'  => $this->getMultiMockServiceData( (int)$request->input('page'), $request->input('keyword') ),
            'total' => 4
        ];
    }

    /**
     * モックデータ（店舗）取得用．
     *
     * @return array
     */
    private function getMultiMockStoreData($page = 1, $keyword)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data = $this->getMockStoreData('search_code' . ($i + $start ), $keyword);
        }

        return $data;
    }

    /**
     * モックデータ（店舗）を生成して取得
     */
    private function getMockStoreData($code, $keyword)
    {
        return [
            'keyword' => $keyword,
            'searchItems'   => [
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ]
            ],

            'searchStores' => [
                [
                    'title' => "MUJI新宿",
                    'address' => "東京都新宿区新宿3-15-3　新宿ピカデリー　B1～2F",
                    'number' => "03-5367-2710",
                    'opening' => "11:00〜21:00",
                    'holiday' => "水曜日"
                ],
                [
                    'title' => "MUJI新宿",
                    'address' => "東京都新宿区新宿3-15-3　新宿ピカデリー　B1～2F",
                    'number' => "03-5367-2710",
                    'opening' => "11:00〜21:00",
                    'holiday' => ""
                ],
                [
                    'title' => "MUJI新宿",
                    'address' => "東京都新宿区新宿3-15-3　新宿ピカデリー　B1～2F",
                    'number' => "03-5367-2710",
                    'opening' => "11:00〜21:00",
                    'holiday' => ""
                ],
                [
                    'title' => "MUJI新宿",
                    'address' => "東京都新宿区新宿3-15-3　新宿ピカデリー　B1～2F",
                    'number' => "03-5367-2710",
                    'opening' => "11:00〜21:00",
                    'holiday' => ""
                ]
            ],
            'topics' => [
                [
                    'topicName' => "婦人定番白シャツ",
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
                ],
                [
                    'topicName' => "婦人定番白シャツ",
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
                ],
                [
                    'topicName' => "婦人定番白シャツ",
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
                ],
                [
                    'topicName' => "婦人定番白シャツ",
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
                ]
            ]
        ];
    }

    /**
     * モックデータ（商品）取得用．
     *
     * @return array
     */
    private function getMultiMockItemData($page = 1, $keyword)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data = $this->getMockItemData('search_code' . ($i + $start ), $keyword);
        }

        return $data;
    }

    /**
     * モックデータ（商品）を生成して取得
     */
    private function getMockItemData($code, $keyword)
    {
        return [
            'keyword' => $keyword,
            'topics' => [
                [
                    'topicId' => 1,
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicId' => 2,
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicId' => 3,
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicId' => 4,
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ]
            ],
            'searchTagResultList' => [
                [
                    'itemCount' => 10,
                    'tagName' => "紳士ウェア - シャツ",
                    'searchResultProductList' => [
                        [
                            'jancode' => '4550002032364',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => true,
                            "hasReserveItemIcon" => false,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => true,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ],
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => true,
                            "hasReserveItemIcon" => false,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 3, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 3, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4550002032364',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 3, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => false,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ]
                    ]
                ],
                [
                    'itemCount' => 10,
                    'tagName' => "紳士ウェア - シャツ",
                    'searchResultProductList' => [
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                             "material" => "オーガニックコットン",
                             "itemName" => "ストレッチブロード形態安定シャツ",
                             "hasNewIcon" => false,
                             "hasReserveItemIcon" => true,

                             "jancodeChildList" => [
                                 [
                                     "stockPriorityItemJancode" => '4549337263635',
                                     "stockPriorityItemStock" => true,
                                     "size_code" => 0, // S
                                     "stockPriorityItemColor" => "ローズ"
                                 ],
                                 [
                                     "stockPriorityItemJancode" => '4549337263635',
                                     "stockPriorityItemStock" => true,
                                     "size_code" => 2, // XL
                                     "stockPriorityItemColor" => "ブルー"
                                 ]
                              ],
                             "price" => [
                                  [
                                      "hasPrePrice" => false,
                                      "cancelPrice" => 2990,
                                      "viewPrice" => 1990,
                                      "discountPrice" => 990
                                  ]
                             ],
                             "image_url" =>
                                 "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ],
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => false,
                            "hasReserveItemIcon" => true,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 2, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => false,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ],
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => false,
                            "hasReserveItemIcon" => true,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 2, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => false,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ],
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => false,
                            "hasReserveItemIcon" => true,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 2, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => false,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ],
                        [
                            'jancode' => '4549337263635',
                            'nostock' => false,
                            "material" => "オーガニックコットン",
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => false,
                            "hasReserveItemIcon" => true,

                            "jancodeChildList" => [
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ"
                                ],
                                [
                                    "stockPriorityItemJancode" => '4549337263635',
                                    "stockPriorityItemStock" => true,
                                    "size_code" => 2, // XL
                                    "stockPriorityItemColor" => "ブルー"
                                ]
                            ],
                            "price" => [
                                [
                                    "hasPrePrice" => false,
                                    "cancelPrice" => 2990,
                                    "viewPrice" => 1990,
                                    "discountPrice" => 990
                                ]
                            ],
                            "image_url" =>
                                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                        ]
                    ]
                ]
            ],
            'searchOtherResults'   => [
                [
                    'id' => 1,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 2,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 3,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 4,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 5,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 6,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 7,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ]
            ]
        ];
    }

    /**
     * モックデータ（読み物）取得用．
     *
     * @return array
     */
    private function getMultiMockArticleData($page = 1, $keyword)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data = $this->getMockArticleData('search_code' . ($i + $start ), $keyword);
        }

        return $data;
    }

    /**
     * モックデータ（読み物）を生成して取得
     */
    private function getMockArticleData($code, $keyword)
    {
        return [
            'keyword' => $keyword,
            'searchArticleCategories' => [
                [
                    'categoryTitle' => "MUJIからのお知らせ",
                    'articles' => [
                        [
                            'articleId' => "1",
                            'title' => "タルトタタン",
                            'header' => "Cafe&Meal MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png"
                        ],
                        [
                            'articleId' => "2",
                            'title' => "タルトタタン",
                            'header' => "Cafe&Meal MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png"
                        ],
                        [
                            'articleId' => "3",
                            'title' => "タルトタタン",
                            'header' => "Cafe&Meal MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png"
                        ],
                        [
                            'articleId' => "4",
                            'title' => "タルトタタン",
                            'header' => "Cafe&Meal MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png"
                        ],
                        [
                            'articleId' => "5",
                            'title' => "タルトタタン",
                            'header' => "Cafe&Meal MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png"
                        ]
                    ]
                ],
                [
                    'categoryTitle' => "Found MUJI",
                    'articles' => [
                        [
                            'articleId' => "6",
                            'title' => "No.287　茶館",
                            'header' => "Found MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/8994_20180801130427_a36fbc8d3b16c9b2b3009010e3331498_D.jpg"
                        ],
                        [
                            'articleId' => "7",
                            'title' => "No.287　茶館",
                            'header' => "Found MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/8994_20180801130427_a36fbc8d3b16c9b2b3009010e3331498_D.jpg"
                        ],
                        [
                            'articleId' => "8",
                            'title' => "No.287　茶館",
                            'header' => "Found MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/8994_20180801130427_a36fbc8d3b16c9b2b3009010e3331498_D.jpg"
                        ],
                        [
                            'articleId' => "9",
                            'title' => "No.287　茶館",
                            'header' => "Found MUJI",
                            'date' => "2018/11/21",
                            'image_url' => "http://img.muji.net/passport/img/app/news/8994_20180801130427_a36fbc8d3b16c9b2b3009010e3331498_D.jpg"
                        ]
                    ]
                ]
            ],
            'searchOtherResults'   => [
                [
                    'id' => 1,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 2,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 3,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 4,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 5,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 6,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 7,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ]
            ],

        ];
    }

    /**
     * モックデータ（サービス）取得用．
     *
     * @return array
     */
    private function getMultiMockServiceData($page = 1, $keyword)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data = $this->getMockServiceData('search_code' . ($i + $start ), $keyword);
        }

        return $data;
    }

    /**
     * モックデータ（サービス）を生成して取得
     */
    private function getMockServiceData($code, $keyword)
    {
        return [
            'keyword' => $keyword,
            'searchEvents' => [
                [
                    'eventId' => 1,
                    'image_url' => "http://img.muji.net/passport/img/app/news/10127_20181015191830_dfdc807430e1c7eb5301b6263e08b97a_D.jpg",
                    'eventName' => "初めてのハンドドリップワークショップ",
                    'place' => "天神大名",
                    'date' => "2018/1/11"
                ],
                [
                    'eventId' => 2,
                    'image_url' => "http://img.muji.net/passport/img/app/news/10130_20181016092721_7f7de3ab0d44516d1d5065aee2d7d190_D.jpg",
                    'eventName' => "冬至に作ろう！かぼちゃの簡単カフェ風ランチプレート",
                    'place' => "天神大名",
                    'date' => "2018/1/11"
                ],
                [
                    'eventId' => 3,
                    'image_url' => "http://img.muji.net/passport/img/app/news/10127_20181015191830_dfdc807430e1c7eb5301b6263e08b97a_D.jpg",
                    'eventName' => "初めてのハンドドリップワークショップ",
                    'place' => "天神大名",
                    'date' => "2018/1/11"
                ]
            ],
            'searchServices' => [
                [
                    'serviceId' => 1,
                    'image_url' => "http://img.muji.net/passport/img/app/news/10131_20181016093215_eb923aea1cbbae5036cf3feed59733de_D.jpg",
                    'serviceName' => "コーヒーフロート",
                    'description' => "7大アレルゲン：乳",
                    'price' => 280
                ],
                [
                    'serviceId' => 2,
                    'image_url' => "http://img.muji.net/passport/img/app/news/10131_20181016093215_eb923aea1cbbae5036cf3feed59733de_D.jpg",
                    'serviceName' => "ブレンドコーヒーホット",
                    'price' => 280
                ]
            ],
            'searchOtherResults'   => [
                [
                    'id' => 1,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 2,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 3,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 4,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 5,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 6,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ],
                [
                    'id' => 7,
                    'title' => "商品1",
                    'description' => "MIJI HOTEL",
                    'img_src' => "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
                ]
            ]
        ];
    }
}
