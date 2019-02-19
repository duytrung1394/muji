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
            'total_review_count' => '10',
            'reviews' => [
                [
                    'item_img' => 'img-review-history-07.png',
                    'type' => 'モダールコットン',
                    'name' => 'ムースハイネックワンピース',
                    'date' => '2018/10/20',
                    'evaluation_count' => '4',
                    'buyerInfo' => [
                        'size' => 'M',
                        'height' => '165'
                    ],
                    'review_title' => '思ったより、、',
                    'review_comment' => 'とても着やすいです。無印のマタニティデニムを合わせるとお腹がすっぽり隠れるので重宝しています。',
                    'images' => [
                        '0',
                        '1',
                        '2'
                    ],
                    'total_comment' => '0',
                    'total_useful' => '0',
                ],
                [
                    'item_img' => 'img-review-history-06.png',
                    'type' => '麻綿平織',
                    'name' => 'ソファ',
                    'date' => '2018/08/15',
                    'evaluation_count' => '5',
                    'review_title' => '大変良い',
                    'review_comment' => '座りごごちがよかった。足が選べるので部屋に合わせることもできるものいい。',
                    'total_comment' => '0',
                    'total_useful' => '0',
                ]
            ]
        ];
    }
}