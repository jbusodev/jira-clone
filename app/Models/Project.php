<?php

namespace App\Models;

use App\Events\ProjectCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];

    protected $dispatchesEvents = [
        'created' => ProjectCreated::class,
    ];

    public function user() : BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}