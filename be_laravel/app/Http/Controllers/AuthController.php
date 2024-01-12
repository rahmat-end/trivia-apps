<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make(request()->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $lastUserId = User::max('user_id');

        $user = User::create([
            'user_id' => $lastUserId + 1,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make(request('password')),
            'role' => 'Super Admin',
        ]);

        if (!$user) {
            return response()->json(['message' => 'User registration failed'], 500);
        }

        return response()->json([
            'user' => $user,
            'user_id' => $user->user_id,
            'message' => 'User registered successfully'
        ]);
    }

    public function registerNewUser(Request $request)
    {

        $validator = Validator::make(request()->all(), [
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:8',
            'profile' => 'string',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages());
        }

        $lastUserId = User::max('user_id');

        $user = User::create([
            'user_id' => $lastUserId + 1,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make(request('password')),
            'profile' => $this->removeImageSizeFromUrl($request->profile),
            'role' => 'user',
            'username' => $request->name,
            'avatar' => $request->profile,
            'diamond' => 0,
            'throphy' => 0,
        ]);

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'token' => $token,
            'user' => $user->user_id,
        ]);
    }

    private function removeImageSizeFromUrl($avatarUrl)
    {
        // Mencari dan menghapus bagian "=s96-c" dari URL avatar
        return preg_replace('/=s\d+-c$/', '', $avatarUrl);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        return $this->respondWithToken($token);
    }

    protected function respondWithToken($token)
    {
        $user = auth()->user();
        $payload = [
            'id' => $user->user_id,
            'exp' => time() + JWTAuth::factory()->getTTL() * 99999
        ];

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $payload['exp'],
            'user' => $payload['id']
        ]);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(JWTAuth::refresh());
    }
}
