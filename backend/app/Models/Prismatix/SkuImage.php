<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;
use Log;

class SkuImage extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.SkuImage';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'sku_code';
    protected $rootImageParamName = 'sku_image_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($skuCode)
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            $this->rootParamName => $skuCode,
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
    public function show($skuCode, $skuImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $skuCode,
            $this->rootImageParamName => $skuImageCode,
        ]);

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, $skuCode)
    {
        $body = [];

        foreach ([
            'lang',
            'sku_code',
            'sku_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
            'deleted',
            'attributes',
            'badges',
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
    public function update(Request $request, $skuCode, $skuImageCode)
    {
        $body = [];

        foreach ([
            'lang',
            'sku_code',
            'sku_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
            'deleted',
            'attributes',
            'badges',
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
    public function destroy($skuCode, $skuImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $skuCode,
            $this->rootImageParamName => $skuImageCode,
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
