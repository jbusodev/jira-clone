<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Inertia::render('Project/Tasks', [
        //     'tasks' => Task::with('project:id,name')->latest()->get()
        // ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('tasks.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required',
            'desription' => 'nullable',
            'status' => 'required',
            'priority' => 'required',
            'due_date' => 'required' // if in sprint, takes sprint end_date
        ]);

        auth()->user()->tasks()->create($request->all());

        return redirect()->route('tasks.index')->with('success', 'Task created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Tasks/Task', [
            'tasks' => Task::with('project:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Task/Edit', [
            'user' => Task::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Task $sprint): RedirectResponse
    {
        $request->validate([
            'title' => 'required',
            'desription' => 'nullable',
            'status' => 'required',
            'priority' => 'required',
            'due_date' => 'required'
        ]);

        $sprint->update($request->all());

        return redirect()->route('tasks.index')->with('success', 'Task updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $sprint)
    {
        $sprint->delete();

        return redirect()->route('tasks.index')->with('success', 'Project deleted successfully.');
    }
}
