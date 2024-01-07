<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserBuyAvatar extends Model
{
    use HasFactory;

    protected $table = 'user_buy_avatar';
    public $timestamps = true;

    protected $fillable = [
        'user_id',
        'id_buyavatar',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function buyAvatar()
    {
        return $this->belongsTo(BuyAvatar::class, 'id_buyavatar');
    }
}
