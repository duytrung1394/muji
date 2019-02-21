<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class DeliveriesController extends Controller
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
     * Display the specified resource.
     *
     * @param  string   $deliveryCode
     * @return Response
     */
    public function show($deliveryCode)
    {
        return [
            'item' => $this->getMockdata($deliveryCode),
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
    public function update(Request $request, $deliveryCode)
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
            $data[] = $this->getMockData('delivery_code' . ($i + $start ));
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            // 'delivery_code'   => $code,
            // 'name'        => 'name_' . $code,
            // 'description' => 'description_' . $code,

            // 'addressBookNo' => $addressBookNo,
            // 'name' => $addressBookNo === 0 ? "無印　花子" : "良品　計子",
            // 'name_memo' => $addressBookNo === 0 ? "ムジルシ　リョウタ" : "リョウヒン　ケイコ",
            // 'zip_code' => "170-8424",
            // 'address1' => "東京都",
            // 'address2' => "豊島区",
            // 'address3' => "東池袋４ー２６ー３",
            // 'address4' => $addressBookNo === 0 ? "ムジ・ネットビル７Ｆ 無印良品様方" : "無印良品ビル無印良品ビル無印良品ビル１０",
            // 'tel' => "03-3989-4191",
            'addresses' => [
                [
                    // 'addressBookNo' => $addressBookNo,
                    'name' => '無印　花子',
                    'zipCode' => '123-4567',
                    'address1' => '東京都渋谷区宇田川町21-1',
                    'address2' => '渋谷西武パーキング館　Ｂ1Ｆ',
                    'tel' => '01 - 2345 - 6789' 
                ],
                [
                    // 'addressBookNo' => $addressBookNo,
                    'name' => '無印 良太',
                    'zipCode' => '123-4567',
                    'address1' => '東京都豊島区南池袋1-28-1',
                    'address2' => '西武池袋本店別館1～2Ｆ',
                    'tel' => '01 - 2345 - 6789'
                ],
                [
                    // 'addressBookNo' => $addressBookNo,
                    'name' => '無印 計子',
                    'zipCode' => '123-4567',
                    'address1' => '東京都千代田区丸の内2-7-2-1',
                    'address2' => '西武池袋本店別館1～2Ｆ',
                    'tel' => '01 - 2345 - 6789'
                ],
            ],
        ];
    }
}
