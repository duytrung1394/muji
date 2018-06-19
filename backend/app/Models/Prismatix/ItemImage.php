<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;
use Log;

class ItemImage extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.ItemImage';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'item_code';
    protected $rootImageParamName = 'item_image_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($itemCode)
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            $this->rootParamName => $itemCode,
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
    public function show($itemCode, $itemImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $itemCode,
            $this->rootImageParamName => $itemImageCode,
        ]);

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, $itemCode)
    {
        $body = [];

        foreach ([
            'lang',
            'item_code',
            'item_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
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
    public function update(Request $request, $itemCode, $itemImageCode)
    {
        $body = [];

        foreach ([
            'lang',
            'item_code',
            'item_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
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
    public function destroy($itemCode, $itemImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $itemCode,
            $this->rootImageParamName => $itemImageCode,
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
