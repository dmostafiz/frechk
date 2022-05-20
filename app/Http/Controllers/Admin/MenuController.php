<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    
    public function index() {
        return Inertia::render('Admin/Menus/Menus');
    }

    public function create_menu(){
        return Inertia::render('Admin/Menus/CreateMenu');
    }

    public function store_menu(Request $request){
        dd($request->images);
    }
}
