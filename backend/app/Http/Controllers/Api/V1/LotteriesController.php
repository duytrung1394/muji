<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class LotteriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMockData($request->input('section_code'))
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  string   $lotteryCode
     * @return Response
     */
    public function show($sectionCode)
    {
        return [
            'item' => $this->getMockdata($sectionCode),
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
    public function update(Request $request, $lotteryCode)
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

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData()
    {
        // $data = [];
        // $start = ((int) $page - 1) * 10;

        // for ($i = 0; $i < 10; $i++) {
        //     $data[] = $this->getMockData('lottery_code' . ($i + $start ));
        // }

        return [
            $this->getMockData()
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($section_code)
    {
        // 'lottery_code'   => $code,
        // 'name'        => 'name_' . $code,
        // 'description' => 'description_' . $code,
        $sections = [
            'T181206' => [
                'list_items' => [
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "before"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "before"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "done"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "done"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "end"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "end"
                    ],
                    [
                        'img' => 'https://tokutoku.mobi/wp-content/uploads/2018/06/mujifukubukuro.png',
                        'title' => '【ネット限定】夏福袋　ヘルス&ビューティー・トラベル',
                        'price' => '2,000',
                        'has_apply' => "previous"
                    ],
                ]
            ],
        ];
        return $sections[$section_code];
    }
}