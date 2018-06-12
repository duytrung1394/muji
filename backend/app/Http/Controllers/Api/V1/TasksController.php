<?php
namespace App\Http\Controllers\Api\V1;

use App\Task;
use Illuminate\Http\Request;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Task::paginate(10);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        return [
            'item' => Task::find($id),
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

        $this->validate($request, [
            'task.name'         => 'required|max:64',
            'task.description'  => 'required|max:1024',
        ], [], [
            'task.name'         => 'タスク名',
            'task.description'  => 'タスク詳細',
        ]);

        $task = Task::create([
            'name'          => $request->input('task.name'),
            'description'   => $request->input('task.description'),
        ]);

        return [
            'item' => $task,
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

        $this->validate($request, [
            'task.name'         => 'required|max:64',
            'task.description'  => 'required|max:1024',
        ], [], [
            'task.name'         => 'タスク名',
            'task.description'  => 'タスク詳細',
        ]);

        $task = Task::find($id);

        $task
            ->fill([
                'name'          => $request->input('task.name') ,
                'description'   => $request->input('task.description') ,
            ])
            ->save();

        return [
            'item' => $task,
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {

        $task = Task::find($id);

        $task->delete();

        return [
            'item' => $task,
        ];
    }

    /**
     * Remove the specified resources from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroyMulti(Request $request)
    {
        $ids = explode(',', $request->input('ids'));
        $count = Task::destroy($ids);

        return [
            'count' => $count,
        ];
    }
}
