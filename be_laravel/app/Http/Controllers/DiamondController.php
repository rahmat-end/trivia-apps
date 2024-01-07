<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Diamond;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class DiamondController extends Controller
{

    public function __construct()
    {
        // $this->middleware('jwt.auth', ['except' => ['getAllUsers', 'getUserById', 'getAvatarGratis', 'getAvatarBayar']]);
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        $Diamonds = Diamond::getAllData();
        return response()->json($Diamonds);
    }

    public function store(Request $request)
    {
        // Validate and store the data
        $validatedData = $request->validate([
            'amount_diamond' => 'required|numeric',
            'price_diamond' => 'required|numeric',
        ]);

        $diamond = diamond::create([
            'amount_diamond' => $validatedData['amount_diamond'],
            'price_diamond' => $validatedData['price_diamond'],
        ]);

        return response()->json($diamond);
    }


    public function update(Request $request, $id)
    {
        // Validate and update the data
        $validatedData = $request->validate([
            'amount_diamond' => 'required|numeric',
            'price_diamond' => 'required|numeric',
        ]);

        $diamond = Diamond::findOrFail($id);

        if (!$diamond) {
            return response()->json(['message' => 'Data Buy Avatar not found'], 404);
        }

        // Update data in the database
        $diamond->update([
            'amount_diamond' => $validatedData['amount_diamond'],
            'price_diamond' => $validatedData['price_diamond'],
        ]);

        return response()->json($diamond);
    }


    public function destroy($id)
    {
        $Diamond = Diamond::findOrFail($id);
        $Diamond->delete();

        return response()->json('avatar deleted successfully');
    }
}
