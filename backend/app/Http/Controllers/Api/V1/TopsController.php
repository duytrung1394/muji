<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class TopsController extends Controller
{
    /**
     * Display Top.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'item' => $this->getMockdata(),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        return [
            'notices' => [
                ['url' => '/store', 'title' => 'お知らせ1'],
                ['url' => '/store', 'title' => 'お知らせ2'],
                ['url' => '/store', 'title' => 'お知らせ3'],
            ],
            'feature_image' => 'https://www.muji.com/jp/img/panel/main/ryohinweek_pc.png',
            'features' => [
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/c18083101_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/c18083101_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
            ],
            'new_items' => [
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10901_640_180928.jpg',
                    'title' => '衣料品 新商品一覧',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10909_640_181005.jpg',
                    'title' => '生活雑貨 新商品一覧',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10905_640_181005.jpg',
                    'title' => '食品 新商品一覧',
                ],
            ],
            'category_list' => [
                [
                    'category_title' => '衣料品',
                    'img_src' => 'https://img.muji.net/img/item/4550002061869_95.jpg',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002674335_01_95.jpg',
                            'title' => '婦人ウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738822431_01_95.jpg',
                            'title' => '婦人インナーウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002277819_01_95.jpg',
                            'title' => '紳士ウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002612801_95.jpg',
                            'title' => '紳士インナーウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738463351_95.jpg',
                            'title' => '靴下',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738777656_95.jpg',
                            'title' => '靴',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738175360_95.jpg',
                            'title' => 'バッグ',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002626457_01_95.jpg',
                            'title' => '服飾雑貨',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002378257_01_95.jpg',
                            'title' => 'MUJI Labo婦人',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002061869_95.jpg',
                            'title' => 'MUJI Labo紳士',
                        ],
                    ]
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10909_640_181005.jpg',
                    'title' => '生活雑貨 新商品一覧',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10905_640_181005.jpg',
                    'title' => '食品 新商品一覧',
                ],
            ],
            'limited_items' => [
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s000051065_640.jpg',
                    'title' => '衣料品 期間限定価格一覧',
                    'description' => '婦人綿混撥水トレンチ・ステンカラーコート／デニムジャケット最大2,000円OFF など',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/ogcsTowel2_640.jpg',
                    'title' => '生活雑貨 期間限定価格一覧',
                    'description' => '対象のタオル2点以上で15％OFF など',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s3005103_640.jpg',
                    'title' => '食品 期間限定価格一覧',
                    'description' => 'レトルトカレー3点以上で15％OFF など',
                ],
            ],
            'important_notices' => [
                ['date' => '2018.09.14', 'message' => '重要なお知らせ1........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ2........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ3........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
            ],
        ];
    }
}
