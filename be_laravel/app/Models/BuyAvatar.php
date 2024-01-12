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

    public static function getBuyAvatarById($id)
    {
        return self::find($id);
    }

    public function userBuyAvatars()
    {
        return $this->hasMany(UserBuyAvatar::class, 'id_buyavatar', 'id_buyavatar');
    }
}
