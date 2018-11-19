<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class FruitsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMultiMockData( (int)$request->input('page') ),
            'total' => 200,
        ];
    }

    /**
      * Show the form for creating a new resource.
      *
      * @return \Illuminate\Http\Response
      */
     public function create()
     {
         return [
             'data' => new \stdClass,
         ];
     }

    /**
     * Display the specified resource.
     *
     * @param  string   $fruitCode
     * @return Response
     */
    public function show($fruitCode)
    {
        return [
            'data' => $this->getMockdata($fruitCode),
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
            'data' => [
                'fruit_code'   => 'fruit_code' . rand(0, 199),
            ],
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  string   $camelCase(pkName)
     * @return Response
     */
    public function update(Request $request, $fruitCode)
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
    private function getMultiMockData($page = 1)
    {
        $data = [];
        $start = ((int) $page - 1) * 10;

        for ($i = 0; $i < 10; $i++) {
            $data[] = $this->getMockData('fruit_code' . ($i + $start ));
        }

        return $data;
    }

    /**
     * モックデータを生成して取得
     */
    private function getMockData($code)
    {
        return [
            'fruit_code'   => $code,
            'name'        => 'name_' . $code,
            'description' => 'description_' . $code,
        ];
    }
}
