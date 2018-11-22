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
     * Display the specified resource.
     *
     * @param  string   $customerAddressCode
     * @return Response
     */
    public function show($customerAddressCode)
    {
        return [
            'item' => $this->getMockdata($customerAddressCode),
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
    public function update(Request $request, $customerAddressCode)
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
            $data[] = $this->getMockData($i + $start);
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($index)
    {
        return [
            'addressBookNo' => $index,
            'name' => $index === 0 ? "無印　良太" : "良品　計子",
            'zipCode' => "170-8424",
            'address1' => "東京都",
            'address2' => "豊島区",
            'address3' => "東池袋４ー２６ー３",
            'care' => $index === 0 ? "無印　良太" : "良品　計子",
            'address4' => $index === 0 ? "無印良品ビル" : "無印良品ビル無印良品ビル無印良品ビル１０",
            'telNo' => "03-3989-4191",
        ];
    }
}
