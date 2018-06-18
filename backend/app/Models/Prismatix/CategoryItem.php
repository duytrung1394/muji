<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;
use Log;

class CategoryItem extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.CategoryItem';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'category_code';
    protected $rootItemParamName = 'item_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            'size' => 10,
        ]);

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($categoryId, $itemId)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $categoryId,
            $this->rootItemParamName => $itemId,
        ]);

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $response = \Prismatix::resource($this->resourceKey)->store([
            'category_code'         => $request->input('category_code'),
            'item_code'             => $request->input('item_code'),
            'priority'              => $request->input('priority'),
            'deleted'               => $request->input('deleted'),
            // 'attributes'            => $request->input('attributes'),         // {}
            // 'access_policy'         => $request->input('access_policy'),         // { }
        ]);

        return $response;
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

        $response = \Prismatix::resource($this->resourceKey)->update([
            'category_code'         => $request->input('category_code'),
            'item_code'             => $request->input('item_code'),
            'priority'              => $request->input('priority'),             // 0, 1, 2, ....
            'deleted'               => $request->input('deleted'),
            // 'attributes'            => $request->input('attributes'),         // {}
            // 'access_policy'         => $request->input('access_policy'),         // { }
        ]);

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {

        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $id,
        ]);

        return $response;
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

            $response = \Prismatix::resource($this->resourceKey)->destroy([
                $this->rootParamName => $id,
            ]);

            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }*/
}
