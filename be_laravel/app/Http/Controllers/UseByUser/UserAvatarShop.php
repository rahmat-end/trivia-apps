<?php

namespace App\Http\Controllers\UseByUser;

use App\Http\Controllers\Controller;

use App\Models\BuyAvatar;
use App\Models\UserBuyAvatar;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserAvatarShop extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('jwt.auth');
    // }

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

        // return response()->json(['user' => $user, 'avatar' => $avatar], 200);

        if ($user->diamond >= $avatar->price_buyavatar) {
            $user->diamond -= $avatar->price_buyavatar;
            $user->save();

            $transaction = new UserBuyAvatar();
            $transaction->user_id = $user->user_id;
            $transaction->id_buyavatar = $avatar->id_buyavatar;

            $transaction->save();

            $transactionWithRelations = UserBuyAvatar::with('user', 'buyAvatar')->find($transaction->id_user_buy_avatar);

        return response()->json(['message' => 'Avatar berhasil dibeli!', 'transaction' => $transactionWithRelations], 200);

        } else {
            return redirect()->back()->with('error', 'Diamond tidak mencukupi untuk pembelian avatar ini.');
        }
    }
}
