<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Menu;
use App\Models\Package;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $categories = Category::all()->load('menus');

        $carouselMenus = Menu::where('homepageCarousel', true)
            ->inRandomOrder()
            ->get()
            ->load('category')
            ->load('tags');

        $foodCards = Menu::where('homepageCarousel', false)
            ->inRandomOrder()
            ->get()
            ->load('category')
            ->load('tags');

        $popularMenus = Menu::get()
            ->load('category')
            ->load('tags');


        $packages = Package::with([
            'days',
            'menus' => function($query){

                $query->distinct();

            },
        ])->get();

        return Inertia::render('Home', [
            'categories' => $categories,
            'carouselMenus' => $carouselMenus,
            'foodCards' => $foodCards,
            'popularMenus' => $popularMenus,
            'packages' => $packages
        ]);
    }

    public function menus(){
        
        $menus = Menu::with(['category', 'tags'])->get();

        return Inertia::render('Menus', [
            'menus' => $menus
        ]);
    }

    public function menuDetails(Request $request)
    {
        $menu = Menu::where('slug', $request->slug)->get()->map(function ($menu) {
            $menu->images = json_decode($menu->images);
            return $menu;
        })[0];

        return Inertia::render('Details', [
            'menu' => $menu
        ]);
    }
}
