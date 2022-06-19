<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
// use Gloudemans\Shoppingcart\Cart;
use Cart;

class CartController extends Controller
{

    public function addToCart(Request $request)
    {
        $userId = $request->user() ? $request->user()->id : $request->ip;
        $rowId = uniqid();

        $menu = Menu::findOrFail($request->menuId);


        $qty = 1;

        if ($request->qty) {
            $qty = $request->qty;
        }

        if ($menu) {


            \Cart::add([
                'id' => $menu->id,
                'name' => $menu->name,
                'qty' => $qty,
                'price' => $menu->price,
                'weight' => 0,
                // 'options' => ['size' => 'large']
            ]);

            // dd(\Cart::getContent());

            session()->flash('success', 'Menu added to the cart.');
            return redirect()->back();
        }
    }

    public function removeFromCart(Request $request)
    {
        // dd();
        \Cart::update($request->rowId,  ['qty' => \Cart::get($request->rowId)->qty - 1]);
        
        session()->flash('success', 'Menu item removed from the cart.');
        return redirect()->back();
    }
}
