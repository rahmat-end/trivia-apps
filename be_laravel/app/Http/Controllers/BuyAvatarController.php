<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BuyAvatar;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class BuyAvatarController extends Controller
{

    public function __construct()
    {
        // $this->middleware('jwt.auth', ['except' => ['getAllUsers', 'getUserById', 'getAvatarGratis', 'getAvatarBayar']]);
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        $buyAvatars = BuyAvatar::getAllData();
        return response()->json($buyAvatars);
    }

    public function store(Request $request)
    {
        // Validate and store the data
        $validatedData = $request->validate([
            'photo_buyavatar' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048', // Untuk file gambar
            'photo_buyavatar_string' => 'sometimes|string', // Untuk string
            'price_buyavatar' => 'required|numeric',
        ]);
        
        // Check if 'photo_buyavatar' is present in the request and it's a file
        if ($request->hasFile('photo_buyavatar')) {
            $imagePath = $request->file('photo_buyavatar')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'AvatarBerbayar']);
            $secureUrl = $uploadResult->getSecurePath();
        
            $buy = BuyAvatar::create([
                'photo_buyavatar' => $secureUrl,
                'price_buyavatar' => $validatedData['price_buyavatar'],
                'public_id' => $uploadResult->getPublicId(),
            ]);
        
            return response()->json($buy);
        } elseif ($request->filled('photo_buyavatar_string')) {
            // Handle string input for 'photo_buyavatar' if provided
            $buy = BuyAvatar::create([
                'photo_buyavatar' => $validatedData['photo_buyavatar_string'],
                'price_buyavatar' => $validatedData['price_buyavatar'],
            ]);
        
            return response()->json($buy);
        } else {
            // Handle the case when neither 'photo_buyavatar' nor 'photo_buyavatar_string' is provided
            return response()->json(['error' => 'Either photo_buyavatar or photo_buyavatar_string must be provided.'], 400);
        }
    }

    public function update(Request $request, $id)
    {
        // Validate and update the data
        $validatedData = $request->validate([
            'price_buyavatar' => 'required|numeric',
        ]);

        $buyAvatar = BuyAvatar::findOrFail($id);

        if (!$buyAvatar) {
            return response()->json(['message' => 'Data Buy Avatar not found'], 404);
        }

        // Update data in the database
        $buyAvatar->update([
            'price_buyavatar' => $validatedData['price_buyavatar'],
        ]);

        return response()->json($buyAvatar);
    }

    public function destroy($id)
    {
        $buyAvatar = BuyAvatar::findOrFail($id);
        $buyAvatar->delete();

        return response()->json('avatar deleted successfully');
    }
}
