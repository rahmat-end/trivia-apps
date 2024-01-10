<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BuyAvatar extends Model
{
    use HasFactory;

    public $timestamps = true;
    protected $table = 'buy_avatars';
    protected $primaryKey = 'id_buyavatar';

    protected $fillable = [
        'id_buyavatar',
        'photo_buyavatar',
        'price_buyavatar',
    ];

    public static function getAllData()
    {
        return self::all();
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_buy_avatar', 'buy_avatar_id', 'user_id');
    }
}
