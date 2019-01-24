<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            // 'data'  => $this->getMultiMockData( (int)$request->input('page') ),
            'data' => $this->getProductMock(),
            'total' => 200,
        ];
    }

    private function getProductMock(){
        return [
            [
                [
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'store_name' => 'イオンモール各務原',
                    'headline' => 'オーガニックコットン',
                    'item_name' => 'オーガニックコットンVネック半袖Tシャツ',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'item_price_present' => '税込480円',
                    'item_discount' => '10%OFF',
                    'favorite_type' => 1,
                    'img_src' => 'img-favorite-slide-1.png',
                ],
                [
                    'order_date' => '2018/11/21',
                    'order_state' => '受け取り済み',
                    'store_name' => 'イオンモール各務原',
                    'headline' => 'オーガニックコットン',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'favorite_type' => 1,
                    'img_src' => 'img-favorite-slide-1.png',
                ],
                [
                    'order_date' => '2018/10/20',
                    'order_state' => '配送準備中（2018/10/22 お届け予定）',
                    'order_address' => '東京都渋谷区宇田川町',
                    'headline' => 'オーガニックコットン',
                    'item_name' => 'オーガニックコットンスムース編み五分袖Tシャツ',
                    'item_num' => '個数：1個',
                    'item_color'  => 'カラー：スモーキーブルー',
                    'item_size' => 'サイズ：S',
                    'item_price' => '税込465円',
                    'favorite_type' => 1,
                    'img_src' => 'img-favorite-slide-1.png',
                ],
                [
                    'order_date' => '2018/11/23',
                    'order_state' => '配送中（2018/11/02 お届け予定）',
                    'order_address' => '東京都渋谷区宇田川町',
                    'headline' => 'オーガニックコットン',
                    'item_name' => 'オーク材ユニットシェルフ・小・基本セット',
                    'item_num' => '個数：1個',
                    'item_price' => '税込24,000円',
                    'favorite_type' => 1,
                    'img_src' => 'img-favorite-slide-1.png',
                ]
            ],
            [
                [
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'store_name' => 'イオンモール各務原',
                    'headline' => 'アトレ川崎',
                    'item_name' => 'アドベントカレンダーを作るワークショップ',
                    'item_color' => '',
                    'item_size' => '',
                    'item_num' => '',
                    'item_price' => '税込495円',
                    'favorite_type' => 2,
                    'img_src' => 'img-favorite-slide-2.png',
                ],
                [
                    'order_date' => '2018/11/21',
                    'order_state' => '受け取り済み',
                    'store_name' => 'イオンモール各務原',
                    'headline' => 'アトレ川崎',
                    'item_name' => 'アドベントカレンダーを作るワークショップ',
                    'item_num' => '',
                    'item_price' => '税込495円',
                    'favorite_type' => 2,
                    'img_src' => 'img-favorite-slide-2.png',
                ],
                [
                    'order_date' => '2018/10/20',
                    'order_state' => '配送準備中（2018/10/22 お届け予定）',
                    'order_address' => '東京都渋谷区宇田川町',
                    'headline' => 'アトレ川崎',
                    'item_name' => 'アドベントカレンダーを作るワークショップ',
                    'item_num' => '',
                    'item_color'  => '',
                    'item_size' => '',
                    'item_price' => '税込465円',
                    'favorite_type' => 2,
                    'img_src' => 'img-favorite-slide-2.png',
                ],
            ],
            [
                [
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'store_name' => 'イオンモール各務原',
                    'headline' => 'くらしの良品研究所',
                    'item_name' => '自然の色',
                    'caption' =>  '10月に入り、北国からは、そろそろ紅葉の便りが聞かれるようになりました...',
                    'item_color' => '',
                    'item_size' => '',
                    'item_num' => '',
                    'item_price' => '',
                    'favorite_type' => 3,
                    'img_src' => 'img-favorite-slide-3-1.png',
                ],
                [
                    'order_date' => '2018/11/23',
                    'order_state' => '配送中（2018/11/02 お届け予定）',
                    'order_address' => '東京都渋谷区宇田川町',
                    'headline' => 'くらしの良品研究所',
                    'item_name' => '日本の布づくりの旅（前編）',
                    'caption' => '今年の4月に、MUJI BOOKSから『日本の布　1』が発売されました...',
                    'item_num' => '',
                    'item_price' => '',
                    'favorite_type' => 3,
                    'img_src' => 'img-favorite-slide-3-2.png',
                ]
            ],
        ];
    }
}
