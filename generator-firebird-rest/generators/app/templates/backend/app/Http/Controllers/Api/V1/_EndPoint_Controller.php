<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class <%= EndPoint %>Controller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        return [
            'data'  => $this->getMockData(),
            'total' => 10,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  string   $<%= endPoint %>Code
     * @return Response
     */
    public function show($<%= endPoint %>Code)
    {
        foreach ($this->getMockData() as $data) {

            if ($data['<%= end_point %>_code'] ===  $<%= endPoint %>Code) {

                return [
                    'data' => $data
                ];
            }
        }

        return [
            'data' => [],
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
     * @param  string   $<%= endPoint %>Code
     * @return Response
     */
    public function update(Request $request, $<%= endPoint %>Code)
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
    private function getMockData()
    {
        $data = [];

        for ($i = 0; $i < 10; $i++) {

            $data[] = [
                '<%= end_point %>_code'   => '<%= end_point %>_code_' . $i,
                'name'        => 'name_' . $i,
                'description' => 'description_' . $i,
            ];
        }

        return $data;
    }
}
