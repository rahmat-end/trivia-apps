<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GoogleLoginController;
use App\Http\Controllers\BuyAvatarController;
use App\Http\Controllers\FreeAvatarController;
use App\Http\Controllers\DiamondController;

Route::get('/google/redirect', [GoogleLoginController::class, 'redirectToGoogle']);
Route::get('/google/callback', [GoogleLoginController::class, 'handleGoogleCallback']);

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
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
