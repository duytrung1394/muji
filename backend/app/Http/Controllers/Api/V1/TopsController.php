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
        ];
    }
}



