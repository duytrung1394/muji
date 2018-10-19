<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class TopsController extends Controller
{
    /**
     * Display Top.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'item' => $this->getMockdata(),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        return [
            'notices' => [
                ['url' => '/store', 'title' => '・「北海道地震被災者支援」募金を開始しました。'],
                ['url' => '/store', 'title' => '・「台風２４号」の影響による一部地域での配送遅延について'],
                ['url' => '/store', 'title' => '・「平成３０年北海道胆振東部地震」による一部地域での配送停止・遅延について'],
            ],
            'feature_image' => 'https://www.muji.com/jp/img/panel/main/ryohinweek_pc.png',
            'features' => [
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/c18083101_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/c18083101_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/181003_ginza_640.png'],
                ['img_src' => 'https://www.muji.com/jp/img/store/panel/flannel2018_640.png'],
            ],
            'new_items' => [
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10901_640_180928.jpg',
                    'title' => '衣料品 新商品一覧',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10909_640_181005.jpg',
                    'title' => '生活雑貨 新商品一覧',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s10905_640_181005.jpg',
                    'title' => '食品 新商品一覧',
                ],
            ],
            'limited_items' => [
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s000051065_640.jpg',
                    'title' => '衣料品 期間限定価格一覧',
                    'description' => '婦人綿混撥水トレンチ・ステンカラーコート／デニムジャケット最大2,000円OFF など',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/ogcsTowel2_640.jpg',
                    'title' => '生活雑貨 期間限定価格一覧',
                    'description' => '対象のタオル2点以上で15％OFF など',
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/img/store/panel/s3005103_640.jpg',
                    'title' => '食品 期間限定価格一覧',
                    'description' => 'レトルトカレー3点以上で15％OFF など',
                ],
            ],
            'important_notices' => [
                ['date' => '2018.09.14', 'message' => '重要なお知らせ1........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ2........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ3........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
            ],
            'net_services' => [
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_deliveryvan.png',
                    'img_sub0' => "一定額以上の",
                    'img_sub1' => "お買い上げで",
                    'img_sub2' => "配送料無料",
                    'img_note' => '小型商品は税込5,000円以上、大型家具・家電は税込150,000以上で、配送料無料'
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_storage.png',
                    'img_sub0' => "ポリプロピレン",
                    'img_sub1' => "衣装ケースなど",
                    'img_sub2' => "配送料無料",
                    'img_note' => '対象商品が配送料無料になりました'
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_deliveryvan02.png',
                    'img_sub0' => "",
                    'img_sub1' => "",
                    'img_sub2' => '小型商品の',
                    'img_sub3' => '配送料４９０円',
                    'img_note' => '配送料区分Aの商品の配送料が490円になりました'
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_box.png',
                    'img_sub0' => "",
                    'img_sub1' => "",
                    'img_sub2' => 'えらべる',
                    'img_sub3' => '受取方法',
                    'img_note' => 'ご自宅への配送以外にも、店舗受取や、コンビニ受取をご利用いただけます'
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_shirt_s.png',
                    'img_sub0' => "",
                    'img_sub1' => "",
                    'img_sub2' => 'XS・XXL',
                    'img_sub3' => 'サイズ',
                    'img_note' => '店舗からのお取り寄せや、店舗受取も可能です'
                ],
                [
                    'img_src' => 'https://www.muji.com/jp/store/service/img/service_hanger_s.png',
                    'img_sub0' => '',
                    'img_sub1' => '',
                    'img_sub2' => 'まとめ買い',
                    'img_note' => 'ケースでお届けするから5%お得'
                ],
            ],
        ];
    }
}
