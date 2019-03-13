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
        return response('<div>include contents sample</div>')->header('Content-Type', 'text/html');
    }

    /**
     * 商品一覧サブセクション一覧インクルード取得
     *
     * @return Response
     */
    public function getCmdtySectionSubsections(Request $request, string $sectionCode)
    {
        return response('<div>subsections contents sample</div>')->header('Content-Type', 'text/html');
    }

    /**
     * 商品詳細インクルード(エリア1)取得
     *
     * @return Response
     */
    public function getCmdtyDetailInclude1(Request $request, string $productCode)
    {
        return response('<div>cmdty detail include1 contents sample</div>')->header('Content-Type', 'text/html');
    }
}
