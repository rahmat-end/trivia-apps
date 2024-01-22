<?php

namespace App\Http\Controllers\UseByUser;

use App\Http\Controllers\Controller;

use App\Models\BuyAvatar;
use App\Models\UserBuyAvatar;
use Tymon\JWTAuth\Facades\JWTAuth;


class UserAvatarShop extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        $avatars = UserBuyAvatar::all();
        return response()->json($avatars);
    }

    public function getTransactionData($id)
    {
        $avatar = UserBuyAvatar::find($id);
        return response()->json($avatar);
    }

    public function BuyAvatarByUser($id)
    {
        $avatar = BuyAvatar::getBuyAvatarById($id);

        $user = JWTAuth::parseToken()->authenticate();

        if ($user->diamond >= $avatar->price_buyavatar) {
            $user->diamond -= $avatar->price_buyavatar;
            $user->save();

            $transaction = new UserBuyAvatar();
            $transaction->user_id = $user->user_id;
            $transaction->id_buyavatar = $avatar->id_buyavatar;

            $transaction->save();

            $transactionWithRelations = UserBuyAvatar::with('user', 'buyAvatar')->find($transaction->id_user_buy_avatar);

            return response()->json(['message' => 'Avatar berhasil dibeli!', 'data' => $transactionWithRelations], 200);
        } else {
            return redirect()->back()->with('error', 'Diamond tidak mencukupi untuk pembelian avatar ini.');
        }
    }

    public function aBuyAvatarByUser($id)
{
    $avatar = BuyAvatar::getBuyAvatarById($id);

    $user = JWTAuth::parseToken()->authenticate();

    // Memeriksa apakah transaksi sudah ada
    $existingTransaction = UserBuyAvatar::where('user_id', $user->user_id)
        ->where('id_buyavatar', $avatar->id_buyavatar)
        ->first();

    if ($existingTransaction) {
        return response()->json(['error' => 'Avatar ini sudah dibeli.'], 400);
    }

    if ($user->diamond >= $avatar->price_buyavatar) {
        $user->diamond -= $avatar->price_buyavatar;
        $user->save();

        $transaction = new UserBuyAvatar();
        $transaction->user_id = $user->user_id;
        $transaction->id_buyavatar = $avatar->id_buyavatar;

        $transaction->save();

        $transactionWithRelations = UserBuyAvatar::with('user', 'buyAvatar')->find($transaction->id_user_buy_avatar);

        return response()->json(['message' => 'Avatar berhasil dibeli!', 'data' => $transactionWithRelations], 200);
    } else {
        return redirect()->back()->with('error', 'Diamond tidak mencukupi untuk pembelian avatar ini.');
    }
}


    public function GetBuyAvatarByUser($id)
    {
        $user = JWTAuth::user();

        $avatars = UserBuyAvatar::with(['user', 'buyAvatar'])
            ->where('user_id', $id)
            ->get();

        if ($user->user_id == $id) {
            return response()->json($avatars);
        }

        return response()->json(['data' => $avatars], 200);
    }
}