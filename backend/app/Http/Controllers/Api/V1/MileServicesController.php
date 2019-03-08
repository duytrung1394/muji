<?php
namespace App\Http\Controllers\Api\V1;

class MileServicesController extends Controller
{
    /**
     * Get list mile histories
     * 
     * @return array
     */
    public function history() {
        return [
            'data'  =>[
                'stageName' => 'プラチナステージ',
                'stageCd' => '030',
                'totalMile' => 3000,
                'totalPoint' => 100,
                'nextStageName' => 'ダイヤモンドステージ',
                'nextStageCd' => '040',
                'nextStageMile' => 4000,
                'nextGiftMile' => 10434,
                'nextGiftPoint' => 200,
                'nearPointExpireDate' => '20171231235959',
                'nearPointExpireAmount' => 2018,
                'mileExpireDate' => '20190228235959',
                'gender' => 1,
                'birthday' => '19991231',
                'ecMailAddress' => 'muji',
                'creditCardNo' => '1234',
                'mgid' => '99998888',
                'mid' => 'u26xxxxx086xxxxx797xxxxxfabxxxxxe',
                'lineuserid' => '',
                'device_token' => '',
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
                        'locName' => 'ネットストア',
                        'mileType' => '5',
                        'mileTypeName' => 'お買い物',
                        'mileDate' => '20181124105641',
                        'mileAmount' => 6291,
                    ],
                    [
                        'journalId' => '20171103045236013448',
                        'locCode' => '045236',
                        'locName' => 'ネットストア',
                        'mileType' => '1',
                        'mileTypeName' => 'お買い物',
                        'mileDate' => '20180827103800',
                        'mileAmount' => 10,
                    ],
                    [
                        'journalId' => '20171027045310027283',
                        'locCode' => '045310',
                        'locName' => '下北沢',
                        'mileType' => '1',
                        'mileTypeName' => 'お買い物',
                        'mileDate' => '20180825102600',
                        'mileAmount' => 3265,
                    ]
                ],
                'old_mile' => [
                    'year' => '2016',
                    'mile' => '9566',
                ]
            ],
            'count' => 1
        ];
    }
}
