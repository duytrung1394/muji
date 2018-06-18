<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Item extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Item';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'item_code';

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
            'lang'                  => $request->input('lang'),
            'item_code'             => $request->input('item_code'),
            'status'                => $request->input('status'),
            'start_timestamp'       => $request->input('start_timestamp'),
            'end_timestamp'         => $request->input('end_timestamp'),
            'item_name'             => $request->input('item_name'),
            'item_label'            => $request->input('item_label'),
            'item_code_alt'         => $request->input('item_code_alt'),
            'reservation_flag'      => $request->input('reservation_flag'),
            'store_receive_flag'    => $request->input('store_receive_flag '),
            'priority'              => $request->input('priority'),
            'memo'                  => $request->input('memo'),
            'description'           => $request->input('description'),
            'attributes'            => $request->input('attributes'),
            'brand_code'            => $request->input('brand_code'),
            'promotion_status'      => $request->input('promotion_status'),
            // 'spec_info'             => $request->input('spec_info'),
            // 'size_info'             => $request->input('size_info'),
            'link_urls'             => $request->input('link_urls'),
            'branches'              => $request->input('branches'),
            'badges'                => $request->input('badges'),
            'keywords'              => $request->input('keywords'),
            'tags'                  => $request->input('tags'),
            'access_policy'         => $request->input('access_policy'),
            // 'addon_service_codes'   => $request->input('addon_service_codes'),
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
            'lang'                  => $request->input('lang'),
            'item_code'             => $id,
            'status'                => $request->input('status'),
            'start_timestamp'       => $request->input('start_timestamp'),
            'end_timestamp'         => $request->input('end_timestamp'),
            'item_name'             => $request->input('item_name'),
            'item_label'            => $request->input('item_label'),
            'item_code_alt'         => $request->input('item_code_alt'),
            'reservation_flag'      => $request->input('reservation_flag'),
            'store_receive_flag'    => $request->input('store_receive_flag '),
            'priority'              => $request->input('priority'),
            'memo'                  => $request->input('memo'),
            'description'           => $request->input('description'),
            'attributes'            => $request->input('attributes'),
            'brand_code'            => $request->input('brand_code'),
            'promotion_status'      => $request->input('promotion_status'),
            // 'spec_info'             => $request->input('spec_info'),
            // 'size_info'             => $request->input('size_info'),
            'link_urls'             => $request->input('link_urls'),
            'branches'              => $request->input('branches'),
            'badges'                => $request->input('badges'),
            'keywords'              => $request->input('keywords'),
            'tags'                  => $request->input('tags'),
            'access_policy'         => $request->input('access_policy'),
            // 'addon_service_codes'   => $request->input('addon_service_codes'),
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
