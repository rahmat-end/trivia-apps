<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diamond extends Model
{
    use HasFactory;

    public $timestamps = true;
    protected $table = 'diamonds';
    protected $primaryKey = 'id_diamond';

    protected $fillable = [
        'id_diamond',
        'photo_diamond',
        'amount_diamond',
        'price_diamond',
    ];

    public static function getAllData()
    {
        return self::all();
    }

    public static function getDiamondById($id)
    {
        return self::find($id);
    }
}
