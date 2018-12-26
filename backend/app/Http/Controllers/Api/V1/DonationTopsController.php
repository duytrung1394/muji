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
            'data' => $this->getMockData($donationCode),
            'links' => [
                [
                    'path' => '/store',
                    'name' => '無印良品トップ',
                ],
                [
                    'path' => '/store/cmdty/donation',
                    'name' => '募金券',
                ],
            ],
        ];
    }

    /**
     * お支払い方法の選択.
     *
     * @param  string   $donationCode
     * @param  string   $numberOfUnits
     * @return Response
     */
    public function showPayment($donationCode, $numberOfUnits)
    {
        return [
            'data' => $this->getMockPaymentData($donationCode, $numberOfUnits),
        ];
    }

    /**
     * MUJI GIFT CARD情報取得.
     *
     * @return Response
     */
    public function getGiftcard(Request $request)
    {
        return [
            'data' => $this->getMockGiftcard(),
        ];
    }

    /**
     * 寄付内容の確認
     *
     * @return Response
     */
    public function confirm(Request $request)
    {
        return [
            'data' => $this->getMockConfirmData(),
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
                    'name' => '無印良品トップ',
                ],
                [
                    'name' => '募金券',
                ],
            ],
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
                    'organization' => 'ジャパン・プラットホーム',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '788,820',
                    'total_people' => '2,339',
                ];
                break;
            case '0299629000000':
                $data =
                [
                    'img' => 'https://img.muji.net/img/item/0299629000000_1260.jpg',
                    'title' => '募金券「緊急災害復興支援」',
                    'ten_bill' => '10円券',
                    'one_hundred_bill' => '100円券',
                    'price' => '10', 
                    'total_good' => '15',
                    'sub_description' => 'ジャパン・プラットフォームの「緊急災害復興支援」に寄付することができます。',           
                    'description' => 'ジャパン・プラットフォームは、国内外の災害被災地などに、1秒でも速く支援を届けます。',
                    'organization' => 'ジャパン・プラットホーム',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '352,340',
                    'total_people' => '4,003',
                    'organizations'=>[
                       [ 'title' => 'ジャパン・プラットフォームについて',
                        'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img01.jpg',
                        'description' =>  'ジャパン・プラットフォームは、国内外の災害被災地などに、1秒でも速く支援を届けます。',
                        ],
                        [ 'title' => 'ジャパン・プラットフォームについて',
                        'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img01.jpg',
                        'description' =>  'ジャパン・プラットフォームは、国内外の災害被災地などに、1秒でも速く支援を届けます。',
                        ],
                    ],
                    'activities' =>[
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                        [
                            'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img02.jpg',
                            'title' => '想いを現地に伝えるために',
                            'description' => '緊急災害時、多くの人が抱える「助けたい」「何かしたい」という想いを世界各地に届けます。支援のプロであるNGOが、スピーディに支援を行います。',
                        ],
                    ],
                    'messages' =>[
                        [
                        'organization' => 'NPO法人　ジャパン・プラットフォーム',
                        'position' => '緊急対応部 部長',
                        'name' => '柴田裕子（しばたゆうこ）さん',
                        'img' => 'https://img.muji.net/img/store/donation/j-platform_02/activity_img08.jpg',
                        'description' => '世界でも日本国内でも、NGOによる支援を必要とする災害が後を絶ちません。いつ起きるか予測できない災害に対してできるだけ迅速に、
                        かつ質の高い最適な支援を行うためには、日頃からの備えが必要不可欠です。ジャパン・プラットフォームでは、支援を必要としている方々と支援してくださる方々の架け橋として、
                        この募金を大切に活用し、1秒でも速く1人でも多くの人へ、現地のニーズにもとづく支援を行ってまいります。'
                        ]
                    ],
                    'other_donations' =>[
                        [
                            'donationCode' => '0299629000000',
                            'img' => 'https://img.muji.net/img/item/0299507000000_400.jpg',
                            'title' => '東日本大震災復興支援',
                            'description' => 'ジャパン・プラットホーム',
                        ],
                        [
                            'donationCode' => '0299529000000',
                            'img' => 'https://img.muji.net/img/item/0299529000000_400.jpg',
                            'title' => '東日本大震災復興支援',
                            'description' => '桃・柿育英会',
                        ],
                        [
                            'donationCode' => '0299661000000',
                            'img' => 'https://img.muji.net/img/item/0299661000000_400.jpg',
                            'title' => '乳がん啓発活動（ピンクリボン運動）支援',
                            'description' => '日本対がん協会・乳房健康研究会',
                        ],
                        [
                            'donationCode' => '0299663000000',
                            'img' => 'https://img.muji.net/img/item/0299663000000_400.jpg',
                            'title' => '絶滅の恐れがある生きものの保護活動支援',
                            'description' => 'IUCN-J（国際自然保護連合日本委員会）',
                        ],
                        [
                            'donationCode' => '0299665000000',
                            'img' => 'https://img.muji.net/img/item/0299507000000_400.jpg',
                            'title' => '絵画を通じた子ども支援',
                            'description' => '子供地球基金',
                        ],
                        [
                            'donationCode' => '0299667000000',
                            'img' => 'https://img.muji.net/img/item/0299667000000_400.jpg',
                            'title' => '開発途上国の給食支援',
                            'description' => 'TABLE FOR TWO',
                        ]
                    ]

                ];
                break;
            case '0299507000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/j-platform_01_640.jpg',
                    'title' => '東日本大震災復興支援',
                    'description' => 'ジャパン・プラットフォームは、災害、紛争時の緊急・復興支援を支えています。',
                    'organization' => 'ジャパン・プラットホーム',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '12,056,800',
                    'total_people' => '28,790',
                    'fundraising_description' => '上記金額のうち、2014年8月末日までにお預かりした寄付金10,799,590円は、2012年2月（第一次）、9月（第二次）、
                                                    2013年4月（第三次）、10月（第四次）、2014年4月（第五次）、10月（第六次）に、ジャパン・プラットフォームへお渡ししました。
                                                    多くのご協力ありがとうございました。この募金券は引き続き、受け付けてまいります。',
                    
                ];
                break;
            case '0299529000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/momokaki_640.png',
                    'title' => '東日本大震災復興支援',
                    'description' => '被災地で力強く生きようとする孤児や遺児を共に支える育英会。',
                    'organization' => '桃・柿育英会',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '3,939,320',
                    'total_people' => '8,198',
                    'fundraising_description' => '上記金額のうち、2014年8月末日までにお預かりした寄付金2,613,930円は、2012年2月（第一次）、9月（第二次）、
                                                    2013年4月（第三次）、10月（第四次）、2014年4月（第五次）、10月（第六次）に、もも・かき育英会へお渡ししました。
                                                    多くのご協力ありがとうございました。この募金券は引き続き、受け付けてまいります。',
                   
                ];
                break;
            case '0299661000000':
                $data =
                [
                    'img' => '//www.muji.com/jp/donation/img/pinkribbon_640.png',
                    'title' => '乳がん啓発活動（ピンクリボン運動）支援',
                    'description' => '乳がんで悲しむ方をなくすため、ピンクリボン関連イベントやピンクリボンアドバイザー制度などを通じた啓発活動、がん検診などを実施しています。',
                    'organization' => '日本対がん協会・乳房健康研究会',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '788,820',
                    'total_people' => '2,339'
                ];
                break;
            case '0299663000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/iucn-j_640.jpg',
                    'title' => '絶滅の恐れがある生きものの保護活動支援',
                    'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。',
                    'organization' => 'IUCN-J（国際自然保護連合日本委員会）',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '352,340',
                    'total_people' => '4,003'
                ];
                break;
            case '0299665000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/kidsearthfund_640.jpg',
                    'title' => '絵画を通じた子ども支援',
                    'description' => '戦争や災害などで心に傷を負った世界中の子どもたちと絵を描くワークショップを行い、子どもたちが生きる力を取り戻す機会をつくっています。',
                    'organization' => '子供地球基金',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '12,056,800',
                    'total_people' => '28,790'
                ];
                break;
            case '0299667000000':
                $data = 
                [
                    'img' => '//www.muji.com/jp/donation/img/tft_640.jpg',
                    'title' => '開発途上国の給食支援',
                    'description' => '先進国に住む私たちがヘルシーな食事をとると、飢餓で苦しむ開発途上国の子どもたちに給食をプレゼントできる仕組みで、双方の健康改善をめざしています。',
                    'organization' => 'TABLE FOR TWO',
                    'reason' => '9月6日に北海道胆振地方中東部で発生した地震により多大な被害が出ています。本災害による被災者支援の活動資金として募金券の口座を開設しました',
                    'total' => '3,939,320',
                    'total_people' => '8,198'
                ];
                break;
            default :
                return [];
        }
        $data['donationCode'] = $donationCode;
        return $data;
    }

    private function getMockPaymentData($donationCode, $numberOfUnits)
    {
        return [
            'total' => 40,
            'couponAvailableAmount' => 500,
            'couponLimitDate' => "2010年12月28日(月)",
        ];
    }

    private function getMockGiftcard()
    {
        return [
            'giftCardAvailableAmount' => 1000,
        ];
    }

    private function getMockConfirmData()
    {
        return [
            'img' => 'https://img.muji.net/img/item/0299629000000_50.jpg',
            'title' => '開発途上国の給食支援',
            'organization' => 'TABLE FOR TWO',
            'total' => 1500,
            'quantity' => 15,
            'unitPrice' => 100,
            'creditUseAmount' => 1000,
            'giftCardUseAmount' => 300,
            'couponUseAmount' => 200,
        ];
    }
}
