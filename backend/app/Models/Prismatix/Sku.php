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
        $response = \Prismatix::resource($this->resourceKey)->store([
            'lang'                              => $request->input('lang'),
            'sku_code'                          => $request->input('sku_code'),
            'sku_code_alt'                      => $request->input('sku_code_alt'),
            'color_code'                        => $request->input('color_code'),
            'color_label'                       => $request->input('color_label'),
            'size_code'                         => $request->input('size_code'),
            'size_label'                        => $request->input('size_label'),
            'planned_year'                      => $request->input('planned_year'),
            'sales_start_timestamp'             => $request->input('sales_start_timestamp'),
            'sales_end_timestamp'               => $request->input('sales_end_timestamp'),
            'spec_info'                         => $request->input('spec_info'),
            'status'                            => $request->input('status'),
            'start_timestamp'                   => $request->input('start_timestamp'),
            'end_timestamp'                     => $request->input('end_timestamp'),
            'subscription_start_timestamp'      => $request->input('subscription_start_timestamp'),
            'subscription_end_timestamp'        => $request->input('subscription_end_timestamp'),
            'item_code'                         => $request->input('item_code'),
            'sku_name'                          => $request->input('sku_name'),
            'memo'                              => $request->input('memo'),
            'delivery_type'                     => $request->input('delivery_type'),
            'description'                       => $request->input('description'),
            'attributes'                        => $request->input('attributes'),
            'include_uris'                      => $request->input('include_uris'),
            'msrp'                              => $request->input('msrp'),
            'delivery_fee'                      => $request->input('delivery_fee'),
            'currency_code'                     => $request->input('currency_code'),
            'minimum_age'                       => $request->input('minimum_age'),
            'promotion_status'                  => $request->input('promotion_status'),
            'gift_wrap'                         => $request->input('gift_wrap'),
            'reservable'                        => $request->input('reservable'),
            'branches'                          => $request->input('branches'),
            'badges'                            => $request->input('badges'),
            'keywords'                          => $request->input('keywords'),
            'tags'                              => $request->input('tags'),
            'access_policy'                     => $request->input('access_policy'),
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
            'lang'                              => $request->input('lang'),
            'sku_code'                          => $request->input('sku_code'),
            'sku_code_alt'                      => $request->input('sku_code_alt'),
            'color_code'                        => $request->input('color_code'),
            'color_label'                       => $request->input('color_label'),
            'size_code'                         => $request->input('size_code'),
            'size_label'                        => $request->input('size_label'),
            'planned_year'                      => $request->input('planned_year'),
            'sales_start_timestamp'             => $request->input('sales_start_timestamp'),
            'sales_end_timestamp'               => $request->input('sales_end_timestamp'),
            'spec_info'                         => $request->input('spec_info'),
            'status'                            => $request->input('status'),
            'start_timestamp'                   => $request->input('start_timestamp'),
            'end_timestamp'                     => $request->input('end_timestamp'),
            'subscription_start_timestamp'      => $request->input('subscription_start_timestamp'),
            'subscription_end_timestamp'        => $request->input('subscription_end_timestamp'),
            'item_code'                         => $request->input('item_code'),
            'sku_name'                          => $request->input('sku_name'),
            'memo'                              => $request->input('memo'),
            'delivery_type'                     => $request->input('delivery_type'),
            'description'                       => $request->input('description'),
            'attributes'                        => $request->input('attributes'),
            'include_uris'                      => $request->input('include_uris'),
            'msrp'                              => $request->input('msrp'),
            'delivery_fee'                      => $request->input('delivery_fee'),
            'currency_code'                     => $request->input('currency_code'),
            'minimum_age'                       => $request->input('minimum_age'),
            'promotion_status'                  => $request->input('promotion_status'),
            'gift_wrap'                         => $request->input('gift_wrap'),
            'reservable'                        => $request->input('reservable'),
            'branches'                          => $request->input('branches'),
            'badges'                            => $request->input('badges'),
            'keywords'                          => $request->input('keywords'),
            'tags'                              => $request->input('tags'),
            'access_policy'                     => $request->input('access_policy'),
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
