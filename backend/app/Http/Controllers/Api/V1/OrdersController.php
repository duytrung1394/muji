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
            'data'  => $this->getMockData(),
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
      * Show the form for creating a new resource.
      *
      * @return \Illuminate\Http\Response
      */
     public function create()
     {
         return [
             'data' => new \stdClass,
         ];
     }

   /**
     * Display the specified resource.
     *
     * @param  string   $orderCode
     * @return Response
     */
    public function show($orderCode)
    {
        return [
            'data' => $this->getMockdata($orderCode),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        return [
            'data' => [],
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  string   $camelCase(pkName)
     * @return Response
     */
    public function update(Request $request, $orderCode)
    {
        return [
            'data' => [],
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        return [
            'data'  => [],
            'count' => 1,
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
    private function getMockData()
    {
        return [
            // 'order_code'   => $code,
            // 'name'        => 'name_' . $code,
            // 'description' => 'description_' . $code,
            'user_data' => [
                'addressee_name' => '無印　花子',
                'street_address' => '123 - 4567',
                'address' => '東京都渋谷区1-2-3',
                'phone_number' => '01 - 2345 - 6789',
                'orderer_name' => '無印　花子',
            ],
            'gift' => [
                'gift_flg' => true,
                'wapping_state' => '指定なし',
                'message_state' => '指定なし',
                'packTogether' => 'まとめて包装する',
                'packIndividual' => '個々に包装する',
            ],
            'delivery' => [
                'count' => '1',
                'category' => '小物',
                'year' => '2019',
                'month' => '10',
                'day' => '30',
                'day_of_the_week' => '火',
                'items' => [
                    [
                        'type' => 'カットソー',
                        'name' => 'ミニ裏毛五分袖ワイドＴシャツ',
                        'color' => 'ライトシルバーグレー',
                        'size' => 'S',
                        'number' => '1',
                        'price' => '2,980',
                        'img' => 'OrderDeliveryImage1',
                        'discount' => false,
                    ],
                    [
                        'type' => 'カットソー',
                        'name' => 'スムースハイネックワンピース',
                        'color' => 'チャコールグレー',
                        'size' => 'S',
                        'number' => '1',
                        'discount_price' => '3,000',
                        'price' => '2,903',
                        'img' => 'OrderDeliveryImage2',
                        'discount' => true,
                    ],
                ]
            ],
            'bill_detail' => [
                'points' => [
                    'possessions' => '3000',
                    'input_flg' => true
                ],
                'coins' => [
                    'possessions' => '3000',
                    'input_flg' => true
                ],
                'account' => [
                    'possessions' => '3000',
                    'input_flg' => false
                ]
            ],
            'billing_summary' => [
                'products_subtotal' => '7,960',
                'incidental_service' => '0',
                'delivery_fee' => '980',
                'muji_shopping_points' => '3,000',
                'muji_coins' => '3,000',
                'partoner_sales' => '-2,000',
                'payment_confirm' => '450',
            ],
            'lower_four_digits' => '1234',
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
}
