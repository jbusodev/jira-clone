<?php

namespace App\Listeners;

use App\Events\ProjectCreated;
use App\Models\User;
use App\Notifications\NewProject;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendProjectCreatedNotifications implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(ProjectCreated $event): void
    {
        foreach (User::whereNot('id', $event->project->user_id)->cursor() as $user) {
            $user->notify(new NewProject($event->project));
        }
    }
}
