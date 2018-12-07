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
            'data' => $this->getMockData()
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
        return [
            'data' => $this->getMockData()
        ];
        // return [
        //     'data'  => $this->getCustomerReviews(
        //         (int)$request->input('offset'),
        //         (int)$request->input('length')
        //     )
        // ];
    }

    /**
     * モックデータ: 商品一覧「もっと見る」のデータ.
     *
     * @return array
     */
    private function getCustomerReviews($offset, $length)
    {
        $reviews = [];
        $reviewTotal = 10;
        $isAllDataDisp = ($offset + $length) >= $reviewTotal;
        $end = $isAllDataDisp ? $reviewTotal : ($offset + $length);

        for ($i = $offset; $i < $end; $i++) {
            $reviews[] = $this->getMockCustomerReviews($offset, $length);
        }

        $customerReviewObj = [
            'customerReviews' => $reviews,
            'total' => $reviewTotal,
            'seeMoreButton' => !$isAllDataDisp,
            'sortFlg' => false
        ];

        return $customerReviewObj;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        return [
            'customer_reviews' => $this->getMockCustomerReviews(0,5),
            'user' => $user = [
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user name'
            ]
        ];
     }

    /**
     * モックデータ: Customer Reviews 「もっと見る」のデータ.
     */
    private function getMockCustomerReviews($offset, $length)
    {
        $customerReviews = [
        [
            'customer_review_code' => 1,
            'product' => 'ベーコンとチーズのキッシュ',
            'jancode' => '4550182028072',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user1',
            'title' => 'キッシュ美味しい',
            'star' => 2,
            'total_star' => 3.7,
            'review_total' => 3,
            'selected_flg' => true,
            'upload_date' => '1時間前',
            'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 2,
            'product' => 'チキンとほうれん草のキッシュ',
            'jancode' => '4550182028065',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user2',
            'title' => '気軽に解凍キッシュ',
            'star' => 4,
            'upload_date' => '1時間前',
            'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 3,
            'product' => 'オレンジピールクランチチョコ',
            'jancode' => '4550002873684',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user3',
            'title' => 'オレンジピールクランチチョコ、Goodです！',
            'star' => 3,
            'upload_date' => '2時間前',
            'detail_comment' => 'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 4,
            'product' => 'ポケットコイルスプリングマットレス・シングル',
            'jancode' => '4548718094844',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user4',
            'title' => '使ってます',
            'star' => 2,
            'upload_date' => '2時間前',
            'detail_comment' => '数年前に同タイプのアイテムを購入して使っています。ずっと調子がよいです。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 5,
            'product' => '無選別　おこげせんべい',
            'jancode' => '4547315318926',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user5',
            'title' => 'かみごたえ満点',
            'star' => 5,
            'upload_date' => '2018/11/13',
            'detail_comment' => '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
            'evaluations_comment_count' => 1,
            'evaluations_useful_count' => 100,
        ],
        [
            'customer_review_code' => 6,
            'product' => 'ベーコンとチーズのキッシュ',
            'jancode' => '4550182028072',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user6',
            'title' => 'キッシュ美味しい',
            'star' => 3,
            'upload_date' => '1時間前',
            'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 7,
            'product' => 'チキンとほうれん草のキッシュ',
            'jancode' => '4550182028065',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user7',
            'title' => '気軽に解凍キッシュ',
            'star' => 1,
            'upload_date' => '1時間前',
            'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 8,
            'product' => 'オレンジピールクランチチョコ',
            'jancode' => '4550002873684',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user8',
            'title' => 'オレンジピールクランチチョコ、Goodです！',
            'star' => 2,
            'upload_date' => '2時間前',
            'detail_comment' => 'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 9,
            'product' => 'ポケットコイルスプリングマットレス・シングル',
            'jancode' => '4548718094844',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user9',
            'title' => '使ってます',
            'star' => 3,
            'upload_date' => '2時間前',
            'detail_comment' => '数年前に同タイプのアイテムを購入して使っています。ずっと調子がよいです。',
            'evaluations_comment_count' => 0,
            'evaluations_useful_count' => 0,
        ],
        [
            'customer_review_code' => 10,
            'product' => '無選別　おこげせんべい',
            'jancode' => '4547315318926',
            'user_icon' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
            'user_name' => 'user10',
            'title' => 'かみごたえ満点',
            'star' => 5,
            'upload_date' => '2018/11/13',
            'detail_comment' => '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
            'evaluations_comment_count' => 1,
            'evaluations_useful_count' => 100,
        ]
    ];

     return array_splice($customerReviews, $offset, $length);
    }
}

