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
        $body = [];

        foreach ([
        'category_code',
        'item_code',
        'priority',
        'deleted',
        'attributes',
        'access_policy',
        ] as $property) {

            if ($request->has($property)) {

                $body[$property] = $request->input($property);
            }
        }

        return \Prismatix::resource($this->resourceKey)->store($body);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int      $id
     * @return Response
     */
    public function update(Request $request, $categoryId, $itemId)
    {
        Log::debug('>>>>>>>>>>>>>>>>>> '.$categoryId.' ---- '.$itemId);
        $body = [];

        foreach ([
        'category_code',
        'item_code',
        'priority',
        'deleted',
        'attributes',
        'access_policy',
        ] as $property) {

            if ($request->has($property)) {

                $body[$property] = $request->input($property);
            }
        }

        return \Prismatix::resource($this->resourceKey)->update($body);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($categoryId, $itemId)
    {
        Log::debug('>>>>>>> destroy: ' . $categoryId . ' ---- ' . $itemId);
        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $categoryId, // category_code = prx_skd_php_category_0001 
            $this->rootItemParamName => $itemId, // item_code = prx_sdk_php_item_0001  
        ]);
        Log::debug('>>>>>>> end destroy' . $response);
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
