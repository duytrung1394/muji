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
                            'img' => '',
                            'title' => '絶滅の恐れがある・・・',
                            'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。'
                        ],
                        [
                            'img' => '',
                            'title' => '絶滅の恐れがある・・・',
                            'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。'
                        ],
                    ]
                ],
                [
                    'title' => '活動支援',
                    'items' => [
                        [
                            'img' => '',
                            'title' => '絶滅の恐れがある・・・',
                            'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。'
                        ],
                        [
                            'img' => '',
                            'title' => '絶滅の恐れがある・・・',
                            'description' => '世界と日本の自然の「今」を伝え、人と自然が共生する社会をつくるための仕組みづくりや、仲間づくりを行っています。'
                        ],
                    ]
                ]
            ]
        ];
    }
}
