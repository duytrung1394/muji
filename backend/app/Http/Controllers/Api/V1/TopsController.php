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
     * From MUJI(もっと見る).
     *
     * @return Response
     */
    public function getFromMujis(Request $request)
    {
        return [
            'data'  => $this->getMockFromMujis(
                (int)$request->input('offset'),
                (int)$request->input('length')
            )
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
            'category_list' => [
                [
                    'category_title' => '衣料品',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002674335_01_95.jpg',
                            'title' => '婦人ウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738822431_01_95.jpg',
                            'title' => '婦人インナーウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002277819_01_95.jpg',
                            'title' => '紳士ウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002612801_95.jpg',
                            'title' => '紳士インナーウェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738463351_95.jpg',
                            'title' => '靴下',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738777656_95.jpg',
                            'title' => '靴',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738175360_95.jpg',
                            'title' => 'バッグ',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002626457_01_95.jpg',
                            'title' => '服飾雑貨',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002378257_01_95.jpg',
                            'title' => 'MUJI Labo婦人',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002061869_95.jpg',
                            'title' => 'MUJI Labo紳士',
                        ],
                    ],
                ],
                [
                    'category_title' => '子供・マタニティ',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002012793_95.jpg',
                            'title' => 'ベビー（80-100cm）',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002205980_95.jpg',
                            'title' => 'キッズ（110-150cm）',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002571702_01_95.jpg',
                            'title' => 'マタニティ・新生児',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4934761364056_95.jpg',
                            'title' => '子供用品・家具・三輪車',
                        ],
                    ],
                ],
                [
                    'category_title' => '家具・インテリア・家電',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315874859_95.jpg',
                            'title' => '収納家具',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4934761179391_95.jpg',
                            'title' => 'ユニットシェルフ',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315253586_95.jpg',
                            'title' => '収納用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738996446_95.jpg',
                            'title' => '小物収納用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315901982_95.jpg',
                            'title' => 'テーブル・チェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549337035393_95.jpg',
                            'title' => 'デスク・チェア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548718013180_95.jpg',
                            'title' => 'THONET',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548076606383_95.jpg',
                            'title' => 'REAL FURNITURE',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315256440_95.jpg',
                            'title' => 'ベッド',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549337288317_95.jpg',
                            'title' => '布団・寝具',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549337408135_95.jpg',
                            'title' => 'ソファ',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002422646_95.jpg',
                            'title' => 'ラグ・クッション・スリッパ',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738923169_95.jpg',
                            'title' => 'カーテン・ブラインド',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002405120_95.jpg',
                            'title' => 'インテリア用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315236657_95.jpg',
                            'title' => '家電・照明',
                        ],
                    ],
                ],
                [
                    'category_title' => 'ヘルス＆ビューティー',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548076448334_95.jpg',
                            'title' => 'スキンケア用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002124960_02_95.jpg',
                            'title' => 'メイクアップ用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738970286_95.jpg',
                            'title' => 'ヘアケア',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738380078_95.jpg',
                            'title' => 'ボディケア・入浴剤',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315294237_95.jpg',
                            'title' => 'エッセンシャルオイル・アロマポット',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738304425_95.jpg',
                            'title' => 'ポーチ・小分け容器',
                        ],
                    ],
                ],
                [
                    'category_title' => '雑貨・日用品',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549337083264_95.jpg',
                            'title' => '食器',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548718428342_95.jpg',
                            'title' => 'キッチン用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738979517_95.jpg',
                            'title' => 'タオル・バス・トイレ用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315915620_95.jpg',
                            'title' => 'ランドリー・掃除用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315095087_95.jpg',
                            'title' => '文房具',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548718782666_95.jpg',
                            'title' => 'アルバム',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4945247467604_95.jpg',
                            'title' => '本・BGM',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4548076281856_95.jpg',
                            'title' => '自転車',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549337668669_95.jpg',
                            'title' => 'トラベル用品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315892365_95.jpg',
                            'title' => 'Found MUJI',
                        ],
                    ],
                ],
                [
                    'category_title' => '食品',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738359494_95.jpg',
                            'title' => 'レトルト・調味料',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550182028126_95.jpg',
                            'title' => '冷凍食品',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4547315554799_95.jpg',
                            'title' => '製菓材料',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002873851_95.jpg',
                            'title' => '菓子',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4549738968450_95.jpg',
                            'title' => '飲料',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/4550002787677_95.jpg',
                            'title' => '食の基本',
                        ],
                    ],
                ],
                [
                    'category_title' => 'その他',
                    'items' => [
                        [
                            'img_src' => 'https://img.muji.net/img/item/0280001008597_95.jpg',
                            'title' => '花・グリーン',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/item/0280001003843_95.jpg',
                            'title' => '産地直送',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/store/camp/norikura_400.jpg',
                            'title' => 'キャンプ場',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/store/mujisupport/support_400.jpg',
                            'title' => 'MUJI SUPPORT',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/store/housevision/housevision_400.jpg',
                            'title' => 'MUJI HOUSE VISION',
                        ],
                        [
                            'img_src' => 'https://img.muji.net/img/store/ie/kinoie_400.jpg',
                            'title' => '家',
                        ],
                    ],
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
            'from_mujis' => $this->getMockFromMujis(0, 10)
        ];
    }

    /**
     * モックデータ: from MUJI 「もっと見る」のデータ.
     */
    private function getMockFromMujis($offset, $length)
    {
        $fromMujis = [
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9938_20181003124221_8a4b2a4e9b7b41a46f5fd20726e03e53_D.png',
                'title' => '世界旗艦店「無印良品 銀座」 が、2019年4月4日（木）に開店します',
                'date' => '2018年10月03日',
                'is_new' => true

            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10131_20181016093215_eb923aea1cbbae5036cf3feed59733de_D.jpg',
                'title' => '新商品】こども食器・木製椀・小',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10130_20181016092721_7f7de3ab0d44516d1d5065aee2d7d190_D.jpg',
                'title' => '【新商品】四隅の広がらないこたつふとん',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg',
                'title' => '【新商品】ヤクウール大判マルチケープストール',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/8994_20180801130427_a36fbc8d3b16c9b2b3009010e3331498_D.jpg',
                'title' => '無印良品、Café＆Meal MUJI、イデーで、いっしょにはたらく仲間を募集しています。',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10128_20181015192131_e646d9d8ac2b31d0d7997b90de6622be_D.jpg',
                'title' => '【新商品】するめいかのおつまみ各種',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10127_20181015191830_dfdc807430e1c7eb5301b6263e08b97a_D.jpg',
                'title' => '【MUJI meets IDÉE】PUUF＆MINI PUUF特集',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10126_20181015190634_ad6a6f146e3b47d4a4b2acd597f43f5c_D.jpg',
                'title' => '【無印良品の理由】洗えるウールタンクトップ',
                'date' => '2018年10月16日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10119_20181015113601_ce5596eca716d15645f69db29800ac53_D.jpg',
                'title' => '【再販します】ポリエチレン湯たんぽ',
                'date' => '2018年10月15日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10117_20181015112747_46dbd3a873618b2ded965b18dc9aa0a5_D.jpg',
                'title' => '【毎日使うものから、安く】キッズ・ベビー用の「やわらか裏毛オーガニックコットン混パーカー」の価格を見直しました。',
                'date' => '2018年10月15日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10118_20181015113143_decf540a5455ce6efca9828b3138a9d4_D.jpg',
                'title' => '【新商品】萬古焼ポット',
                'date' => '2018年10月15日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10093_20181012164317_71ab5f7ca77537764bf7047afbcaba59_D.jpg',
                'title' => 'Found MUJI】#287 茶館(チャカン)',
                'date' => '2018年10月15日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10092_20181012164149_36fab22a20df37134d6cd5af41030269_D.jpg',
                'title' => '【無印良品の理由】スーパーストレッチ産後もはけるレギンスパンツ',
                'date' => '2018年10月15日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10089_20181012163451_3d1d1574fcea6ab94e1b2825e1e0611a_D.jpg',
                'title' => '【先行予約スタート】超音波アロマディフューザー・大（加湿機能付）',
                'date' => '2018年10月13日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10083_20181012114905_b7eac41ac4347fdd6bd3eb91a2abc342_D.jpg',
                'title' => '【新商品】グレー羽毛掛ふとん・二層式',
                'date' => '2018年10月12日',
                'is_new' => true
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10072_20181012101502_6629b8847df88f6f272c12b223f15c47_D.jpg',
                'title' => '【Café&amp;Meal MUJI、Café MUJI】紫芋のタルト 発売中です',
                'date' => '2018年10月12日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10069_20181011151051_cbafac6e32ac7527b457e58dcbc14c2d_D.jpg',
                'title' => '【期間限定価格】今だけ対象商品がお買い得',
                'date' => '2018年10月12日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10061_20181010191312_c6a59ab0d8bdb7e29ddbb6c00065ce2e_D.jpg',
                'title' => '「の、香り」アロマディフューザー・エッセンシャルオイル特集',
                'date' => '2018年10月12日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10062_20181011100229_b58e1ccca1ba64318f6ccdc38734fd1c_D.jpg',
                'title' => '【この時期のおすすめ】ごぼうと九条ねぎのきんぴら 柚子風味 （冷凍食品）',
                'date' => '2018年10月11日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10060_20181010191022_a18025ac2030b92462f1c1a5c5260163_D.png',
                'title' => '【無印良品の理由】足なり直角 裏シルク混靴下',
                'date' => '2018年10月11日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10046_20181010111136_a79d6c623a03b55a87732a6bab2af5d0_D.jpg',
                'title' => '【毎日使うものから、安く】「ヌメ革バックルレスベルト」の価格を見直しました。',
                'date' => '2018年10月11日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10045_20181009172406_6563bce4d05404b8870a2e303c103278_D.jpg',
                'title' => '【毎日使うものから、安く】ウール混ブレザーの価格を見直しました。',
                'date' => '2018年10月10日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10044_20181009171915_8b5da8735a53b5cccd8126334b70bef4_D.jpg',
                'title' => '【無印良品の理由】オーガニックコットン和晒しハンカチ',
                'date' => '2018年10月10日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10031_20181008175943_491c059de8d4ed5e45b9e2fc760583b9_D.jpg',
                'title' => '【くらしの良品研究所コラム】路面電車が街を変える',
                'date' => '2018年10月10日'
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10029_20181008175431_b359a497d546b80fd9688e94c2399c78_D.jpg',
                'title' => '【無印良品の理由】首のチクチクをおさえた洗えるタートルネック',
                'date' => '2018年10月09日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10015_20181008141305_d4500f689a94ec10ddb735050afda1b9_D.jpg',
                'title' => '【無印良品の理由】オーガニックコットンスーパーストレッチデニムスキニー・ボタン外付（マタニティ）',
                'date' => '2018年10月09日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10011_20181008134447_43c820436716f4401c6f5f364269da2b_D.jpg',
                'title' => '【新商品】スケジュール帳（2018年12月始まり）',
                'date' => '2018年10月08日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10010_20181008125240_fee098877bc2da1861561a33c476e3ba_D.jpg',
                'title' => '【新商品】秋色の実と花',
                'date' => '2018年10月08日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/10009_20181008124602_75f53d2a9ceb2ecbb53a55a0751e5e9d_D.jpg',
                'title' => '【毎日使うものから、安く】「メリノウール洗えるハイゲージ」の価格を見直しました。',
                'date' => '2018年10月08日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9990_20181005190627_8030f37ac306dcaf41d1f2476ed317e1_D.jpg',
                'title' => '【この時期のおすすめ】どちらからでも留められるお名前欄付き傘',
                'date' => '2018年10月08日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9984_20181005141328_eaf317d1c5460e4886fe8a50e16c10d3_D.jpg',
                'title' => '【新商品】竹の繊維を使用したティシュー',
                'date' => '2018年10月08日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9983_20181005141124_4584802328ae84d7fb1d1cc237aab963_D.png',
                'title' => '【無印良品の家】10/20（土）・21（日）に全国一斉見学会を開催します。',
                'date' => '2018年10月07日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9967_20181004181050_a31e98aa0f015462e38ba911f3e28924_D.jpg',
                'title' => '【無印良品の家】モデルハウスご来場でステッカープレゼント',
                'date' => '2018年10月06日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9969_20181004181854_c69d3f4da917302aed88934dc1fd7133_D.jpg',
                'title' => '【Café&amp;Meal MUJI、Café MUJI】季節のぶどうのパフェ',
                'date' => '2018年2018年10月05日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9970_20181005090425_e81963340229d307e5c30962b0856fad_D.jpg',
                'title' => '【無印良品の理由】折りたたみ歯ブラシ・ケース付',
                'date' => '2018年10月05日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9949_20181003180325_aa95f4edc672843058600d8d6a771bf3_D.jpg',
                'title' => '【愛知】無印良品 MUJI com エスカ オープン',
                'date' => '2018年10月05日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9948_20181003180152_6ac40cc758666c5a97ffc47865f946fc_D.jpg',
                'title' => '【無印良品の理由】ウェルダーレインコート・フリーカット',
                'date' => '2018年10月04日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9947_20181003175947_b2dcfbb2329404a20d39ead81bb3a5da_D.jpg',
                'title' => '【新商品】くるくるたためるネックピロー',
                'date' => '2018年10月04日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9946_20181003175359_f78b099e4a77643696e827ce533e7bd3_D.jpg',
                'title' => '【無印良品の理由】スーパーストレッチアンクル丈レギンスパンツ',
                'date' => '2018年10月04日',
                'is_new' => false
            ],
            [
                'img_src' => '//img.muji.net/passport/img/app/news/9930_20181002194057_8dc1ab34864fd21d3ee6fcf1a946b64b_D.jpg',
                'title' => '【無印良品の理由】足なり直角 口ゴムなしドット柄ショートソックス',
                'date' => '2018年10月04日',
                'is_new' => false
            ]
        ];

        return array_splice($fromMujis, $offset, $length);
    }
}
