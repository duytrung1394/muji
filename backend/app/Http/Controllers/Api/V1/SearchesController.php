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
    'data'  => $this->getMultiMockData( (int)$request->input('page'), $request->input('keyword') ),
    'total' => 4,
];
}

/**
 * モックデータ取得用．
 *
 * @return array
 */
private function getMultiMockData($page = 1, $keyword)
{
    $data = [];
    $start = ((int) $page - 1) * 10;

    for ($i = 0; $i < 10; $i++) {
        $data = $this->getMockData('search_code' . ($i + $start ), $keyword);
    }

    return $data;
}

/**
 * モックデータを生成して取得
 */
private function getMockData($code, $keyword)
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
        ]

];
}
}
