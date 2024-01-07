<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FreeAvatar;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class FreeAvatarController extends Controller
{

    public function __construct()
    {
        // $this->middleware('jwt.auth', ['except' => ['getAllUsers', 'getUserById', 'getAvatarGratis', 'getAvatarBayar']]);
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        $FreeAvatars = FreeAvatar::getAllData();
        return response()->json($FreeAvatars);
    }

    public function store(Request $request)
    {
        // Validate and store the data
        $validatedData = $request->validate([
            'photo_freeavatar' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'photo_freeavatar_string' => 'sometimes|string', 
        ]);
        
        // Check if 'photo_FreeAvatar' is present in the request and it's a file
        if ($request->hasFile('photo_freeavatar')) {
            $imagePath = $request->file('photo_freeavatar')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'AvatarGratis']);
            $secureUrl = $uploadResult->getSecurePath();
        
            $buy = FreeAvatar::create([
                'photo_freeavatar' => $secureUrl,
                'public_id' => $uploadResult->getPublicId(),
            ]);
        
            return response()->json($buy);
        } elseif ($request->filled('photo_freeavatar_string')) {
            // Handle string input for 'photo_FreeAvatar' if provided
            $buy = FreeAvatar::create([
                'photo_freeavatar' => $validatedData['photo_freeavatar_string'],
            ]);
        
            return response()->json($buy);
        } else {
            // Handle the case when neither 'photo_FreeAvatar' nor 'photo_FreeAvatar_string' is provided
            return response()->json(['error' => 'Either photo_freeavatar or photo_freeavatar_string must be provided.'], 400);
        }
    }

    public function update(Request $request, $id)
    {
        // Validate and update the data
        $validatedData = $request->validate([
            'photo_freeavatar' => 'required|string',
        ]);

        $FreeAvatar = FreeAvatar::findOrFail($id);

        if (!$FreeAvatar) {
            return response()->json(['message' => 'Data Buy Avatar not found'], 404);
        }

        // Update data in the database
        $FreeAvatar->update([
            'photo_freeavatar' => $validatedData['photo_freeavatar'],
        ]);

        return response()->json($FreeAvatar);
    }

    public function destroy($id)
    {
        $FreeAvatar = FreeAvatar::findOrFail($id);
        $FreeAvatar->delete();

        return response()->json('avatar deleted successfully');
    }
}
