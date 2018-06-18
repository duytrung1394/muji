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
            'lang'                  => $request->input('lang'),                 // ja_JP
            'item_code'             => $request->input('item_code'),
            'item_label'            => $request->input('item_label'),
            'item_code_alt'         => $request->input('item_code_alt'),
            'reservation_flag'      => $request->input('reservation_flag'),     // false, true
            'store_receive_flag'    => $request->input('store_receive_flag '),  // false, true
            'priority'              => $request->input('priority'),             // 0, 1, 2, ....
            'status'                => $request->input('status'),               // PUBLISHED
            'start_timestamp'       => $request->input('start_timestamp'),      // 0
            'end_timestamp'         => $request->input('end_timestamp'),        // 0
            'item_name'             => $request->input('item_name'),
            'memo'                  => $request->input('memo'),
            'description'           => $request->input('description'),
            // 'attributes'            => $request->input('attributes'),         // {}
            'brand_code'            => $request->input('brand_code'),
            'promotion_status'      => $request->input('promotion_status'),
            // 'spec_info'             => $request->input('spec_info'),             // {}
            // 'size_info'             => $request->input('size_info'),             // {}
            // 'link_urls'             => $request->input('link_urls'),             // [ {} ]
            // 'branches'              => $request->input('branches'),              // [ string ]
            // 'badges'                => $request->input('badges'),                // [ string ]
            // 'addon_service_codes'   => $request->input('addon_service_codes'),   // [ string ]
            // 'keywords'              => $request->input('keywords'),              // [ string ]
            // 'tags'                  => $request->input('tags'),                  // [ string ]
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
            'lang'              => $request->input('lang'),
            'category_code'     => $request->input('category_code'),
            'status'            => $request->input('status'),
            'start_timestamp'   => $request->input('start_timestamp'),
            'end_timestamp'     => $request->input('end_timestamp'),
            'category_name'     => $request->input('category_name'),
            'facet_disp_flag'   => $request->input('facet_disp_flag'),
            // TODO: ...
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
