<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMultiMockData( (int)$request->input('page') ),
            'total' => 200,
        ];
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function indexPurchaseHistory(Request $request)
    {
        return [
            'data'  => $this->getPurchaseHistoryMock(),
            'total' => 200,
        ];
    }
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function indexStoreReserve(Request $request)
    {
        return [
            'data'  => $this->getMockDataStoreReserve(),
            'total' => 200,
        ];
    }

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData($page = 1)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data[] = $this->getMockData('order_code' . ($i + $start ));
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            'order_code'   => $code,
            'name'        => 'name_' . $code,
            'description' => 'description_' . $code,
        ];
    }

    private function getPurchaseHistoryMock(){
        return [
            [
                'order_date' => '2018/11/23',
                'order_state' => '受け取り済み',
                'store_name' => 'イオンモール各務原',
                'item_name' => 'オーガニックコットンVネック半袖Tシャツ',
                'item_color' => 'カラー：マスタード',
                'item_size' => 'サイズ：S',
                'item_num' => '個数：1個',
                'item_price' => '税込495円',
                'cancel_button' => '返品する',
                'cancel_button_disabled' => false,
                'cancel_type' => 3,
                'img_src' => 'img-purchase-history-1.png',
            ],
            [
                'order_date' => '2018/11/21',
                'order_state' => '受け取り済み',
                'store_name' => 'イオンモール各務原',
                'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                'item_num' => '個数：1個',
                'item_price' => '税込495円',
                'cancel_button' => '返品する',
                'cancel_button_disabled' => false,
                'cancel_type' => 3,
                'img_src' => 'img-purchase-history-2.png',
            ],
            [
                'order_date' => '2018/10/20',
                'order_state' => '配送準備中（2018/10/22 お届け予定）',
                'order_address' => '東京都渋谷区宇田川町',
                'item_name' => 'オーガニックコットンスムース編み五分袖Tシャツ',
                'item_num' => '個数：1個',
                'item_color'  => 'カラー：スモーキーブルー',
                'item_size' => 'サイズ：S',
                'item_price' => '税込465円',
                'cancel_button' => 'キャンセル',
                'cancel_button_disabled' => false,
                'cancel_type' => 1,
                'img_src' => 'img-purchase-history-3.png',
            ],
            [
                'order_date' => '2018/11/23',
                'order_state' => '配送中（2018/11/02 お届け予定）',
                'order_address' => '東京都渋谷区宇田川町',
                'item_name' => 'オーク材ユニットシェルフ・小・基本セット',
                'item_num' => '個数：1個',
                'item_price' => '税込24,000円',
                'cancel_button' => '返品する',
                'cancel_button_disabled' => true,
                'cancel_type' => 2,
                'img_src' => 'img-purchase-history-4.png',
            ]
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockDataStoreReserve()
    {
        return [
            [
                [
                    'order_state' => '取り置き完了(2018/12/08迄)',
                    'store_name' => '西武池袋店',
                    'item_name' => 'オーガニックコットンスムース編み五分袖Tシャツ',
                    'item_num' => '個数：1個',
                    'item_price' => '税込645円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 2,
                    'img_src' => 'img-reserve-1.png',
                ],
                [
                    'order_state' => '取り置き依頼中',
                    'store_name' => '西武池袋店',
                    'item_name' => 'オーガニックコットンVネック半袖シャツ',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-reserve-2.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
            ],
            [
                [
                    'order_state' => '取り置き完了(2018/12/08迄)',
                    'store_name' => '西武池袋店',
                    'item_name' => 'オーガニックコットンスムース編み五分袖Tシャツ',
                    'item_num' => '個数：1個',
                    'item_price' => '税込645円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 2,
                    'img_src' => 'img-reserve-1.png',
                ],
                [
                    'order_state' => '取り置き依頼中',
                    'store_name' => '西武池袋店',
                    'item_name' => 'オーガニックコットンVネック半袖シャツ',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-reserve-2.png',
                ],
            ],
            [
                [
                    'order_state' => 'キャンセル済み',
                    'store_name' => '西武池袋店',
                    'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
                    'item_num' => '個数：1個',
                    'item_price' => '税込495円',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 3,
                    'img_src' => 'img-reserve-3.png',
                ],
            ]
        ];
    }
}
