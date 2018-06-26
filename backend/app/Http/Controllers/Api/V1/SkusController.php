<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class SkusController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\Sku
     */
    protected $sku = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\Sku $sku)
    {
        $this->sku = $sku;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $response = $this->sku->index();

        return [
            'data'  => $response->data->_embedded->skus,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $response = $this->sku->show($id);

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
    public function store(Request $request)
    {
        $response = $this->sku->store($request);

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
    public function update(Request $request, $id)
    {

        $response = $this->sku->update($request, $id);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        return $this->sku->destroy($request);
    }
}
