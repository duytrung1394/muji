<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ProductCategoryTopsController extends Controller
{
    /**
     * カテゴリトップページ.
     *
     * @return Response
     */
    public function index(string $categoryCode)
    {
        return [
            'item' => $this->getMockdata($categoryCode),
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($categoryCode)
    {
        return [
            'category_code'   => $categoryCode,
            'category_title'  => "婦人ウェア",
            'category_ranking' => [
                ['title' => 'ウールシルク洗えるVネックセーター','img' => '//img.muji.net/img/item/4550002561062_1260.jpg'],
                ['title' => 'ウールシルク洗えるクールネックセーター','img' => '//img.muji.net/img/item/4550002557867_1260.jpg'],
                ['title' => '首のチクチクをおさえた・洗えるタートルネックセーター','img' => '//img.muji.net/img/item/4550002687540_1260.jpg'],
                ['title' => 'ヤクウールVネックセーター','img' => '//img.muji.net/img/item/4550002691622_1260.jpg'],
                ['title' => 'ウールシルク洗えるワイドリブボトルネックセーター','img' => '//img.muji.net/img/item/4550002558239_1260.jpg']
            ]
            ];
    }
}
