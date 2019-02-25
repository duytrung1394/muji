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
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function indexSubscription(Request $request)
    {
        return [
            'data'  => $this->getMockDataSubscription(),
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
    private function getMockData()
    {
        return [
            'delivery' => [
                'name' => '無印　花子',
                'address' => [
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
                'deliveryCount' => '1',
                'deliveryDivision' => '小物',
                'year' => '2019',
                'month' => '10',
                'day' => '30',
                'day_of_the_week' => '火',
            ],
            'order' => [
                'total' => 2,
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

    /**
     * モックデータを生成して取得
     */
    private function getMockDataStoreReserve()
    {
        $sample1 = [
            'jan_code' => '4550002678944',
            'order_state' => '取り置き完了(2018/12/08迄)',
            'store_name' => '西武池袋店',
            'item_name' => 'オーガニックコットンスムース編み五分袖Tシャツ',
            'quantity' => 1,
            'item_price' => 645,
            'item_price_present' => 545,
            'item_discount' => '10%OFF',
            'cancel_button_disabled' => false,
            'cancel_type' => 2,
            'img_src' => 'img-reserve-1.png',
        ];

        $sample2 = [
            'jan_code' => '4550002678944',
            'order_state' => '取り置き依頼中',
            'store_name' => '西武池袋店',
            'item_name' => 'オーガニックコットンVネック半袖シャツ',
            'quantity' => 1,
            'item_price' => 495,
            'cancel_button_disabled' => false,
            'cancel_type' => 1,
            'img_src' => 'img-reserve-2.png',
        ];

        $sample3 = [
            'jan_code' => '4550002678944',
            'order_state' => 'キャンセル済み',
            'store_name' => '西武池袋店',
            'item_name' => 'ステンレスユニットシェルフ・ステンレス追加棚',
            'quantity' => 1,
            'item_price' => 495,
            'cancel_button_disabled' => false,
            'cancel_type' => 3,
            'img_src' => 'img-reserve-3.png',
        ];

        $all = [];
        $complete = [];
        $request = [];

        for ($i = 0; $i < 7; $i++) {
            $complete[] = $sample1;
            $all[] = $sample1;
        }

        for ($i = 0; $i < 7; $i++) {
            $request[] = $sample2;
            $all[] = $sample2;
        }

        for ($i = 0; $i < 5; $i++) {
            $all[] = $sample3;
        }

        return [
            'all' => $all,
            'complete' => $complete,
            'request' => $request
        ];
    }


    /**
     * モックデータを生成して取得
     */
    private function getMockDataSubscription()
    {
        return [
            'continue' => [
                [
                    'jan_code' => '4550002678944',
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'order_address' => '東京都渋谷区宇田川町',
                    'order_frequency' => 1,
                    'item_name' => '化粧水・敏感肌用・さっぱりタイプ（大容量）400ml',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'quantity' => 1,
                    'item_price' => 980,
                    'item_price_present' => 784,
                    'item_discount' => '定期購入10%OFF',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-subscription-pro-1.png',
                ],
                [
                    'jan_code' => '4550002678944',
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'order_address' => '東京都渋谷区宇田川町',
                    'order_frequency' => 1,
                    'item_name' => '化粧水・敏感肌用・さっぱりタイプ（大容量）400ml',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'quantity' => 1,
                    'item_price' => 980,
                    'item_price_present' => 784,
                    'item_discount' => '定期購入10%OFF',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-subscription-pro-1.png',
                ],
                [
                    'jan_code' => '4550002678944',
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'order_address' => '東京都渋谷区宇田川町',
                    'order_frequency' => 1,
                    'item_name' => '化粧水・敏感肌用・さっぱりタイプ（大容量）400ml',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'quantity' => 1,
                    'item_price' => 980,
                    'item_price_present' => 784,
                    'item_discount' => '定期購入10%OFF',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-subscription-pro-1.png',
                ],
                [
                    'jan_code' => '4550002678944',
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'order_address' => '東京都渋谷区宇田川町',
                    'order_frequency' => 1,
                    'item_name' => '化粧水・敏感肌用・さっぱりタイプ（大容量）400ml',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'quantity' => 1,
                    'item_price' => 980,
                    'item_price_present' => 784,
                    'item_discount' => '定期購入10%OFF',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 1,
                    'img_src' => 'img-subscription-pro-1.png',
                ]
            ],
            'stopped' => [
                [
                    'jan_code' => '4550002678944',
                    'order_date' => '2018/11/23',
                    'order_state' => '受け取り済み',
                    'order_address' => '東京都渋谷区宇田川町',
                    'order_frequency' => 1,
                    'order_warning' => 1,
                    'item_name' => '化粧水・敏感肌用・さっぱりタイプ（大容量）400ml',
                    'item_color' => 'カラー：マスタード',
                    'item_size' => 'サイズ：S',
                    'quantity' => 1,
                    'item_price' => 980,
                    'item_price_present' => 784,
                    'item_discount' => '定期購入10%OFF',
                    'cancel_button_disabled' => false,
                    'cancel_type' => 2,
                    'img_src' => 'img-subscription-pro-1.png',
                ]
            ]
        ];
    }

    /**
     * カートの保存(注文)
     *
     * @return Response
     */
    public function saveShoppingCart(Request $request)
    {
        return [
            'orderCode' => "1234567890",
        ];
    }
}
