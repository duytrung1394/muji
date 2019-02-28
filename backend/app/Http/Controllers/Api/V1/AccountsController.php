<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class AccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data' => $this->getMockData(''),
            'total' => 200,
        ];
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            'account_code'   => $code,
            'name'        => 'name_' . $code,
            'description' => 'description_' . $code,
        ];
    }
}
