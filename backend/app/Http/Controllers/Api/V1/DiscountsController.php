<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class DiscountsController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\Discount
     */
    protected $discount = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\Discount $discount)
    {
        $this->discount = $discount;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $response = $this->discount->index();

        return [
            'data'  => $response->data->_embedded->discounts,
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
        $response = $this->discount->show($id);

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
        $response = $this->discount->store($request);

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

        $response = $this->discount->update($request, $id);

        return [
            'item'  => $response->data,
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  Request $request
     * @return Response
     */
    public function destroy(Request $request)
    {
        return $this->discount->destroy($request);
    }
}
