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
                ['url' => '/store', 'title' => 'お知らせ1'],
                ['url' => '/store', 'title' => 'お知らせ2'],
                ['url' => '/store', 'title' => 'お知らせ3'],
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

            'daily_choices' => [
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_02.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_03.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_04.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_05aw.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_06.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_07.jpg',['img_cap' => '']],
                ['img_src' => 'https://www.muji.com/jp/img/store/top/basicitems_08.jpg',['img_cap' => '']],
            ],
              'net_services' => [
                [
                  'img_src' => 'https://www.muji.com/jp/store/service/img/service_deliveryvan.png',
                  'img_sub' => '一定額以上の'."\n".'お買い上げで'."\n".'配送料無料','img_note' => '小型商品は税込5,000円以'."\n".'上、大型家具・家電は税込'."\n".'　150,000以上で、配送'."\n".'料無料'
                ],
                [
                  'img_src' => 'https://www.muji.com/jp/store/service/img/service_storage.png',
                  'img_sub' => 'ポリプロピレン'."\n".'衣装ケースなど'."\n".'配送料無料','img_note' => '対象商品が配送料無料にな'."\n".'りました'
                ],
                [ 'img_src' => 'https://www.muji.com/jp/store/service/img/service_deliveryvan02.png',
                  'img_sub' => '小型商品の'."\n".'配送料４９０円','img_note' => '配送料区分Aの商品の配送'."\n".'料が490円になりました'
                ],
                [
                  'img_src' => 'https://www.muji.com/jp/store/service/img/service_box.png',
                  'img_sub' => 'えらべる'."\n".'受取方法','img_note' => 'ご自宅への配送以外にも、'."\n".'店舗受取や、コンビニ受取をご'."\n".'利用いただけます'
                ],
                [
                  'img_src' => 'https://www.muji.com/jp/store/service/img/service_shirt_s.png',
                  'img_sub' => 'XS・XXL'."\n".'サイズ','img_note' => '店舗からのお取り寄せや、店'."\n".'舗受取も可能です'
                ],
                [
                  'img_src' => 'https://www.muji.com/jp/store/service/img/service_hanger_s.png',
                  'img_sub' => 'まとめ買い','img_note' => 'ケースでお届けするから'."\n".'5%お得'
                ],
            ],
        ];
    }
}
