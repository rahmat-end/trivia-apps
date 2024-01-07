<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    public $timestamps = true;
    protected $table = 'question';
    protected $primaryKey = 'id_question';

    protected $fillable = [
        'id_question',
        'the_question',
        'photo_question',
        'answer_1',
        'answer_2',
        'answer_3',
        'answer_4',
    ];

    public static function getAllData()
    {
        return self::all();
    }
}
