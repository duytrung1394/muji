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
        //$data = $this->getMultiMockData(0, 5);
        $data = $this->getMultiMockData((int)$request->input('page'));
        return [
            'data'  => $data
        ];
    }

    /**
     * Display a listing of the resource(ユーザ別一覧).
     *
     * @return Response
     */
    public function indexByUser(Request $request)
    {
        $data = $this->getMultiMockDataByUser(
            (int)$request->input('page'),$request->input('nickname')
        );
        return [
            'data'  => $data
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
             'data' => ['isDetail' => true],
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
     * Customer Review(もっと見る).
     *
     * @return Response
     */
    public function getCustomerReviewsSeeMore(Request $request)
    {
        $data = $this->getMultiMockData(
                (int)$request->input('offset'),
                (int)$request->input('length')
        );
        \Log::info( print_r($data,true));
        return [
            'data'  => $data
        ];
    }

    /**
     * ユーザ別リストデータ取得
     *
     * @return array
     */
    private function getMultiMockDataByUser($page = 1, $nickname)
    {
        return getMultiMockData($aoge);
    }

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData($page = 1)
    {
        \Log::info("page: " . $page);
        $reviews = [];
        $reviewTotal = 23;
        $offset = 0;
        $length = $page * 5;
        $isAllDataDisp = ($offset + $length) > $reviewTotal;
        $end = $isAllDataDisp ? $reviewTotal : ($offset + $length);

        
        \Log::info( print_r($offset,true));
        \Log::info( print_r($end,true));

        for ($i = $offset; $i < $end; $i++) {
            $reviews[] = $this->getMockData($i);
        }

        $data = [
            'customer_reviews' => $reviews,
            'total' => $reviewTotal,
            'isShowSeeMore' => !$isAllDataDisp,
            'sortFlg' => false
        ];

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($index)
    {
        switch ($index % 6){
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
                'images'=>[
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11c9ae5e.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11ccde18.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11cdfcb6.jpg'],
                ],
            ];
        case 1:
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
                'images'=>[],
            ];
        case 2:
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
                'images'=>[],
            ];
        case 3:
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
                'images'=>[],
            ];
        case 4:
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
        case 5:
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
                'images'=>[],
            ];
        default:
            return [];
        }
    }
}

