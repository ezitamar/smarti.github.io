<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ComputerController;

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

Route::prefix('computer')->group(function () {
    Route::get('/',[ ComputerController::class, 'getAll']);
    Route::post('/',[ ComputerController::class, 'create']);
    Route::delete('/{id}',[ ComputerController::class, 'delete']);
    Route::get('/{id}',[ ComputerController::class, 'get']);
    Route::put('/{id}',[ ComputerController::class, 'update']);
});
