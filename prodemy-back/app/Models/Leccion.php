<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leccion extends Model
{
    use HasFactory;
    protected $fillable = [
        'tema',
        'contenido',
        'video',
        'tipo',
        'curso_id',
    ];
    public $timestamps = false;
}
