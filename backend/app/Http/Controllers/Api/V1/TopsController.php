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
                ['url' => '/store', 'title' => 'お知らせ1'],
                ['url' => '/store', 'title' => 'お知らせ2'],
                ['url' => '/store', 'title' => 'お知らせ3'],
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
            'important_notices' => [
                ['date' => '2018.09.14', 'message' => '重要なお知らせ1........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ2........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
                ['date' => '2018.09.14', 'message' => '重要なお知らせ3........', 'url' => 'https://ryohin-keikaku.jp/news/2018_0914.html'],
            ],
        ];
    }
}
