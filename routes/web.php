<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('main');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home')->withoutMiddleware('auth');

Route::get('/get/book/list', [BookController::class, 'getBookList']);
Route::post('/get/book/single', [BookController::class, 'getBookSingle']);


//Route::get('books.index', [BookController::class, 'index']);
Route::post('books.store', [BookController::class, 'store']);


//Route::resource('/books', BookController::class);


Route::get('/token', function () {
    return csrf_token(); 
});