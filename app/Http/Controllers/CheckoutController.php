<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\OrderItem;
use App\Services\Notify;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {

        $userId = auth()->user() ? auth()->user()->id : null;

        $addresses = Address::where('user_id', $userId)->get();
        // dd($addresses);
        return Inertia::render('Checkout', [
            'addresses' => $addresses
        ]);
    }

    public function submit_order(Request $request)
    {
        // dd(uniqid());

        $cartItems = \Cart::content();

        $address = Address::where('user_id', auth()->user()->id)->where('is_default', true)->first();

        if (!$address) {
            session()->flash('error', 'Please select or create a new shipping address!');
            return redirect()->back();
        }

        $order = new Order();
        $order->order_id = uniqid();
        $order->user_id = auth()->user()->id;
        $order->address_id = $address->id;
        $order->vat = 0.00;
        $order->delivery_cost = 0.00;
        $order->order_total = \Cart::priceTotal();
        $order->sub_total = \Cart::priceTotal() + $order->vat + $order->delivery_cost;
        $order->payment_method = $request->paymentMethod;
        $order->status = 'pending';
        $order->pre_order = false;

        $order->save();


        if ($request->paymentMethod == 'cash_on_delivery') {
            foreach ($cartItems as $item) {
                $orderItem = new OrderItem();
                $orderItem->user_id = auth()->user()->id;
                $orderItem->order_id = $order->id;
                $orderItem->menu_id = $item->id;
                $orderItem->item_name = $item->name;
                $orderItem->qty = $item->qty;
                $orderItem->item_price = $item->price;
                $orderItem->qty_price = $item->price * $item->qty;

                $orderItem->save();
            }
        }

        $notify = new Notify();
        $notify->title('New order placed')
               ->subtitle('#'.$order->order_id)
               ->url(route('admin.orders.details', $order->order_id))
               ->storeDatabase();

        \Cart::destroy();

        session()->flash('success', 'Order placed successfully!');
        return redirect()->route('thank.you', ['type' => 'ord']);
    }
}
