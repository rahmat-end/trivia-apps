<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = 'transactions';
    public $timestamps = true;
    protected $primaryKey = 'id_transaction';

    protected $fillable = [
        'amount_diamond',
        'total_price',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

    public function diamond()
    {
        return $this->belongsTo(Diamond::class, 'id_diamond', 'id_diamond');
    }
}
