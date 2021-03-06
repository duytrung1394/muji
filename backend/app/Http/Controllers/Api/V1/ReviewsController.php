<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function history(Request $request)
    {
        return [
            'data'      => $this->getMockData()
        ];
    }

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData($offset, $length, $filter = null)
    {
        $reviews = [];
        $reviewTotal = $this->mockTotal;
        $getCount = ($offset == 0 && $length == 0) ? 5 : $length;
        
        $isAllDataDisp = ($offset + $getCount) > $reviewTotal;
        $end = $isAllDataDisp ? $reviewTotal : ($offset + $getCount);

        for ($i = $offset; $i < $end; $i++) {
            $reviews[] = $this->getMockData($i);
        }

        return $reviews;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($index = null)
    {
        return [
            'totalReviews' => 10,
            'itemDetail' => [
                [
                    'janCode' => '4550002674885',
                    'materialName' => 'モダールコットン',
                    'itemName' => 'ムースハイネックワンピース',
                    'itemImages' => 'img1',
                    'created' => '2018/10/20',
                    'star' => 4,
                    'wearInfo' => [
                        'size' => 'M',
                        'height' => 165
                    ],
                    'webCatalogTitle' => '思ったより、、',
                    'webCatalogDescription' => 'とても着やすいです。無印のマタニティデニムを合わせるとお腹がすっぽり隠れるので重宝しています。',
                    'images' => [
                        '0',
                        '1',
                        '2'
                    ],
                    'countComment' => 0,
                    'countUseful' => 0,
                ],
                [
                    'janCode' => '4549738369950',
                    'materialName' => '麻綿平織',
                    'itemName' => 'ソファ',
                    'itemImages' => 'img2',
                    'created' => '2018/08/15',
                    'star' => 5,
                    'wearInfo' => [
                        'size' => '',
                        'height' => ''
                    ],
                    'webCatalogTitle' => '大変良い',
                    'webCatalogDescription' => '座りごごちがよかった。足が選べるので部屋に合わせることもできるものいい。',
                    'countComment' => 0,
                    'countUseful' => 0,
                ]
            ]
        ];
    }
}