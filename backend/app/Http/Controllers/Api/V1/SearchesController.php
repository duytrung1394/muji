<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class SearchesController extends Controller
{
    /**
     * Display a listing of the resource.
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

    public function indexItem(Request $request)
    {
        return [
            'data'  => $this->getMultiMockItemData( (int)$request->input('page'), $request->input('keyword') ),
            'total' => 4,
        ];
    }

    /**
     * モックデータ取得用．
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
     * モックデータを生成して取得
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
     * モックデータ取得用．
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
     * モックデータを生成して取得
     */
    private function getMockItemData($code, $keyword)
    {
        return [
            'keyword' => $keyword,
            'topics' => [
                [
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicUrl' => "",
                    'image_url' => "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg",
                    'topicName' => "婦人定番白シャツ"
                ],
                [
                    'topicUrl' => "",
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
                            "material" => "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => true,
                            "hasReserveItemIcon" => false,

                            "jancodeChildList" => [
                                [
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ" //https://placehold.jp/34x34.png},
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
                            "material" => "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
                            "itemName" => "ストレッチブロード形態安定シャツ",
                            "hasNewIcon" => true,
                            "hasReserveItemIcon" => false,

                            "jancodeChildList" => [
                                [
                                    "size_code" => 0, // S
                                    "stockPriorityItemColor" => "ローズ" //https://placehold.jp/34x34.png},
                                ],
                                [
                                    "size_code" => 3, // XL
                                    "stockPriorityItemColor" => "ブルー" //https://placehold.jp/34x34.png},
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
                             "material" => "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
                             "itemName" => "ストレッチブロード形態安定シャツ",
                             "hasNewIcon" => true,
                             "hasReserveItemIcon" => false,

                             "jancodeChildList" => [
                                 [
                                     "size_code" => 0, // S
                                     "stockPriorityItemColor" => "ローズ" //https://placehold.jp/34x34.png},
                                 ],
                                 [
                                     "size_code" => 2, // XL
                                     "stockPriorityItemColor" => "ブルー" //https://placehold.jp/34x34.png},
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
        ];
    }
}
