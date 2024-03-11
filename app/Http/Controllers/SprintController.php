<?php

namespace App\Http\Controllers;

use App\Models\Sprint;
use App\Http\Requests\StoreSprintRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SprintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Sprints/Index', [
            'sprints' => Sprint::with('project:id,name')->latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('sprints.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'start_date' => 'required',
            'end_date' => 'nullable',
        ]);

        auth()->user()->sprints()->create($request->all());

        return redirect()->route('sprints.index')->with('success', 'Sprint created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('Sprints/Index', [
            'sprints' => Sprint::with('project:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Sprint/Sprint', [
            'user' => Sprint::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Sprint $sprint): RedirectResponse
    {
        $request->validate([
            'name' => 'required',
            'start_date' => 'required',
            'end_date' => 'nullable',
        ]);

        $sprint->update($request->all());

        return redirect()->route('sprints.index')->with('success', 'Sprint updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Sprint $sprint)
    {
        $sprint->delete();

        return redirect()->route('sprints.index')->with('success', 'Project deleted successfully.');
    }
}
