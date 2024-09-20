<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index'); 
});

use App\Http\Controllers\LivroController;

Route::apiResource('livros', LivroController::class);