<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Diamond;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class DiamondController extends Controller
{

    public function __construct()
    {
        // $this->middleware('jwt.auth', ['except' => ['getAllUsers', 'getUserById', 'getAvatarGratis', 'getAvatarBayar']]);
        // $this->middleware('jwt.auth');
    }

    public function index()
    {
        $Diamonds = Diamond::getAllData();
        return response()->json($Diamonds);
    }

    public function getDiamondById($id)
    {
        $Diamond = Diamond::getDiamondById($id);

        if (!$Diamond) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json(['user' => $Diamond], 200);
    }

    public function store(Request $request)
    {
        // Validate and store the data
        $validatedData = $request->validate([
            'photo_diamond' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Untuk file gambar
            'amount_diamond' => 'required|numeric',
            'price_diamond' => 'required|numeric',
        ]);

        if ($request->hasFile('photo_diamond')) {
            $imagePath = $request->file('photo_diamond')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'Diamond']);
            $secureUrl = $uploadResult->getSecurePath();

            $diamond = diamond::create([
                'photo_diamond' => $secureUrl,
                'amount_diamond' => $validatedData['amount_diamond'],
                'price_diamond' => $validatedData['price_diamond'],
                'public_id' => $uploadResult->getPublicId(),
            ]);

            return response()->json($diamond);
        }
    }


    public function update(Request $request, $id)
    {
        // Validate and update the data
        $validatedData = $request->validate([
            'photo_diamond' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'photo_diamond_string' => 'sometimes|string',
            'amount_diamond' => 'required|numeric',
            'price_diamond' => 'required|numeric',
        ]);

        $diamond = Diamond::findOrFail($id);

        if (!$diamond) {
            return response()->json(['message' => 'Data Buy Avatar not found'], 404);
        }

        // Update data in the database
        if ($request->hasFile('photo_diamond')) {
            $imagePath = $request->file('photo_diamond')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'Diamond']);
            $secureUrl = $uploadResult->getSecurePath();
        
            $Diamond = Diamond::create([
                'photo_diamond' => $secureUrl,
                'amount_diamond' => $validatedData['price_diamond'],
                'amount_diamond' => $validatedData['amount_diamond'],
                'public_id' => $uploadResult->getPublicId(),
            ]);
        
            return response()->json($Diamond);
        } elseif ($request->filled('photo_diamond_string')) {
            // Handle string input for 'photo_diamond' if provided
            $Diamond = Diamond::create([
                'photo_diamond' => $validatedData['photo_diamond_string'],
                'amount_diamond' => $validatedData['amount_diamond'],
                'price_diamond' => $validatedData['price_diamond'],
            ]);
        
            return response()->json($Diamond);
        } else {
            return response()->json(['error' => 'Either photo_diamond or photo_diamond_string must be provided.'], 400);
        }
    }


    public function destroy($id)
    {
        $Diamond = Diamond::findOrFail($id);
        $Diamond->delete();

        return response()->json('avatar deleted successfully');
    }
}
