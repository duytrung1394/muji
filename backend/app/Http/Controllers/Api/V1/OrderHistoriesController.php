<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class OrderHistoriesController extends Controller
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
     * @param  string   $orderHistoryCode
     * @return Response
     */
    public function show($orderHistoryCode)
    {
        return [
            'data' => $this->getMockdata($orderHistoryCode),
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
     * UporderDate the specified resource in storage.
     *
     * @param  Request  $request
     * @param  string   $camelCase(pkName)
     * @return Response
     */
    public function uporderDate(Request $request, $orderHistoryCode)
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

        // for ($i = 0; $i < 10; $i++) {
        //     $data[] = $this->getMockData('order_history_code' . ($i + $start ));
        // }

        $data = $this->getMockData();

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    // private function getMockData($code)
    private function getMockData()
    {
        // return [
        //     'order_history_code'   => $code,
        //     'name'        => 'name_' . $code,
        //     'description' => 'description_' . $code,
        // ];

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
                'img_src' => '/images/order/purchase_history/img-purchase-history-1.png',
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
                'img_src' => '/images/order/purchase_history/img-purchase-history-2.png',
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
                'img_src' => '/images/order/purchase_history/img-purchase-history-3.png',
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
                'img_src' => '/images/order/purchase_history/img-purchase-history-4.png',
            ]
        ];
    }
}
