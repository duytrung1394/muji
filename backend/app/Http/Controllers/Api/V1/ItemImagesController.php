<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ItemImagesController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\ItemImage
     */
    protected $itemImage = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\ItemImage $itemImage)
    {
        $this->itemImage = $itemImage;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($itemCode)
    {
        $response = $this->itemImage->index($itemCode);

        return [
            'data'  => $response->data->_embedded->item_images,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($itemCode, $itemImageCode)
    {
        $response = $this->itemImage->show($itemCode, $itemImageCode);

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
    public function store(Request $request, $itemCode)
    {
        $response = $this->itemImage->store($request, $itemCode);

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
    public function update(Request $request, $itemCode, $itemImageCode)
    {

        $response = $this->itemImage->update($request, $itemCode, $itemImageCode);

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
    public function destroy($itemCode, $itemImageCode)
    {
        $response = $this->itemImage->destroy($itemCode, $itemImageCode);

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
            $response = \Prismatix::resource('item.ItemImage')->destroy([
                'item_code' => $id['item_code'],
                'item_image_code' => $id['item_image_code'],
            ]);
            
            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
