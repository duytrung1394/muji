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
            'data'      => $this->getMultiMockData(
                (int)$request->input('offset'),
                (int)$request->input('length')
            ),
            'total'     => $this->mockTotal,
            'sortFlg'   => false,
            'userTotal' => $this->userTotal,
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
    private function getMockData($index)
    {
        // switch ($index % 6){
        // case 0:
            return [
                'total_review_count' => '10',
                'reviews' => [
                    [
                        'item_img' => 'img-review-history-07.png',
                        'type' => 'モダールコットン',
                        'name' => 'ムースハイネックワンピース',
                        'date' => '2018/10/20',
                        'evaluation_count' => '4',
                        'size' => 'M',
                        'height' => '165cm',
                        'review_title' => '思ったより、、',
                        'review_comment' => 'とても着やすいです。無印のマタニティデニムを合わせるとお腹がすっぽり隠れるので重宝しています。',
                        'img1' => 'img-review-history-01.png',
                        'img2' => 'img-review-history-02.png',
                        'img3' => 'img-review-history-03.png',
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
                    ],
                ],
            ];    
        // default:
        //     return [];
        }
    }
}
