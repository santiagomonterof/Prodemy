<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CursoController;
use App\Http\Controllers\ImagenController;
use App\Http\Controllers\InscripcionController;
use App\Http\Controllers\LeccionController;
use App\Http\Controllers\SeguimientoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource("categorias", CategoriaController::class);
Route::resource("cursos", CursoController::class);
Route::resource("imagens", ImagenController::class);
Route::resource("incripccions", InscripcionController::class);
Route::resource("leccions", LeccionController::class);
Route::resource("seguimientos", SeguimientoController::class);

Route::resource("login", LoginController::class);
Route::resource("register", RegisterController::class);
