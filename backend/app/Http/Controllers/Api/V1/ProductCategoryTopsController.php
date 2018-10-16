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
        ];
    }
}
