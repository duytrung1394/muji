<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CustomerReviewsController extends Controller
{
    private $mockTotal = 23;
    private $userTotal = 5;
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
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
     * Display a listing of the resource(ユーザ別一覧).
     *
     * @return Response
     */
    public function indexByUser(Request $request)
    {
        $filter = [
            'nickname' => $request->input('nickname')
        ];
        return [
            'data'      => $this->getMultiMockData(
                (int)$request->input('offset'),
                (int)$request->input('length'),
                $filter
            ),
            'total'     => $this->mockTotal,
            'sortFlg'   => false
        ];
    }

    /**
     * Display a listing of the resource(フォロー中のユーザー一覧).
     *
     * @return Response
     */
    public function indexByFollowing(Request $request)
    {
        return [
            'data'      => $this->getMultiMockData(
                (int)$request->input('offset'),
                (int)$request->input('length')
            ),
            'total'     => $this->mockTotal,
            'sortFlg'   => false
        ];
    }

    /**
      * 詳細
      *
      * @return \Illuminate\Http\Response
      */
     public function show($reviewCode)
     {
         return [
             'data' => $this->getMockData((int)$reviewCode),
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
     * Remove some resources from storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function getReportMock($itemCode,$commentCode)
    {
        return [
            'data' => [
                'item' => $this->getMockData($itemCode),
                'comment' => $this->getCommentData($commentCode)
            ]
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
        switch ($index % 6){
        case 0:
            return [
                'customer_review_code' => $index,
                'product' => 'オーガニックコットンフランネルスタンドカラーシャツ',
                'jancode' => '4550002750077',
                'title' => 'シルエット良好！',
                'star' => 4,
                'upload_date' => '1分前',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => 'スタントカラーを定番のカラーシャツと同じサイズ感で着れるものが欲しかったのでありがたい一品。ネイビーもほしいです。胴回りのシルエットがトレンド感あって素敵です。',
                'evaluations_comment_count' => 0,
                'count_helpful' => 0,
                'images'=>[
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11c9ae5e.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11ccde18.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11cdfcb6.jpg'],
                ],
                'tag_imgs' => [],
                'comments' => $this->getCommentsMockData(),
            ];
        case 1:
            return [
                'customer_review_code' => $index,
                'product' => 'ベーコンとチーズのキッシュ',
                'jancode' => '4550182028072',
                'title' => 'キッシュ美味しい！！',
                'star' => 3,
                'upload_date' => '1時間前',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
                'evaluations_comment_count' => 0,
                'count_helpful' => 2,
                'images'=>[
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11c9ae5e.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11ccde18.jpg'],
                    [ 'img_src'=>'https://review-api.muji.com/_var/images/review-comment/31167/5c05d11cdfcb6.jpg'],
                ],
                'tag_imgs' => [
                    '4550182028072',
                    '4550182028072',
                    '4550182028072',
                    '4550182028072',
                    '4550182028072'
                ],
                'comments' => $this->getCommentsMockData(),
            ];
        case 2:
            return [
                'customer_review_code' => $index,
                'product' => 'チキンとほうれん草のキッシュ',
                'jancode' => '4550182028065',
                'title' => '気軽に解凍キッシュ',
                'star' => 3,
                'upload_date' => '1時間前',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
                'evaluations_comment_count' => 0,
                'count_helpful' => 0,
                'images'=>[],
                'tag_imgs' => [],
                'comments' => [],
            ];
        case 3:
            return [
                'customer_review_code' => $index,
                'product' => 'オレンジピールクランチチョコ',
                'jancode' => '4550002873684',
                'title' => 'オレンジピールクランチチョコ、Goodです！',
                'star' => 4,
                'upload_date' => '2時間前',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => 'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
                'evaluations_comment_count' => 0,
                'count_helpful' => 0,
                'images'=>[],
                'tag_imgs' => [],
                'comments' => $this->getCommentsMockData(),
            ];
        case 4:
            return [
                'customer_review_code' => $index,
                'product' => 'ポケットコイルスプリングマットレス・シングル',
                'jancode' => '4548718094844',
                'title' => '使ってます',
                'star' => 4,
                'upload_date' => '2時間前',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => '数年前に同タイプのアイテムを購入して使っています。ずっと調子がよいです。',
                'evaluations_comment_count' => 0,
                'count_helpful' => 0,
                'tag_imgs' => [],
                'comments' => $this->getCommentsMockData(),
            ];
        case 5:
            return [
                'customer_review_code' => $index,
                'product' => '無選別　おこげせんべい',
                'jancode' => '4547315318926',
                'title' => 'かみごたえ満点',
                'star' => 5,
                'upload_date' => '2018/11/13',
                'review_count' => '9',
                'rating_count' => '6',
                'detail_comment' => '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
                'evaluations_comment_count' => 1,
                'count_helpful' => 100,
                'images' => [],
                'tag_imgs' => [],
                'comments' => $this->getCommentsMockData(),
            ];
        default:
            return [];
        }
    }

    private function getCommentData($index){
        $commentList = [
            'スタントカラーを定番のカラーシャツと同じサイズ感で着れるものが欲しかったのでありがたい一品。ネイビーもほしいです。胴回りのシルエットがトレンド感あって素敵です。',
            '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
            '数年前に同タイプのアイテムを購入して使っています。ずっと調子がよいです。',
            '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
        ];

        return $commentList[$index];
    }

    /**
     * レビューコメントのモックデータ
     */
    private function getCommentsMockData()
    {
        $comments = [
            [
                'comment_code' => 1,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user1',
                'comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            ],
            [
                'comment_code' => 2,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user2',
                'comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            ],
            [
                'comment_code' => 3,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user3',
                'comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            ],
            [
                'comment_code' => 4,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user4',
                'comment' => '気軽に解凍して食べられるキッシュなので、時間のない時に重宝します。食のサポート品として冷凍庫に入れておいています。',
            ],
            [
                'comment_code' => 5,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user5',
                'comment' => 'コーヒーと一緒にいただいて、気分リフレッシュに最適です。ブレイクにぴったり',
            ],
            [
                'comment_code' => 6,
                'user_image' => 'https://www.muji.com/jp/store/review/img/avatar_default.png',
                'user_name' => 'user6',
                'comment' => '堅くてたくさん噛めてよいです。かみごたえもある上に味もほどよい塩加減。おいしいです。全店舗に置いてほしいくらいです！',
            ]
        ];

        return $comments;
    }
}