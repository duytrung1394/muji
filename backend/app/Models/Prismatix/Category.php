<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Category extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Category';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'category_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // TODO: pagination
        $responce = \Prismatix::resource($this->resourceKey)->index([
            'size' => 10,
        ]);

        return $responce;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $responce = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $id,
        ]);

        return $responce;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $responce = \Prismatix::resource($this->resourceKey)->store([
            'lang'              => $request->input('lang'),
            'category_code'     => $request->input('category_code'),
            'status'            => $request->input('status'),
            'start_timestamp'   => $request->input('start_timestamp'),
            'end_timestamp'     => $request->input('end_timestamp'),
            'category_name'     => $request->input('category_name'),
            'facet_disp_flag'   => $request->input('facet_disp_flag'),
            // TODO: ...
        ]);

        return $responce;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int      $id
     * @return Response
     */
    public function update(Request $request, $id)
    {

        $responce = \Prismatix::resource($this->resourceKey)->update([
            'lang'              => $request->input('lang'),
            'category_code'     => $request->input('category_code'),
            'status'            => $request->input('status'),
            'start_timestamp'   => $request->input('start_timestamp'),
            'end_timestamp'     => $request->input('end_timestamp'),
            'category_name'     => $request->input('category_name'),
            'facet_disp_flag'   => $request->input('facet_disp_flag'),
            // TODO: ...
        ]);

        return $responce;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {

        $responce = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $id,
        ]);

        return $responce;
    }

    /**
     * Remove somev resources from storage.
     *
     * @param  int  $id
     * @return Response
     */
/*    public function destroyMulti(Request $request)
    {
        $data = [];

        foreach ($request->input('ids') as $id) {

            $responce = \Prismatix::resource($this->resourceKey)->destroy([
                $this->rootParamName => $id,
            ]);

            $data[] = $responce->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }*/
}
