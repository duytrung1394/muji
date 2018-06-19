<?php

namespace App\Models\Prismatix;

use Illuminate\Http\Request;

class Price extends PrismatixModel
{

    /**
     * Prismatix resource key
     *
     * @var string
     */
    // TODO: sdk側で列挙
    protected $resourceKey = 'item.Price';

    /**
     * Prismatix resource key
     *
     * @var string
     */
    protected $rootParamName = 'price_code';
    protected $rootSkuParamName = 'sku_code';

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($skuCode)
    {
        // TODO: pagination
        $response = \Prismatix::resource($this->resourceKey)->index([
            $this->rootSkuParamName => $skuCode,
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
    public function show($skuCode, $priceCode)
    {
        $response = \Prismatix::resource($this->resourceKey)->show([
            $this->rootParamName => $priceCode,
            $this->rootSkuParamName => $skuCode,
        ]);

        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, $skuCode)
    {
        $body = [];

        foreach ([
            'sku_code',
            'price_code',
            'currency_code',
            'member_type',
            'start_timestamp',
            'end_timestamp',
            'price_std_ex_vat',
            'price_std_in_vat',
            'price_ex_vat',
            'price_in_vat',
            'priority',
            'discount_reason',
            'attributes',
            'branches',
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
            'sku_code',
            'price_code',
            'currency_code',
            'member_type',
            'start_timestamp',
            'end_timestamp',
            'price_std_ex_vat',
            'price_std_in_vat',
            'price_ex_vat',
            'price_in_vat',
            'priority',
            'discount_reason',
            'attributes',
            'branches',
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
    public function destroy($skuCode, $priceCode)
    {

        $response = \Prismatix::resource($this->resourceKey)->destroy([
            $this->rootParamName => $priceCode,
            $this->rootSkuParamName => $skuCode,
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
