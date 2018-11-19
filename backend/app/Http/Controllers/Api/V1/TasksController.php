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
            'data' => Task::find($id),
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
            'data' => $task,
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
            'data' => $task,
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
        $count = Task::destroy($request->input('codes'));

        return [
            'count' => $count,
        ];
    }
}
