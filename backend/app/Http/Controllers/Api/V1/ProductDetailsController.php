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
        return [
            'jan_code' => $janCode,
            'navigation_list' => [
                 [
                     'path' => '/store',
                     'title' => '無印良品トップ',
                 ],
                 [
                     'path' => '/store/cmdty/section/T10000',
                     'title' => '婦人ウェア',
                 ],
                 [
                     'path' => '/store/cmdty/section/S10002',
                     'title' => 'セーター',
                 ],
             ],
            'title' => "ヤクウールＶネックセーター　婦人Ｓ・ライトグレー",
            'main_item' => [
                'title' => 'ヤクウールＶネックセーター',
                'url' => 'https://img.muji.net/img/item/4550002691646_1260.jpg',
            ],
            'images' => [
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_1260.jpg',
                ],
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_01_1260.jpg',
                ],
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_02_1260.jpg',
                ],
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_03_1260.jpg',
                ],
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_04_1260.jpg',
                ],
                [
                    'url' => 'https://img.muji.net/img/item/4550002253899_05_1260.jpg',
                ],
            ],
            'detail_items' => [
                [
                    'type' => 'video',
                    'url' => 'https://www.muji.com/jp/img/store/cmdty/include/mainpicture_movie/yak_mov_01.mp4',
                    'poster' => 'https://www.muji.com/jp/img/store/cmdty/include/mainpicture_movie/yak_mov_1080.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_01_400.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_02_1260.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_03_1260.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_04_1260.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_05_1260.jpg',
                ],
                [
                    'type' => 'image',
                    'url' => 'https://img.muji.net/img/item/4550002691608_06_1260.jpg',
                ],
            ],
        ];
    }
}
