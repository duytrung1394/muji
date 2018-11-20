<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CustomerReviewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMultiMockData(
                (int)$request->input('offset'),
                (int)$request->input('length')
            ),
            'total' => 22,
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
     * @param  string   $customerReviewCode
     * @return Response
     */
    public function show($customerReviewCode)
    {
        return [
            'data' => $this->getMockdata($customerReviewCode),
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
    public function update(Request $request, $customerReviewCode)
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
    private function getMultiMockData($offset, $length)
    {
        $data = [];
        $total = 22;
        $isAllDataDisp = ($offset + $length) >= $total;
        $end = $isAllDataDisp ? $total : ($offset + $length);

        for ($i = $offset; $i < $end; $i++) {
            $data[] = $this->getMockData($i);
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($index)
    {
        switch ($index % 5){
        case 0:
            return [
                'customer_review_code' => $index,
                'product' => 'ベーコンとチーズのキッシュ',
                'jancode' => '4550182028072',
                'title' => 'キッシュ美味しい',
                'star' => 3,
                'upload_date' => '1時間前',
                'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
                'evaluations_comment_count' => 0,
                'evaluations_useful_count' => 0,
            ];
        case 1:
            return [
                'customer_review_code' => $index,
                'product' => 'チキンとほうれん草のキッシュ',
                'jancode' => '4550182028065',
                'title' => '気軽に解凍キッシュ',
                'star' => 3,
                'upload_date' => '1時間前',
                'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
                'evaluations_comment_count' => 0,
                'evaluations_useful_count' => 0,
            ];
        case 2:
            return [
                'customer_review_code' => $index,
                'product' => 'オレンジピールクランチチョコ',
                'jancode' => '4550002873684',
                'title' => 'オレンジピールクランチチョコ、Goodです！',
                'star' => 4,
                'upload_date' => '2時間前',
                'detail_comment' => 'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
                'evaluations_comment_count' => 0,
                'evaluations_useful_count' => 0,
            ];
        case 3:
            return [
                'customer_review_code' => $index,
                'product' => 'ポケットコイルスプリングマットレス・シングル',
                'jancode' => '4548718094844',
                'title' => '使ってます',
                'star' => 4,
                'upload_date' => '2時間前',
                'detail_comment' => '数年前に同タイプのアイテムを購入して使っています。ずっと調子がよいです。',
                'evaluations_comment_count' => 0,
                'evaluations_useful_count' => 0,
            ];
        case 4:
            return [
                'customer_review_code' => $index,
                'product' => '無選別　おこげせんべい',
                'jancode' => '4547315318926',
                'title' => 'かみごたえ満点',
                'star' => 5,
                'upload_date' => '2018/11/13',
                'detail_comment' => '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
                'evaluations_comment_count' => 1,
                'evaluations_useful_count' => 100,
            ];
        default:
            return [];
        }
    }
}

