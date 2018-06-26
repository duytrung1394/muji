<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Store extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Store';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'store_code';

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
            'store_code',
            'store_name',
            'memo',
            'details',
            'status',
            'start_timestamp',
            'end_timestamp',
            'store_pickup_flag',
            'store_shipment_flag',
            'tel1',
            'tel2',
            'hours1',
            'hours2',
            'store_type',
            'assortment_type',
            'zip_code',
            'country',
            'state',
            'city',
            'address1',
            'address2',
            'latitude',
            'longitude',
            'access',
            'parking',
            'settlement',
            'brand_site_title',
            'brand_site_url',
            'store_site_title',
            'store_site_url',
            'news_site_title',
            'news_site_url',
            'brand_code',
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
    public function update(Request $request, $id)
    {
        $body = [];

        foreach ([
            'lang',
            'store_code',
            'store_name',
            'memo',
            'details',
            'status',
            'start_timestamp',
            'end_timestamp',
            'store_pickup_flag',
            'store_shipment_flag',
            'tel1',
            'tel2',
            'hours1',
            'hours2',
            'store_type',
            'assortment_type',
            'zip_code',
            'country',
            'state',
            'city',
            'address1',
            'address2',
            'latitude',
            'longitude',
            'access',
            'parking',
            'settlement',
            'brand_site_title',
            'brand_site_url',
            'store_site_title',
            'store_site_url',
            'news_site_title',
            'news_site_url',
            'brand_code',
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
