<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CategoriesController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\Category
     */
    protected $category = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\Category $category)
    {
        $this->category = $category;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $responce = $this->category->index();

        return [
            'data'  => $responce->data->_embedded->categories,
            'total' => $responce->data->chunk->size,
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
        $responce = $this->category->show($id);

        return [
            'item'  => $responce->data,
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
        $responce = $this->category->store($request);

        return [
            'item'  => $responce->data,
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

        $responce = $this->category->update($request, $id);

        return [
            'item'  => $responce->data,
        ];
    }

    /**
     * Remove some resources from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(Request $request)
    {
        return $this->category->destroy($request);
    }
}
