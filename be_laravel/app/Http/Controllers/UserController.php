<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['getAllUsers', 'getUserById']]);
        // $this->middleware('jwt.auth');
    }

    public function getAllUsers()
    {
        $users = User::getAllUsers();
        return response()->json($users);
    }

    public function getUserById($id)
    {
        $user = User::getUserById($id);

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }

    public function getAuthenticatedUser()
    {
        $user = Auth::user();

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
}
