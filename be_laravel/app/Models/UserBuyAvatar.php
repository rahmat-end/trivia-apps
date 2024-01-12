<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBuyAvatar extends Model
{
    use HasFactory;

    protected $table = 'user_buy_avatars';
    public $timestamps = true;
    protected $primaryKey = 'id_user_buy_avatar';

    protected $fillable = [
        'user_id',
        'id_buyavatar',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function buyAvatar()
    {
        return $this->belongsTo(BuyAvatar::class, 'id_buyavatar', 'id_buyavatar');
    }
}
