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
            'category_breadcrumb' => "無印良品トップ",
            'category_title'  => "婦人ウェア",
            'category_name' =>"家で洗えるウールシルク",
            'category_description' =>"メリウールとシルクを合わせて、肌触りがやわらかく、光沢のあるニットをつくりました。ご家庭の洗濯機で洗えるのでお手入れ簡単です。",
            'category_img' => 'https://www.muji.com/jp/img/store/section/promotion/T10000.jpg',
            'category_list' => [
                ['img' => 'https://img.muji.net/img/item/4550002557768_95.jpg','title' => 'ウールシルク洗えるクルーネックセーター　婦人M・オートミール','price' => '2,990'],
                ['img' => 'https://img.muji.net/img/item/4550002802899_95.jpg','title' => '起毛ストレッチピケイージーワイドパンツ　婦人M・キャメル','price' => '5,990']
            ]
        ];
    }
}
