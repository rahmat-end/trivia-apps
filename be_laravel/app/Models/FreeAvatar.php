<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreeAvatar extends Model
{
    use HasFactory;

    public $timestamps = true;
    protected $table = 'free_avatar';
    protected $primaryKey = 'id_freeavatar';

    protected $fillable = [
        'id_freeavatar',
        'photo_freeavatar',
    ];

    public static function getAllData()
    {
        return self::all();
    }
}
