<?php

namespace App\Http\Controllers\UseByUser;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\User;

class UserProfile extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('jwt.auth');
    // }

    public function getUserById($id)
    {
        $user = User::getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $user], 200);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'string',
            'username' => 'string|min:8|max:10',
            'avatar' => 'string',
        ]);

        $user = User::getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $userData = $user->toArray();

        $user->update(array_merge($userData, $request->all()));

        return response()->json(['user' => $user], 200);
    }
}
