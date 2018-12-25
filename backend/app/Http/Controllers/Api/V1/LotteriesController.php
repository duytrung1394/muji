<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class LotteriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            // 'data'  => $this->getMultiMockData( (int)$request->input('page') ),
            'data'  => $this->getMockData()
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  string   $lotteryCode
     * @return Response
     */
    public function show($lotteryCode)
    {
        return [
            'item' => $this->getMockdata($lotteryCode),
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
    public function update(Request $request, $lotteryCode)
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
    private function getMultiMockData()
    {
        // $data = [];
        // $start = ((int) $page - 1) * 10;

        // for ($i = 0; $i < 10; $i++) {
        //     $data[] = $this->getMockData('lottery_code' . ($i + $start ));
        // }

        return [
            $this->getMockData()
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        return [
            // 'lottery_code'   => $code,
            // 'name'        => 'name_' . $code,
            // 'description' => 'description_' . $code,
            'title' => '福袋2019',
            'info_data' => [
                'title' => 'ネットストア限定、福袋抽選販売',
                'description' => '毎年大好評の「福袋」,MUJI.netメンバーのみなさまへ、
                                        ネットストア限定の抽選販売を実施いたします。衣服雑貨。
                                        生活雑貨それぞれ、何が入っているかはお楽しみ。',
                'reception_period' => '2018年12月6日 (木) 午前11時~2018年12月12日 (水) 午前10時',
                'lettery_presentation' => '2018年12月13（木）に、当選の方のみにメールをお送りします。
                                            （落選の連絡はいたしません）。また、当選の場合に限り、2018年12月14日（金）
                                            中をめどに購入履歴にご注文内容が表示されます。',
                'delivery_date' => '2019年1月4日（金）　予定',
                'receiveing_period' => '2019年1月7日(月)',
                'payment_method' => '代金引換のみ（手数料なし）',
                'shipping_fee' => '無料',
                'frequently_questions' => '福袋について'
            ],
            'notes' => [
                [
                    'text' => '複数種類の福袋に、各１回ずつ、お申し込みが可能です。申し込み手続きは１種類ずつとなります。種類ごとにお申し込みください。',
                    'note_flg' => false
                ],
                [
                    'text' => 'お品物は、MUJI.netメンバーご本人（依頼主）の登録住所へお届けします。当選後のお届け先変更（転送）は承りできません。お申し込み前に、ご登録住所の確認をお願いします。',
                    'note_flg' => false
                ],
                [
                    'text' => 'お支払い方法は代金引換のみ（手数料なし）です。クレジットカード、楽天ID決済、Yahoo!ウォレット、dケータイ払いプラス、MUJIショッピングポイントおよびMUJI GIFTCARDはご利用になれません。',
                    'note_flg' => false
                ],
                [
                    'text' => '受付開始後にアクセスが集中し、ご注文の途中で画面が表示されずエラーとなる場合がございあMす。その際にはしばらく経ってから再度お申し込みください。',
                    'note_flg' => false
                ],
                [
                    'text' => '福袋には、処分品も含まれます。',
                    'note_flg' => false
                ],
                [
                    'text' => 'お申し込み時に応募受付のメールは送信されません。',
                    'note_flg' => false
                ],
                [
                    'text' => '特別価格でのご提供のため、お申し込み小屋当選後のキャンセル、種類の変更、お届け先やご指定日などの変更はお受けできません。また、商品不良以外のご返品もお受けできません。万一、商品不良が発生した場合、袋ごとのご返品または袋ごとの交換（異なる商品の場合あり）となります。',
                    'note_flg' => true
                ],
            ],
            'list_items' => [
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "before"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "before"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "done"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "done"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "end"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "end"
                ],
                [
                    'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                    'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                    'price' => '2,000',
                    'has_apply' => "previous"
                ],
            ]
        ];
    }
}