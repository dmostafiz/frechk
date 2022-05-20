<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\CustomerController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    return Inertia::render('Home');
})->name('public.index');

Route::get('/offers', function () {
    return Inertia::render('Offer');
})->name('public.offers');

Route::get('/checkout', function () {
    return Inertia::render('Checkout');
})->name('public.checkout');

Route::get('/details', function () {
    return Inertia::render('Details');
})->name('public.details');


Route::prefix('customer')->middleware(['auth'])->group(function () {

    Route::get('/orders', [CustomerController::class, 'orders'])->name('customer.orders');
    Route::get('/offers', [CustomerController::class, 'offers'])->name('customer.offers');
    Route::get('/favourites', [CustomerController::class, 'favourites'])->name('customer.favourites');
    Route::get('/payments', [CustomerController::class, 'payments'])->name('customer.payments');
    Route::get('/addresses', [CustomerController::class, 'addresses'])->name('customer.addresses');

});


Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    Route::get('/menus', [MenuController::class, 'index'])->name('admin.menu.all');
    Route::get('/create_menu', [MenuController::class, 'create_menu'])->name('admin.menu.create');
    Route::post('/create_menu', [MenuController::class, 'store_menu'])->name('menus.create');

    
    Route::get('/tags', [TagController::class, 'index'])->name('admin.category.tags');
    Route::post('/tags', [TagController::class, 'create_tag'])->name('tags.create');
    Route::post('/tags_update', [TagController::class, 'update_tag'])->name('tags.update');
    Route::post('/delete_tag', [TagController::class, 'delete_tag'])->name('tags.delete');


    Route::get('/categories', [CategoryController::class, 'index'])->name('admin.category.categories');
    Route::post('/categories', [CategoryController::class, 'create_category'])->name('categories.create');
    Route::post('/categories_update', [CategoryController::class, 'update_category'])->name('categories.update');
    Route::post('/delete_category', [CategoryController::class, 'delete_category'])->name('categories.delete');

    
});


Route::get('/redirect_to', function (Request $request) {
    // dd( $request->user()->user_type );
    if ($request->user() && $request->user()->user_type == 'admin') {
        return Inertia::location('/admin/dashboard');
    }

    return Inertia::location('/');
});
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
