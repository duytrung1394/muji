<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Sku extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Sku';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'sku_code';

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
    public function show($id)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $id,
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
            'lang',
            'sku_code',
            'sku_code_alt',
            'color_code',
            'color_label',
            'size_code',
            'size_label',
            'planned_year',
            'sales_start_timestamp',
            'sales_end_timestamp',
            'spec_info',
            'status',
            'start_timestamp',
            'end_timestamp',
            'subscription_start_timestamp',
            'subscription_end_timestamp',
            'item_code',
            'sku_name',
            'memo',
            'delivery_type',
            'description',
            'attributes',
            'include_uris',
            'msrp',
            'delivery_fee',
            'currency_code',
            'minimum_age',
            'promotion_status',
            'gift_wrap',
            'reservable',
            'branches',
            'badges',
            'keywords',
            'tags',
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
    public function update(Request $request, $id)
    {
        $body = [];

        foreach ([
            'lang',
            'sku_code',
            'sku_code_alt',
            'color_code',
            'color_label',
            'size_code',
            'size_label',
            'planned_year',
            'sales_start_timestamp',
            'sales_end_timestamp',
            'spec_info',
            'status',
            'start_timestamp',
            'end_timestamp',
            'subscription_start_timestamp',
            'subscription_end_timestamp',
            'item_code',
            'sku_name',
            'memo',
            'delivery_type',
            'description',
            'attributes',
            'include_uris',
            'msrp',
            'delivery_fee',
            'currency_code',
            'minimum_age',
            'promotion_status',
            'gift_wrap',
            'reservable',
            'branches',
            'badges',
            'keywords',
            'tags',
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
