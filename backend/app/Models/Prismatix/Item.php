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
/*    public function index()
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            'size' => 10,
        ]);

        return $response;
    }*/

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
/*    public function show($id)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $id,
        ]);

        return $response;
    }*/

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
            'item_code',
            'status',
            'start_timestamp',
            'end_timestamp',
            'item_name',
            'item_label',
            'item_code_alt',
            'reservation_flag',
            'store_receive_flag',
            'priority',
            'memo',
            'description',
            'attributes',
            'brand_code',
            'promotion_status',
            'spec_info',
            'size_info',
            'link_urls',
            'branches',
            'badges',
            'keywords',
            'tags',
            'access_policy',
            'addon_service_codes',
        ] as $property) {

            if ($request->has('item.' . $property)) {

                $body[$property] = $request->input('item.' . $property);
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
            'item_code',
            'status',
            'start_timestamp',
            'end_timestamp',
            'item_name',
            'item_label',
            'item_code_alt',
            'reservation_flag',
            'store_receive_flag',
            'priority',
            'memo',
            'description',
            'attributes',
            'brand_code',
            'promotion_status',
            'spec_info',
            'size_info',
            'link_urls',
            'branches',
            'badges',
            'keywords',
            'tags',
            'access_policy',
        ] as $property) {

            if ($request->has('item.' . $property)) {
                if ($property === 'memo' || $property === 'description') {
                    $body[$property] = str_replace(["\r\n", "\n", "\r"], "\\n", $request->input('item.' . $property));
                } else {
                    $body[$property] = $request->input('item.' . $property);
                }
            }
        }
        return \Prismatix::resource($this->resourceKey)->update($body);
    }

    /**
     * Remove somev resources from storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        $data = [];

        foreach ($request->input('codes') as $code) {

            $response = \Prismatix::resource($this->resourceKey)->destroy([
                $this->rootParamName => $code,
            ]);

            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
