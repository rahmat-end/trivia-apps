<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\User;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class UserController extends Controller
{

    // public function __construct()
    // {
    //     $this->middleware('jwt.auth');
    // }

    public function getAllUsers()
    {
        $users = User::getAllUsers();
        // return response()->json(['users' => $users], 200);
        return response()->json($users);
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

        return response()->json($user);
    }

    public function getUserById($id)
    {
        $user = User::getUserById($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => 'string',
            'email' => 'email|unique:users,email,' . $id,
            'password' => 'string',
            'username' => 'string',
            'role' => 'string',
            'diamond' => 'string',
            'thropy' => 'string',
            'avatar' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'avatar_string' => 'sometimes|string',
        ]);

        if ($request->hasFile('avatar')) {
            $imagePath = $request->file('avatar')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'avatar']);
            $secureUrl = $uploadResult->getSecurePath();

            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => $validatedData['password'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'diamond' => $validatedData['diamond'],
                'thropy' => $validatedData['thropy'],
                'avatar' => $secureUrl,
                'public_id' => $uploadResult->getPublicId(),
            ]);

            return response()->json($user);
        } elseif ($request->filled('avatar_string')) {
            $user = User::create([
                'name' => $validatedData['name'],
                'email' => $validatedData['email'],
                'password' => $validatedData['password'],
                'username' => $validatedData['username'],
                'role' => $validatedData['role'],
                'diamond' => $validatedData['diamond'],
                'thropy' => $validatedData['thropy'],
                'avatar' => $validatedData['avatar_string'],
            ]);

            return response()->json($user);
        } else {
            return response()->json(['error' => 'Either avatar or avatar_string must be provided.'], 400);
        }
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
