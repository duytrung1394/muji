<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CmsController extends Controller
{
    /**
     * 商品一覧セクションページインクルード取得
     *
     * @return Response
     */
    public function getCmdtySectionInclude(Request $request, string $sectionCode)
    {
        return file_get_contents(storage_path('cms/cmdty_section_include.html'));
    }

    /**
     * 商品一覧サブセクション一覧インクルード取得
     *
     * @return Response
     */
    public function getCmdtySectionSubsections(Request $request, string $sectionCode)
    {
        return file_get_contents(storage_path('cms/cmdty_section_subsections.html'));
    }

    /**
     * 商品詳細インクルード(エリア1)取得
     *
     * @return Response
     */
    public function getCmdtyDetailInclude1(Request $request, string $productCode)
    {
        return file_get_contents(storage_path('cms/cmdty_detail_include1.html'));
    }

    /**
     * 商品詳細インクルード(エリア2)取得
     *
     * @return Response
     */
    public function getCmdtyDetailInclude2(Request $request, string $productCode)
    {
        return file_get_contents(storage_path('cms/cmdty_detail_include2.html'));
    }
}
