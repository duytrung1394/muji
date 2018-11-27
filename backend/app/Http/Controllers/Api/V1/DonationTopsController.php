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
            'data' => $this->getMultiMockData(),
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  string   $donationCode
     * @return Response
     */
    public function show($donationCode)
    {
        return [
            'data' => $this->getMockdata($donationCode),
        ];
    }

    /**
     * モックデータ取得用(募金一覧)
     */
    private function getMultiMockData()
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
                'title' => "無印良品の募金券",
                'description' => "日ごろ気にかかること。",
                'description1' => "世界で森林が減り、動物の住まいが追われていること。危機的な状況にあって苦しんでいる子どもたちがいること。ニュースでは流れなくなった被災地のこと。たくさんのことはできないかもしれないけれど、何かしたい。無印良品は、みなさんの気持ちを集めて届ける仕組みを考えました。",
                'description2' => "募金券は、どなたでもお買い物のように10円または100円単位で寄付ができる仕組みです。みなさんにしていただいた寄付はすべて、無印良品がまとめて所定の寄付先団体に届けます。",
                'back_ground_image' => 'https://www.muji.com/jp/donation/img/donation-top_header.png',
            ],
            'donations' => [
                [
                    'title' => '災害復興支援',
                    'items' => [
                        $this->getMockData('0299671000000'),
                        $this->getMockData('0299629000000'),
                        $this->getMockData('0299507000000'),
                        $this->getMockData('0299529000000')
                    ]
                ],
                [
                    'title' => '活動支援',
                    'items' => [
                        $this->getMockData('0299661000000'),
                        $this->getMockData('0299663000000'),
                        $this->getMockData('0299665000000'),
                        $this->getMockData('0299667000000')
                    ]
                ]
            ]
        ];
    }

    /**
     * モックデータを生成して取得(募金詳細)
     */
    private function getMockData($donationCode)
    {
        $data = [];
        switch ($donationCode){
            case '0299671000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/j-platform_05_640.png',
                    'title' => '北海道地震被災者支援',
                    'description' => '9月6日に北海道胆振地方中東部で発生した自身により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の講座を開設しました。',
                    'organization' => 'ジャパン・プラットホーム'
                ];
                break;
            case '0299629000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/j-platform_02_640.jpg',
                    'title' => '緊急災害復興支援',
                    'description' => 'ジャパン・プラットフォームは、国内外の災害被災地などに、1秒でも速く支援を届けます。',
                    'organization' => 'ジャパン・プラットホーム'
                ];
                break;
            case '0299507000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/j-platform_01_640.jpg',
                    'title' => '東日本大震災復興支援',
                    'description' => 'ジャパン・プラットフォームは、災害、紛争時の緊急・復興支援を支えています。',
                    'organization' => 'ジャパン・プラットホーム'
                ];
                break;
            case '0299529000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/momokaki_640.png',
                    'title' => '東日本大震災復興支援',
                    'description' => '被災地で力強く生きようとする孤児や遺児を共に支える育英会。',
                    'organization' => '桃・柿育英会'
                ];
                break;
            case '0299661000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/pinkribbon_640.png',
                    'title' => '乳がん啓発活動（ピンクリボン運動）支援',
                    'description' => '乳がんで悲しむ方をなくすため、ピンクリボン関連イベントやピンクリボンアドバイザー制度などを通じた啓発活動、がん検診などを実施しています。',
                    'organization' => '日本対がん協会・乳房健康研究会'
                ];
                break;
            case '0299663000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/iucn-j_640.jpg',
                    'title' => '絶滅の恐れがある生きものの保護活動支援',
                    'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。',
                    'organization' => 'IUCN-J（国際自然保護連合日本委員会）'
                ];
                break;
            case '0299665000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/kidsearthfund_640.jpg',
                    'title' => '絵画を通じた子ども支援',
                    'description' => '戦争や災害などで心に傷を負った世界中の子どもたちと絵を描くワークショップを行い、子どもたちが生きる力を取り戻す機会をつくっています。',
                    'organization' => '子供地球基金'
                ];
                break;
            case '0299667000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/tft_640.jpg',
                    'title' => '開発途上国の給食支援',
                    'description' => '先進国に住む私たちがヘルシーな食事をとると、飢餓で苦しむ開発途上国の子どもたちに給食をプレゼントできる仕組みで、双方の健康改善をめざしています。',
                    'organization' => 'TABLE FOR TWO'
                ];
                break;
            default :
                return [];
        }
        $data['donationCode'] = $donationCode;
        return $data;
    }
}
