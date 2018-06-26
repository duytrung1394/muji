<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Discount extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Discount';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'discount_code';

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
            'discount_code',
            'discount_name',
            'start_timestamp',
            'end_timestamp',
            'discount_kind',
            'discount_type',
            'discount_value',
            'description',
            'attributes',
            'item_codes',
            'access_policy',
        ] as $property) {

            if ($request->has('discount.' . $property)) {

                $body[$property] = $request->input('discount.' . $property);
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
            'discount_code',
            'discount_name',
            'start_timestamp',
            'end_timestamp',
            'discount_kind',
            'discount_type',
            'discount_value',
            'description',
            'attributes',
            'access_policy',
        ] as $property) {

            if ($request->has('discount.' . $property)) {

                $body[$property] = $request->input('discount.' . $property);
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
