<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\GoogleLoginController;
use App\Http\Controllers\Admin\BuyAvatarController;
use App\Http\Controllers\Admin\FreeAvatarController;
use App\Http\Controllers\Admin\DiamondController;
use App\Http\Controllers\Admin\QuestionController;

use App\Http\Controllers\UseByUser\UserAvatarShop;
use App\Http\Controllers\UseByUser\UserProfile;

Route::get('/google/redirect', [GoogleLoginController::class, 'redirectToGoogle']);
Route::get('/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);


// -------------------------------------ADMIN GAME ROUTES-----------------------------------

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('registeruser', [AuthController::class, 'registerNewUser']);
    Route::post('login', [AuthController::class, 'login']);
    Route::get('checklogin', [AuthController::class, 'me']);
});

Route::prefix('user')->group(function () {
    Route::get('/', [UserController::class, 'getAllUsers']);
    // create admin account
    Route::post('/', [UserController::class, 'store']);
    Route::get('/{id}', [UserController::class, 'getUserById']);
    Route::put('/{id}', [UserController::class, 'update']);
    Route::delete('/{id}', [UserController::class, 'destroy']);
});

Route::prefix('buyavatar')->group(function () {
    Route::get('/', [BuyAvatarController::class, 'index']);
    Route::post('/', [BuyAvatarController::class, 'store']);
    Route::put('/{id}', [BuyAvatarController::class, 'update']);
    Route::delete('/{id}', [BuyAvatarController::class, 'destroy']);
});

Route::prefix('diamond')->group(function () {
    Route::get('/', [DiamondController::class, 'index']);
    Route::post('/', [DiamondController::class, 'store']);
    Route::put('/{id}', [DiamondController::class, 'update']);
    Route::delete('/{id}', [DiamondController::class, 'destroy']);
});

Route::prefix('freeavatar')->group(function () {
    Route::get('/', [FreeAvatarController::class, 'index']);
    Route::post('/', [FreeAvatarController::class, 'store']);
    Route::put('/{id}', [FreeAvatarController::class, 'update']);
    Route::delete('/{id}', [FreeAvatarController::class, 'destroy']);
});

Route::prefix('question')->group(function () {
    Route::get('/', [QuestionController::class, 'index']);
    Route::get('/{id}', [QuestionController::class, 'getQuestionById']);
    Route::post('/', [QuestionController::class, 'store']);
    Route::put('/{id}', [QuestionController::class, 'update']);
    Route::delete('/{id}', [QuestionController::class, 'destroy']);
});

// -------------------------------------USER IN GAME ROUTES-----------------------------------

Route::prefix('transaction')->group(function () {
    Route::get('/', [UserAvatarShop::class, 'index']);
    Route::get('/{id}', [UserAvatarShop::class, 'getTransactionData']);
    Route::post('/userbuyavatar/{id}', [UserAvatarShop::class, 'BuyAvatarByUser']);
    Route::get('/userbuyavatar/{id}', [UserAvatarShop::class, 'GetBuyAvatarByUser']);
});

Route::prefix('userprofile')->group(function () {
    Route::put('update/{id}', [UserProfile::class, 'update']);
    Route::put('/{id}', [UserController::class, 'getUserById']);
});
