<?php
namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;

class ItemsController extends Controller
{

    /**
     * Prismatix Data Model
     *
     * @var \App\Models\Prismatix\Item
     */
    protected $item = null;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(\App\Models\Prismatix\Item $item)
    {
        $this->item = $item;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(Request $request)
    {
        $size = 10;

        $response = \Prismatix::resource('item.Item')->search([
            'from' => (($request->has('page') ? (int)$request->input('page') : 1) - 1) * $size,
            'size' => $size,
        ]);

        $items = [];

        if(!property_exists($response->data, 'hits')) {

            return [
                'data'  => [],
                'total' => 0,
            ];
        }

        foreach ($response->data->hits->hits as $hit) {

            $items[] = $hit->_source;
        }

        return [
            'data'  => $items,
            'total' => $response->data->hits->total,
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

        $response = \Prismatix::resource('item.Item')->showDocument([
            'item_code' => $id,
        ]);

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
        // TODO: 仮データ登録
        $this->validate($request, [
            'item.item_code'    => 'required|max:64',
            'item.item_name'    => 'required|max:64',
        ], [], [
            'item.item_code'    => 'JANコード',
            'item.item_name'    => '商品名',
        ]);

        $response = \Prismatix::resource('item.Item')->store([
            'lang'                  => 'ja_JP',
            'item_code'             => $request->input('item.item_code'),
            'status'                => 'PUBLISHED',
            'start_timestamp'       => 1508918790,
            'end_timestamp'         => 0,
            'item_name'             => $request->input('item.item_name'),
            'item_label'            => 'item_label',
            'item_code_alt'         => 'item_code_alt',
            'reservation_flag'      => true,
            'store_receive_flag'    => true,
            'priority'              => 0,
            'memo'                  => 'memo',
            'description'           => 'description',
        ]);

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
        // TODO: 仮データ更新
        $this->validate($request, [
            'item.item_code'    => 'required|max:64',
            'item.item_name'    => 'required|max:64',
        ], [], [
            'item.item_code'    => 'JANコード',
            'item.item_name'    => '商品名',
        ]);

        $response = \Prismatix::resource('item.Item')->update([
            'lang'                  => 'ja_JP',
            'item_code'             => $id,
            'status'                => 'PUBLISHED',
            'start_timestamp'       => 1508918790,
            'end_timestamp'         => 0,
            'item_name'             => $request->input('item.item_name'),
        ]);

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
        return $this->item->destroy($request);
    }
}
