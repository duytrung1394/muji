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
            'data'  => $this->getMockData(),
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
            $data[] = $this->getMockData('delivery_code' . ($i + $start ));
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        $addressBookId = 1;
        return [
            [
                'mySelf' => true,
                'addressBookId' => $addressBookId,
                'naming' => '無印　花子',
                'zipCode' => '123-4567',
                'address1' => '東京都',
                'address2' => '渋谷区',
                'address3' => '宇田川町21-1',
                'address4' => '渋谷西武パーキング館　Ｂ1Ｆ',
                'telNo' => '01 - 2345 - 6789' 
            ],
            [
                'mySelf' => false,
                'addressBookId' => $addressBookId,
                'naming' => '無印 良太',
                'zipCode' => '123-4567',
                'address1' => '東京都',
                'address2' => '豊島区',
                'address3' => '南池袋1-28-1',
                'address4' => '西武池袋本店別館1～2Ｆ',
                'telNo' => '01 - 2345 - 6789'
            ],
            [
                'mySelf' => false,
                'addressBookId' => $addressBookId,
                'naming' => '無印 計子',
                'zipCode' => '123-4567',
                'address1' => '東京都',
                'address2' => '千代田区',
                'address3' => '丸の内2-7-2',
                'address4' => '丸の内ＪＰタワー3Ｆ',
                'telNo' => '01 - 2345 - 6789'
            ],
            [
                'mySelf' => false,
                'addressBookId' => $addressBookId,
                'naming' => '無印 良太',
                'zipCode' => '123-4567',
                'address1' => '東京都',
                'address2' => '豊島区',
                'address3' => '南池袋1-28-1',
                'address4' => '西武池袋本店別館1～2Ｆ',
                'telNo' => '01 - 2345 - 6789'
            ],
            [
                'mySelf' => false,
                'addressBookId' => $addressBookId,
                'naming' => '無印 計子',
                'zipCode' => '123-4567',
                'address1' => '東京都',
                'address2' => '千代田区',
                'address3' => '丸の内2-7-2',
                'address4' => '丸の内ＪＰタワー3Ｆ',
                'telNo' => '01 - 2345 - 6789'
            ],
        ];
    }
}