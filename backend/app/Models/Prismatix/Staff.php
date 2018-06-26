<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Staff extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Staff';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'staff_code';

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
            'staff_code',
            'name',
            'store_code',
            'deleted',
            'attributes',
            'access_policy',
        ] as $property) {

            if ($request->has('staff.' . $property)) {

                $body[$property] = $request->input('staff.' . $property);
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
            'staff_code',
            'name',
            'store_code',
            'deleted',
            'attributes',
            'access_policy',
        ] as $property) {

            if ($request->has('staff.' . $property)) {

                $body[$property] = $request->input('staff.' . $property);
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
