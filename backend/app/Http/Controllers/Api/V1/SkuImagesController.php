<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Log;

class SkuImagesController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\SkuImage
     */
    protected $skuImage = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\SkuImage $skuImage)
    {
        $this->skuImage = $skuImage;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($skuCode)
    {
        $response = $this->skuImage->index($skuCode);

        return [
            'data'  => $response->data->_embedded->sku_images,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($skuCode, $skuImageCode)
    {
        $response = $this->skuImage->show($skuCode, $skuImageCode);

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
        $response = $this->skuImage->store($request, $skuCode);

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
    public function update(Request $request, $skuCode, $skuImageCode)
    {

        $response = $this->skuImage->update($request, $skuCode, $skuImageCode);

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
    public function destroy($skuCode, $skuImageCode)
    {
        $response = $this->skuImage->destroy($skuCode, $skuImageCode);

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
    public function destroyMulti(Request $request)
    {
        $data = [];

        foreach ($request->input('ids') as $id) {
            $response = \Prismatix::resource('item.SkuImage')->destroy([
                'sku_code' => $id['sku_code'],
                'sku_image_code' => $id['sku_image_code'],
            ]);
            
            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
