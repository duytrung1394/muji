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
    public function index(string $sectionCode)
    {
        return [
            'data'  => $this->getMultiMockData(),
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  string   $sectionCode
     * @return Response
     */
    public function show(string $sectionCode, string $janCode)
    {
        return [
            'data' => $this->getMultiMockData()[0],
        ];
    }

    /**
     * モックデータ取得用．
     *
     * @return array
     */
    private function getMultiMockData()
    {
        return [
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
        ];
    }
}
