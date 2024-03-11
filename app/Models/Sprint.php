<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sprint extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'start_date',
        'end_date'
    ];
    protected $attributes = [
        'start_date' => Carbon::now()
    ];
 
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }
}
