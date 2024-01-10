<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function getAllUsers()
    {
        $users = User::getAllUsers();
        return response()->json(['users' => $users], 200);
    }

    public function store(Request $request)
    {
        // Validate the request data
        $validator = Validator::make(request()->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        // Create a new user
        $user = User::create([
            'user_id' => Uuid::uuid4()->toString(),
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make(request('password')),
            'role' => 'Admin',
            'username' => $request->name,
            'avatar' => 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        ]);

        if (!$user) {
            return response()->json(['message' => 'User registration failed'], 500);
        }

        return response()->json(['user' => $user], 201);
    }

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
        // Validate the request data
        $this->validate($request, [
            'name' => 'string',
            'email' => 'email|unique:users,email,' . $id,
            'password' => 'string',
            'username' => 'string',
            'role' => 'string',
            'diamond' => 'string',
            'thropy' => 'string',
            'avatar' => 'string',
            // Add other validation rules based on your needs
        ]);

        $user = User::getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $userData = $user->toArray();

        // Update the user
        $user->update(array_merge($userData, $request->all()));

        return response()->json(['user' => $user], 200);
    }

    public function destroy($id)
    {
        $user = User::getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
