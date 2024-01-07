<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::getAllData();
        return response()->json($questions);
    }

    public function store(Request $request)
    {
        $request->validate([
            'the_question' => 'required',
            'photo_question' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // adjust file types and size as needed
            'answer_1' => 'required',
            'answer_2' => 'required',
            'answer_3' => 'required',
            'answer_4' => 'required',
        ]);

        $data = $request->all();

        if ($request->hasFile('photo_question')) {
            $imagePath = $request->file('photo_question')->getRealPath();
            $cloudinary = Cloudinary::upload($imagePath);
            $data['photo_question'] = $cloudinary->getSecurePath();
        }

        Question::create($data);

        return redirect()->route('questions.index')->with('success', 'Question created successfully.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'the_question' => 'required',
            'photo_question' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // adjust file types and size as needed
            'answer_1' => 'required',
            'answer_2' => 'required',
            'answer_3' => 'required',
            'answer_4' => 'required',
        ]);

        $question = Question::findOrFail($id);
        $data = $request->all();

        if ($request->hasFile('photo_question')) {
            $imagePath = $request->file('photo_question')->getRealPath();
            $cloudinary = Cloudinary::upload($imagePath);
            $data['photo_question'] = $cloudinary->getSecurePath();
        }

        $question->update($data);

        return redirect()->route('questions.index')->with('success', 'Question updated successfully.');
    }

    public function destroy($id)
    {
        $question = Question::findOrFail($id);
        $question->delete();

        return redirect()->route('questions.index')->with('success', 'Question deleted successfully.');
    }
}
