<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class CategoryImage extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.CategoryImage';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'category_code';
    protected $rootImageParamName = 'category_image_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($categoryCode)
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            $this->rootParamName => $categoryCode,
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
    public function show($categoryCode, $categoryImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $categoryCode,
            $this->rootImageParamName => $categoryImageCode,
        ]);

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, $categoryCode)
    {
        $body = [];

        foreach ([
            'lang',
            'category_code',
            'category_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
            'deleted',
            'attributes',
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
    public function update(Request $request, $categoryCode, $categoryImageCode)
    {
        $body = [];

        foreach ([
            'lang',
            'category_code',
            'category_image_code',
            'image_index',
            'image_size',
            'image_url',
            'status',
            'deleted',
            'attributes',
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
    public function destroy($categoryCode, $categoryImageCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $categoryCode,
            $this->rootImageParamName => $categoryImageCode,
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
