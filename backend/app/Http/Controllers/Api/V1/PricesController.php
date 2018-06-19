<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Log;

class PricesController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\Price
     */
    protected $price = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\Price $price)
    {
        $this->price = $price;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($skuCode)
    {
        $response = $this->price->index($skuCode);

        return [
            'data'  => $response->data->_embedded->prices,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($skuCode, $priceCode)
    {
        $response = $this->price->show($skuCode, $priceCode);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request, $skuCode)
    {
        $response = $this->price->store($request, $skuCode);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int      $id
     * @return Response
     */
    public function update(Request $request, $skuCode, $priceCode)
    {

        $response = $this->price->update($request, $skuCode, $priceCode);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($skuCode, $priceCode)
    {
        $response = $this->price->destroy($skuCode, $priceCode);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyMulti(Request $request, $skuCode)
    {
        $data = [];

        foreach ($request->input('ids') as $id) {
            Log::debug(">>>>>> destroyMulti: " . $id['sku_code'] . " ---- " . $id['price_code']);
            $response = \Prismatix::resource('item.Price')->destroy([
                'price_code' => $id['price_code'],
                'sku_code' => $id['sku_code'],
            ]);
            
            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
