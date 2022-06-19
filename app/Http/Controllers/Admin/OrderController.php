<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index(Request $request){

        $q = Order::where('status', $request->status ? $request->status : 'pending');

        if($request->q){
            $q->where('order_id', 'LIKE', '%' . $request->q . '%');
        }

        $orders = $q->get()->load(['user', 'items']);

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

    public function updateOrderStatus(Request $request){

        // dd( $request->all() );

        $order = Order::where('id', $request->id)->first();
        $order->status = $request->status;
        $order->save();

        session()->flash('success', 'Order status updated successfully!');

        return redirect()->back();
    }
}
