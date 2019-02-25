<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class AccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data' => $this->getMockData(''),
            'total' => 200,
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            'account_code'   => $code,
            'name'        => 'name_' . $code,
            'description' => 'description_' . $code,
            'memberguide_list' => [
                [
                    'src' => 'src1',
                    'sub' => 'お買い物でマイルが貯まる',
                    'title' => 'MUJIマイルサービス',
                    'text' => '貯まったマイルに応じて、お買い物に使えるMUJIショッピングポイントなどのプレゼントがもらえます。'
                ],
                [
                    'src' => 'src2',
                    'sub' => '最新情報　お買い得情報をお届け',
                    'title' => 'メールニュース',
                    'text' => '無印良品の新商品やキャンペーン、イベント等のお得な情報や最新ニュースをいち早くお届けします'
                ],
                [
                    'src' => 'src3',
                    'sub' => 'おめでとうの気持ちを込めて',
                    'title' => 'お誕生日特典',
                    'text' => '誕生月の買い物で翌月に500円分のMUJIショッピングポイントをプレゼント。誕生月に獲得したMUJIマイルは…'
                ],
                [
                    'src' => 'src4',
                    'sub' => '「無印良品週間」期間中は',
                    'title' => 'ご優待価格でお買い物',
                    'text' => '年数回の「無印良品週間」期間中は、ご優待価格でご購入いただけます。'
                ],
                [
                    'src' => 'src5',
                    'sub' => '対象カテゴリー5,000円以上のご購入で',
                    'title' => '配送無料',
                    'text' => '対象カテゴリー内の商品を税込5,000円以上お買い上げで、配送料無料にてお届けします。'
                ],
                [
                    'src' => 'src6',
                    'sub' => 'ネットストア限定',
                    'title' => 'ファクトリーアウトレット',
                    'text' => '季節商品、デザイン・仕様変更に伴う在庫処分を、ネットストア限定のお値打ち価格でご提供します。'
                ],
                [
                    'src' => 'src7',
                    'sub' => 'ネットストア限定',
                    'title' => 'いつでも5%OFF',
                    'text' => '単品で買うよりも約5％お得な、ネットストア限定のまとめ買いセットがご購入いただけます。'
                ],
                [
                    'src' => 'src8',
                    'sub' => 'ネット注文',
                    'title' => '店舗受け取りサービス',
                    'text' => 'ネットで注文して、お近くの店舗でお受け取り。お支払いは、店舗指定の決済方法が選べます。'
                ],
                [
                    'src' => 'src9',
                    'sub' => 'みんなの気持ちを届ける',
                    'title' => '無印良品の募金券',
                    'text' => 'どなたでもお買い物のように10円または100円単位で寄付ができる仕組みをご用意しました。'
                ],
            ],
            'passport' => [
                'caption' => 'MUJI passportアプリでさらにお得',
                'list' => [
                    [
                        'src' => 'src10',
                        'text'=> 'MUJI passportアプリを使って、お買い物をしたり、お店にチェックインするとMUJIマイルが貯まります。貯まったマイルでお買い物に使えるMUJIショッピングポイントなどのプレゼントがもらえます。'
                    ]
                ],
                'texts' => [
                    'MUJI.netメンバーがMUJI passportアプリをダウンロードすることで、ネットストアだけでなく、無印良品店舗でもMUJIショッピングポイントをご利用いただけるようになります。',
                    'MUJI passportアプリでは、貯まったMUJIマイルやMUJIショッピングポイントの確認・合算もできます。'
                ],
                'link_text' => 'MUJI passportについて',
            ],
            'other' => [
                'caption' => 'その他のMUJI.net メンバー限定メリット',
                'title' => 'ネットストアで便利な機能',
                'text' => '「マイページ」「お気に入り」などネットストアをもっと便利に使う機能をご利用いただけます。',
                'list' => [
                    'ご注文状況や購入履歴、MUJIマイル／MUJIショッピングポイント残高が確認できる「マイページ」',
                    '気になった商品やよく買う商品を登録できる「お気に入り」',
                    '配送先が選べる「アドレス帳」'
                ]
            ]
        ];
    }
}
