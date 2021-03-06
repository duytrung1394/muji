<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CustomerAddressesController extends Controller
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
            'total' => 99,
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
     * @param  string   $customerAddressCode
     * @return Response
     */
    public function show($addressBookNo)
    {
        return [
            'data' => $this->getMockdata((int)$addressBookNo),
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
        $isNew = true;
        return [
            'data' => $this->getMockDataByRequest($request, $isNew),
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  string   $camelCase(pkName)
     * @return Response
     */
    public function update(Request $request, $addressBookNo)
    {
        return [
            'data' => $this->getMockDataByRequest($request),
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
            $data[] = $this->getMockData($i + $start);
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($addressBookNo)
    {
        return [
            'addressBookNo' => $addressBookNo,
            'name' => $addressBookNo === 0 ? "無印　良太" : "良品　計子",
            'name_memo' => $addressBookNo === 0 ? "ムジルシ　リョウタ" : "リョウヒン　ケイコ",
            'zip_code' => "170-8424",
            'address1' => "東京都",
            'address2' => "豊島区",
            'address3' => "東池袋４ー２６ー３",
            'address4' => $addressBookNo === 0 ? "ムジ・ネットビル７Ｆ 無印良品様方" : "無印良品ビル無印良品ビル無印良品ビル１０",
            'tel' => "03-3989-4191",
        ];
    }

    /**
     * お届け先の確認用データ
     */
    private function getMockDataByRequest(Request $request, bool $isNew = false)
    {
        $name = $request->input("customer_address.name", "");
        if ($isNew) {
            $name = $request->input("customer_address.familyName", "")."　".$request->input("customer_address.firstName", "");
        }
        $name_memo = $request->input("customer_address.name_memo", "");
        if ($isNew) {
            $nameKana = $request->input("customer_address.familyNameKana", "")."　".$request->input("customer_address.firstNameKana", "");
        }
        return [
            'addressBookNo' => $request->input("customer_address.addressBookNo", 199),
            'name' => $name,
            'name_memo' => $name_memo,
            'zip_code' => $request->input("customer_address.zip_code", ""),
            'address1' => $request->input("customer_address.address1", ""),
            'address2' => $request->input("customer_address.address2", ""),
            'address3' => $request->input("customer_address.address3", ""),
            'address4' => $request->input("customer_address.address4", ""),
            'care' => $request->input("customer_address.care", ""),
            'tel' => $request->input("customer_address.tel", ""),
        ];
    }
}
