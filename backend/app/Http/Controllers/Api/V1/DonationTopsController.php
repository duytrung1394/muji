<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class DonationTopsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data' => $this->getMockdata(),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData()
    {
        return [
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ / 募金券',
                ],
            ],
            'title' => '募金',
            'article' => [
                'title' =>"タイトル",
                'description' =>"説明",
                'back_ground_image' => 'https://www.muji.com/jp/donation/img/donation-top_header.png',
            ],
            'donations' => [
                [
                    'title' => '災害復興支援',
                    'items' => [
                        [
                            'img' => '//www.muji.com/jp/donation/img/j-platform_05_640.png',
                            'title' => '北海道地震被災者支援',
                            'description' => '9月6日に北海道胆振地方中東部で発生した自身により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の講座を開設しました。',
                            'organization' => 'ジャパン・プラットホーム'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/j-platform_02_640.jpg',
                            'title' => '緊急災害復興支援',
                            'description' => 'ジャパン・プラットフォームは、国内外の災害被災地などに、1秒でも速く支援を届けます。',
                            'organization' => 'ジャパン・プラットホーム'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/j-platform_01_640.jpg',
                            'title' => '東日本大震災復興支援',
                            'description' => 'ジャパン・プラットフォームは、災害、紛争時の緊急・復興支援を支えています。',
                            'organization' => 'ジャパン・プラットホーム'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/momokaki_640.png',
                            'title' => '東日本大震災復興支援',
                            'description' => '被災地で力強く生きようとする孤児や遺児を共に支える育英会。',
                            'organization' => '桃・柿育英会'
                        ],
                    ]
                ],
                [
                    'title' => '活動支援',
                    'items' => [
                        [
                            'img' => '//www.muji.com/jp/donation/img/pinkribbon_640.png',
                            'title' => '乳がん啓発活動（ピンクリボン運動）支援',
                            'description' => '乳がんで悲しむ方をなくすため、ピンクリボン関連イベントやピンクリボンアドバイザー制度などを通じた啓発活動、がん検診などを実施しています。',
                            'organization' => '日本対がん協会・乳房健康研究会'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/iucn-j_640.jpg',
                            'title' => '絶滅の恐れがある生きものの保護活動支援',
                            'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。',
                            'organization' => 'IUCN-J（国際自然保護連合日本委員会）'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/kidsearthfund_640.jpg',
                            'title' => '絵画を通じた子ども支援',
                            'description' => '戦争や災害などで心に傷を負った世界中の子どもたちと絵を描くワークショップを行い、子どもたちが生きる力を取り戻す機会をつくっています。',
                            'organization' => '子供地球基金'
                        ],
                        [
                            'img' => '//www.muji.com/jp/donation/img/tft_640.jpg',
                            'title' => '開発途上国の給食支援',
                            'description' => '先進国に住む私たちがヘルシーな食事をとると、飢餓で苦しむ開発途上国の子どもたちに給食をプレゼントできる仕組みで、双方の健康改善をめざしています。',
                            'organization' => 'TABLE FOR TWO'
                        ],
                    ]
                ]
            ]
        ];
    }
}
