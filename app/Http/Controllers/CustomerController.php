<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    public function orders(Request $request){
        // dd('Orders');
        return Inertia::render('Orders');
    }

    public function offers(Request $request){
        // dd('Addresses');
        return Inertia::render('Offers');
    }

    public function favourites(Request $request){
        // dd('Favourites');
        return Inertia::render('Favourites');
    }

    public function payments(Request $request){
        // dd('Payments');
        return Inertia::render('Payments');
    }

    public function addresses(Request $request){
        // dd('Addresses');
        return Inertia::render('Addresses');
    }
}
