<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Log;

class CategoryImagesController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\CategoryImage
     */
    protected $categoryImage = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\CategoryImage $categoryImage)
    {
        $this->categoryImage = $categoryImage;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index($categoryCode)
    {
        $response = $this->categoryImage->index($categoryCode);

        return [
            'data'  => $response->data->_embedded->category_images,
            'total' => $response->data->chunk->size,
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($categoryCode, $categoryImageCode)
    {
        $response = $this->categoryImage->show($categoryCode, $categoryImageCode);

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
    public function store(Request $request, $categoryCode)
    {
        $response = $this->categoryImage->store($request, $categoryCode);

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
    public function update(Request $request, $categoryCode, $categoryImageCode)
    {

        $response = $this->categoryImage->update($request, $categoryCode, $categoryImageCode);

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
    public function destroy($categoryCode, $categoryImageCode)
    {
        $response = $this->categoryImage->destroy($categoryCode, $categoryImageCode);

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
            $response = \Prismatix::resource('item.CategoryImage')->destroy([
                'category_code' => $id['category_code'],
                'category_image_code' => $id['category_image_code'],
            ]);
            
            $data[] = $response->data;
        }

        return [
            'data'  => $data,
            'count' => count($data),
        ];
    }
}
