<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class MileServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMultiMockData( (int)$request->input('page') ),
            'total' => 200,
        ];
    }

    /**
      * Show the form for creating a new resource.
      *
      * @return \Illuminate\Http\Response
      */
     public function create()
     {
         return [
             'data' => new \stdClass,
         ];
     }

   /**
     * Display the specified resource.
     *
     * @param  string   $journalId
     * @return Response
     */
    public function show($journalId)
    {
        return [
            'data' => $this->getMockdata($journalId),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        return [
            'data' => [],
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  string   $camelCase(pkName)
     * @return Response
     */
    public function update(Request $request, $journalId)
    {
        return [
            'data' => [],
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        return [
            'data'  => [],
            'count' => 1,
        ];
    }

    public function accountInfo(Request $request) {
        return [
            'data'  => [
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
                'mileExpireDate' => '20180228235959',
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
            ],
            'count' => 1,
        ];
    }

    /**
     * Get list mile histories
     * 
     * @param Request $request
     * @return Response
     */
    public function history(Request $request) {

        return 
                [
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
                ];
    }

    public function oldMile(Request $request) {
        return [
                [
                    'year' => '2016',
                    'mile' => '122356',
                ],
                [
                    'year' => '2015',
                    'mile' => '82703',
                ],
                [
                    'year' => '2014',
                    'mile' => '33333',
                ]
            ];
    }

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData($page = 1)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data[] = $this->getMockData('journalId' . ($i + $start ));
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            'journalId'   => $code,
            'name'        => 'name_' . $code,
            'description' => 'description_' . $code,
        ];
    }
}
