<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(){

        $orders = Order::where('status', 'pending')->get()->load(['user', 'items']);

        return Inertia::render('Admin/Orders/OrderList', [
            'orders' => $orders
        ]);
    }

    public function orderDetails(Request $request){
        $orders = Order::where('order_id', $request->orderId)->get()->load([
            'user', 
            'address',
            'items' => function($query){
                $query->with('menu');
            }
        ]);

        // dd( $orders[0]);

        return Inertia::render('Admin/Orders/OrderDetails', [
            'order' => $orders[0] 
        ]); 
    }
}
