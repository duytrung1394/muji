<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Brand extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Brand';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'brand_code';

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
            'brand_code',
            'brand_name',
            'status',
            'parent_brand_code',
            'image_url',
            'detail_url',
            'zip_code',
            'country',
            'state',
            'city',
            'address1',
            'address2',
            'tel',
            'deleted',
            'description',
            'attributes',
            'access_policy',
        ] as $property) {

            if ($request->has('brand.' . $property)) {

                $body[$property] = $request->input('brand.' . $property);
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
            'brand_code',
            'brand_name',
            'status',
            'parent_brand_code',
            'image_url',
            'detail_url',
            'zip_code',
            'country',
            'state',
            'city',
            'address1',
            'address2',
            'tel',
            'deleted',
            'description',
            'attributes',
            'access_policy',
        ] as $property) {

            if ($request->has('brand.' . $property)) {

                $body[$property] = $request->input('brand.' . $property);
            }
        }

        return \Prismatix::resource($this->resourceKey)->update($body);
    }

    /**
     * Remove somev resources from storage.
     *
     * @param  Request $request
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
