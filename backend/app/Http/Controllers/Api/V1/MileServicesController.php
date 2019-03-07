<?php
namespace App\Http\Controllers\Api\V1;

class MileServicesController extends Controller
{
    /**
     * Get list mile histories
     * 
     * @param string $year
     * @return array
     */
    public function history($year) {
        if ($year === '2019') {
            return [
                'data'  =>[
                    'stageName' => 'プラチナステージ',
                    'stageCd' => '030',
                    'totalMile' => 122356,
                    'totalPoint' => 100,
                    'nextStageName' => 'ダイヤモンドステージ',
                    'nextStageCd' => '040',
                    'nextGiftMile' => 200000,
                    'nextGiftPoint' => 1000,
                    'nearPointExpireDate' => '20171231235959',
                    'nearPointExpireAmount' => 100,
                    'mileExpireDate' => '20200228235959',
                    'gender' => 1,
                    'birthday' => '19991231',
                    'ecMailAddress' => 'muji@ec.com',
                    'creditCardNo' => '1234',
                    'mgid' => '99998888',
                    'mid' => 'u26xxxxx086xxxxx797xxxxxfabxxxxxe',
                    'lineuserid' => '',
                    'device_token' => 'd1JwTxxxxxo:APAxxxxxOqMgNxxxxxANkLLxxxxxjcUjAxxxxxoQ59fxxxxxRnaCYxxxxxkUZUzxxxxx_xdSUxxxxx2UnyXxxxxx_apaQxxxxxbXqLdxxxxxHzq5vxxxxxo9ooZZxxxxxHmdl-xxxxxU',
                    'unread_notice' => 10,
                    'stageUp' => 0,
                    'adid' => '1bxxxxx1-xxxx-4xxx-9xxx-1xxxxx352xxx',
                    'appliPayFlag' => 1,
                    'nickName' => 'カタチュー',
                    'userIconImage' => 'https://img.muji.net/passport/img/app/news/6149_20171116180851_80c3729a75dd304e1d698723d9f50b62_D.jpg',
                    'officialUserStatus' => 'official',
                    'miles' => [
                        [
                            'journalId' => '16735428',
                            'locCode' => '999998',
                            'locName' => 'myMUJI',
                            'mileType' => '5',
                            'mileTypeName' => '欲しい登録',
                            'mileDate' => '20171114155641',
                            'mileAmount' => 1,
                        ],
                        [
                            'journalId' => '20171103045236013448',
                            'locCode' => '045236',
                            'locName' => '船橋西武',
                            'mileType' => '1',
                            'mileTypeName' => 'お買い物',
                            'mileDate' => '20171103193800',
                            'mileAmount' => 2995,
                        ],
                        [
                            'journalId' => '20171027045310027283',
                            'locCode' => '045310',
                            'locName' => '津田沼パルコ',
                            'mileType' => '1',
                            'mileTypeName' => 'お買い物',
                            'mileDate' => '20171027202600',
                            'mileAmount' => 13400,
                        ]
                    ],
                    'old_mile' => [
                        'year' => '2014',
                        'mile' => '33333',
                    ]
                ],
                'count' => 1
            ];
        } else if ($year === '2018') {
            return [
                'data'  =>[
                    'stageName' => 'プラチナステージ',
                    'stageCd' => '030',
                    'totalMile' => 122356,
                    'totalPoint' => 100,
                    'nextStageName' => 'ダイヤモンドステージ',
                    'nextStageCd' => '040',
                    'nextGiftMile' => 200000,
                    'nextGiftPoint' => 1000,
                    'nearPointExpireDate' => '20171231235959',
                    'nearPointExpireAmount' => 100,
                    'mileExpireDate' => '20190228235959',
                    'gender' => 1,
                    'birthday' => '19991231',
                    'ecMailAddress' => 'muji@ec.com',
                    'creditCardNo' => '1234',
                    'mgid' => '99998888',
                    'mid' => 'u26xxxxx086xxxxx797xxxxxfabxxxxxe',
                    'lineuserid' => '',
                    'device_token' => 'd1JwTxxxxxo:APAxxxxxOqMgNxxxxxANkLLxxxxxjcUjAxxxxxoQ59fxxxxxRnaCYxxxxxkUZUzxxxxx_xdSUxxxxx2UnyXxxxxx_apaQxxxxxbXqLdxxxxxHzq5vxxxxxo9ooZZxxxxxHmdl-xxxxxU',
                    'unread_notice' => 10,
                    'stageUp' => 0,
                    'adid' => '1bxxxxx1-xxxx-4xxx-9xxx-1xxxxx352xxx',
                    'appliPayFlag' => 1,
                    'nickName' => 'カタチュー',
                    'userIconImage' => 'https://img.muji.net/passport/img/app/news/6149_20171116180851_80c3729a75dd304e1d698723d9f50b62_D.jpg',
                    'officialUserStatus' => 'official',
                    'miles' => [
                        // [
                        //     'journalId' => '16735428',
                        //     'locCode' => '999998',
                        //     'locName' => 'myMUJI',
                        //     'mileType' => '5',
                        //     'mileTypeName' => '欲しい登録',
                        //     'mileDate' => '20181124230000',
                        //     'mileAmount' => -1000,
                        // ],
                        // [
                        //     'journalId' => '20171103045236013448',
                        //     'locCode' => '045236',
                        //     'locName' => '船橋西武',
                        //     'mileType' => '1',
                        //     'mileTypeName' => 'お買い物',
                        //     'mileDate' => '20180827230000',
                        //     'mileAmount' => 10,
                        // ],
                        [
                            'journalId' => '20171027045310027283',
                            'locCode' => '045310',
                            'locName' => '津田沼パルコ',
                            'mileType' => '1',
                            'mileTypeName' => 'お買い物',
                            'mileDate' => '20180825230000',
                            'mileAmount' => 3265,
                        ]
                    ],
                    'old_mile' => [
                        'year' => '2014',
                        'mile' => '33333',
                    ]
                ],
                'count' => 1
            ];
        } else {
            return [
                'data'  =>[
                    'stageName' => 'プラチナステージ',
                    'stageCd' => '030',
                    'totalMile' => 122356,
                    'totalPoint' => 100,
                    'nextStageName' => 'ダイヤモンドステージ',
                    'nextStageCd' => '040',
                    'nextGiftMile' => 200000,
                    'nextGiftPoint' => 1000,
                    'nearPointExpireDate' => '20171231235959',
                    'nearPointExpireAmount' => 100,
                    'mileExpireDate' => '20190228235959',
                    'gender' => 1,
                    'birthday' => '19991231',
                    'ecMailAddress' => 'muji@ec.com',
                    'creditCardNo' => '1234',
                    'mgid' => '99998888',
                    'mid' => 'u26xxxxx086xxxxx797xxxxxfabxxxxxe',
                    'lineuserid' => '',
                    'device_token' => 'd1JwTxxxxxo:APAxxxxxOqMgNxxxxxANkLLxxxxxjcUjAxxxxxoQ59fxxxxxRnaCYxxxxxkUZUzxxxxx_xdSUxxxxx2UnyXxxxxx_apaQxxxxxbXqLdxxxxxHzq5vxxxxxo9ooZZxxxxxHmdl-xxxxxU',
                    'unread_notice' => 10,
                    'stageUp' => 0,
                    'adid' => '1bxxxxx1-xxxx-4xxx-9xxx-1xxxxx352xxx',
                    'appliPayFlag' => 1,
                    'nickName' => 'カタチュー',
                    'userIconImage' => 'https://img.muji.net/passport/img/app/news/6149_20171116180851_80c3729a75dd304e1d698723d9f50b62_D.jpg',
                    'officialUserStatus' => 'official',
                    'miles' => [
                        [
                            'journalId' => '16735428',
                            'locCode' => '999998',
                            'locName' => 'myMUJI',
                            'mileType' => '5',
                            'mileTypeName' => '欲しい登録',
                            'mileDate' => '20181124230000',
                            'mileAmount' => -1000,
                        ],
                        [
                            'journalId' => '20171103045236013448',
                            'locCode' => '045236',
                            'locName' => '船橋西武',
                            'mileType' => '1',
                            'mileTypeName' => 'お買い物',
                            'mileDate' => '20180827230000',
                            'mileAmount' => 10,
                        ],
                        [
                            'journalId' => '20171027045310027283',
                            'locCode' => '045310',
                            'locName' => '津田沼パルコ',
                            'mileType' => '1',
                            'mileTypeName' => 'お買い物',
                            'mileDate' => '20180825230000',
                            'mileAmount' => 3265,
                        ]
                    ],
                    'old_mile' => [
                        'year' => '2014',
                        'mile' => '33333',
                    ]
                ],
                'count' => 1
            ];
        }
    }

