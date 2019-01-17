<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    /**
     * 商品詳細.
     *
     * @return Response
     */
    public function index(string $janCode)
    {
        return [
            'data'  => $this->getMockData($janCode),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($janCode)
    {
        $data = [
            'jan_code' => $janCode,
            'fab_flg' => 1,
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/section/T10000',
                    'name' => '婦人ウェア',
                ],
                [
                    'path' => '/store/cmdty/section/S10003',
                    'name' => 'カットソー',
                ],
            ],
            'title' => "ミニ裏毛五分袖ワイドＴシャツ",
            'material' => "オーガニックコットン",
            'read_more_info' => [
                'messages' => [
                    [
                        "裏のループが短い裏毛素材に編み立てました。ほど良い厚みの生地とゆったりとしたシルエットが特長です。"
                    ],
                    [
                        "着心地やわらかに、自由に楽しめるベーシックなTシャツです。"
                    ],
                ],
            ],
            'store_info' => [
                'toriatukai_flg' => 1,
                'labal' => '店舗受け取り不可',
            ],
            'price_info' => [
                'price_original' => 2903,
                'price_present' => 1495,
                'sales_date' => '18/05/02 AM09:30',
                'number' => '02619589'
            ],
            `distribution_fee` => 490,
            'color_list_select' => 0,
            'color_list' => [
                [
                    'title' => 'ライトシルバーグレー',
                    'img' => 'img-color-1.png',
                ],
                [
                    'title' => '黒',
                    'img' => 'img-color-2.png',
                ],
                [
                    'title' => 'ライトシルバーグレー×ボーダー',
                    'img' => 'img-color-3.png',
                ],
                [
                    'title' => 'ライトシルバーグレー×柄',
                    'img' => 'img-color-4.png',
                ],
            ],
            'size_list_select' => 1,
            'size_list' => [
                [
                    'title' => 'XS',
                    'value' => 'XS',
                ],
                [
                    'title' => 'S',
                    'value' => 'S',
                ],
                [
                    'title' => 'M',
                    'value' => 'M',
                ],
                [
                    'title' => 'L',
                    'value' => 'L',
                ],
                [
                    'title' => 'XL',
                    'value' => 'XL',
                ],
                [
                    'title' => 'XXL',
                    'value' => 'XXL',
                ],
            ],
        ];

        $imageTotal = 5;
        $imageBaseUrl = 'https://img.muji.net/img/item/';
        $imageSize = 1260;
        $images = [];
        for ($i = 0; $i < $imageTotal; $i++) {
            $images[] = [
                'url' => $imageBaseUrl . $janCode . ($i!=0 ? '_' . sprintf('%02d',$i) : '') . '_' . $imageSize . '.jpg',
            ];
        }
        $data['images']= $images;

        return $data;
    }
}
