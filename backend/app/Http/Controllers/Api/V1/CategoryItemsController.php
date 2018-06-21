<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class CategoryItemsController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\CategoryItem
     */
    protected $categoryItem = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\CategoryItem $categoryItem)
    {
        $this->categoryItem = $categoryItem;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $response = $this->categoryItem->index();

        return [
            'data'  => $response->data->_embedded->category_items,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($category_id, $item_id)
    {
        $response = $this->categoryItem->show($category_id, $item_id);

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
        $response = $this->categoryItem->store($request);

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
    public function update(Request $request, $category_id, $item_id)
    {

        $response = $this->categoryItem->update($request, $category_id, $item_id);

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
    public function destroy($category_id, $item_id)
    {
        $response = $this->categoryItem->destroy($category_id, $item_id);

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

            $response = \Prismatix::resource('item.CategoryItem')->destroy([
                'category_code' => $id['category_code'],
                'item_code' => $id['item_code'],
            ]);

            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