    public function shoppingPointHistory() {
        return [
            'data'  =>[
                'stageName' => 'プラチナステージ',
                'stageCd' => '030',
                'totalMile' => 122356,
                'totalPoint' => 100,
                'nextStageName' => 'ダイヤモンドステージ',
                'nextStageCd' => '040',
                'nextGiftMile' => 200000,
                'nextGiftPoint' => 1000,
                'nearPointExpireDate' => '20171231235959',
                'nearPointExpireAmount' => 100,
                'mileExpireDate' => '20190228235959',
                'gender' => 1,
                'birthday' => '19991231',
                'ecMailAddress' => 'muji@ec.com',
                'creditCardNo' => '1234',
                'mgid' => '99998888',
                'mid' => 'u26xxxxx086xxxxx797xxxxxfabxxxxxe',
                'lineuserid' => '',
                'device_token' => 'd1JwTxxxxxo:APAxxxxxOqMgNxxxxxANkLLxxxxxjcUjAxxxxxoQ59fxxxxxRnaCYxxxxxkUZUzxxxxx_xdSUxxxxx2UnyXxxxxx_apaQxxxxxbXqLdxxxxxHzq5vxxxxxo9ooZZxxxxxHmdl-xxxxxU',
                'unread_notice' => 10,
                'stageUp' => 0,
                'adid' => '1bxxxxx1-xxxx-4xxx-9xxx-1xxxxx352xxx',
                'appliPayFlag' => 1,
                'nickName' => 'カタチュー',
                'userIconImage' => 'https://img.muji.net/passport/img/app/news/6149_20171116180851_80c3729a75dd304e1d698723d9f50b62_D.jpg',
                'officialUserStatus' => 'official',
                'gifts' => [
                    [
                        'giftId' => '1770653629',
                        'giftCode' => '110000278',
                        'giftName' => '２月お誕生日の方へのクーポンプレゼント',
                        'giftType' => 1,
                        'pointBalance' => 500,
                        'pointGranted' => 500,
                        'couponRate' => 0,
                        'giftStartDate' => '20130205200000',
                        'giftEndDate' => '20130305235959',
                        'activeFlag' => 2,
                        'giftImageUrl' => null,
                        'giftDetailUrl' => '',
                        'giftBarcodeDispFlg' => 0,
                    ],
                    [
                        'giftId' => '1770653630',
                        'giftCode' => '110000279',
                        'giftName' => '1月お誕生日の方へのクーポンプレゼント',
                        'giftType' => 1,
                        'pointBalance' => 500,
                        'pointGranted' => 200,
                        'couponRate' => 0,
                        'giftStartDate' => '20130205100000',
                        'giftEndDate' => '20130305235959',
                        'activeFlag' => 2,
                        'giftImageUrl' => null,
                        'giftDetailUrl' => '',
                        'giftBarcodeDispFlg' => 0,
                    ],
                    [
                        'giftId' => '1770653631',
                        'giftCode' => '110000280',
                        'giftName' => '3月お誕生日の方へのクーポンプレゼント',
                        'giftType' => 1,
                        'pointBalance' => 1024,
                        'pointGranted' => 200,
                        'couponRate' => 0,
                        'giftStartDate' => '20130205180000',
                        'giftEndDate' => '20130305235959',
                        'activeFlag' => 2,
                        'giftImageUrl' => null,
                        'giftDetailUrl' => '',
                        'giftBarcodeDispFlg' => 0,
                    ]
                ],
                'giftUses' => [
                    [
                        'journalId' => '20171027045310027283',
                        'giftId' => '11104316179',
                        'giftCode' => '110000280',
                        'giftName' => 'プラチナステージポイント_(2017)',
                        'giftType' => 1,
                        'locCode' => '045310',
                        'locName' => '津田沼パルコ',
                        'useDate' => '20171027202600',
                        'usePoint' => 500,
                    ],
                    [
                        'journalId' => '20171027045310027284',
                        'giftId' => '11104316180',
                        'giftCode' => '110000281',
                        'giftName' => 'プラチナステージポイント_(2018)',
                        'giftType' => 1,
                        'locCode' => '045311',
                        'locName' => '津田沼パルコ',
                        'useDate' => '20171008100000',
                        'usePoint' => -500,
                    ]
                ]
            ],
            'count' => 1
        ];
    }
}
