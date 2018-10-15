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
        ];
    }
}
