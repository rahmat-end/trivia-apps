<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\Question;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    // public function index()
    // {
    //     $questions = Question::getAllData();
    //     return response()->json($questions);
    // }

    // public function getQuestionById($id)
    // {
    //     $Question = Question::getQuestionById($id);

    //     if (!$Question) {
    //         return response()->json(['message' => 'User not found'], 404);
    //     }

    //     return response()->json(['user' => $Question], 200);
    // }

    // public function store(Request $request)
    // {
    //     $request->validate([
    //         'the_question' => 'required',
    //         'photo_question' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    //         'answer_1' => 'required',
    //         'answer_2' => 'required',
    //         'answer_3' => 'required',
    //         'answer_4' => 'required',
    //     ]);

    //     $data = $request->all();

    //     if ($request->hasFile('photo_question')) {
    //         $imagePath = $request->file('photo_question')->getRealPath();
    //         $cloudinary = Cloudinary::upload($imagePath);
    //         $data['photo_question'] = $cloudinary->getSecurePath();
    //     }

    //     $quest = Question::create($data);

    //     return response()->json(['question' => $quest], 200);
    // }

    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'the_question' => 'required',
    //         'photo_question' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    //         'answer_1' => 'required',
    //         'answer_2' => 'required',
    //         'answer_3' => 'required',
    //         'answer_4' => 'required',
    //     ]);

    //     $question = Question::findOrFail($id);
    //     $data = $request->all();

    //     if ($request->hasFile('photo_question')) {
    //         $imagePath = $request->file('photo_question')->getRealPath();
    //         $cloudinary = Cloudinary::upload($imagePath);
    //         $data['photo_question'] = $cloudinary->getSecurePath();
    //     }

    //     $question->update($data);

    //     return redirect()->route('questions.index')->with('success', 'Question updated successfully.');
    // }

    // public function destroy($id)
    // {
    //     $question = Question::findOrFail($id);
    //     $question->delete();

    //     return redirect()->route('questions.index')->with('success', 'Question deleted successfully.');
    // }

    public function index()
    {
        $questions = Question::getAllData();
        return response()->json($questions);
    }

    public function getQuestionById($id)
    {
        $question = Question::getQuestionById($id);

        if (!$question) {
            return response()->json(['message' => 'Question not found'], 404);
        }

        return response()->json(['question' => $question], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'the_question' => 'required|string',
            'profile' => 'required|image|mimes:jpeg,png,jpg,gif',
            'answers' => 'required|array',
            'answers.*.answer' => 'required|string',
            'answers.*.isTrue' => 'required|string',
        ]);

        $data = $request->all();

        if ($request->hasFile('profile')) {
            $imagePath = $request->file('profile')->getRealPath();
            $uploadResult = Cloudinary::upload($imagePath, ['folder' => 'Question']);
            $data['profile'] = $uploadResult->getSecurePath();
        }

        $answers = [];

        if (is_array($data['answers'])) {
            foreach ($data['answers'] as $answer) {
                if (isset($answer['answer']) && isset($answer['isTrue'])) {
                    $answers[] = [
                        'answer' => $answer['answer'],
                        'isTrue' => filter_var($answer['isTrue'], FILTER_VALIDATE_BOOLEAN),
                    ];
                }
            }
        }

        $data['answers'] = $answers;

        $question = Question::create($data);

        return response()->json(['question' => $question], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'the_question' => 'required|string',
            'profile' => 'required|string',
            'answers' => 'required|array|min:4',
            'answers.*.answer' => 'required|string',
            'answers.*.isTrue' => 'required|boolean',
        ]);

        $question = Question::findOrFail($id);
        $data = $request->all();

        if ($request->hasFile('photo_question')) {
            $imagePath = $request->file('photo_question')->getRealPath();
            $cloudinary = Cloudinary::upload($imagePath);
            $data['photo_question'] = $cloudinary->getSecurePath();
        }

        $question->update($data);

        return response()->json(['message' => 'Question updated successfully.']);
    }

    public function destroy($id)
    {
        $question = Question::findOrFail($id);
        $question->delete();

        return response()->json(['message' => 'Question deleted successfully.']);
    }
}
