<?php

namespace App\Http\Middleware;

use App\Models\AffiliateClick;
use App\Models\Menu;
use App\Models\Notification;
use App\Models\Order;
use App\Models\Subscription;
use App\Models\User;
use App\Models\Visitor;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    // protected $rootView = 'admin';

    public function rootView(Request $request)
    {
        // dd($request->header());

        $pathArr = explode('/', $request->path());

        if ($pathArr[0] && $pathArr[0] == 'admin') {

            return 'admin';
        } else {

            return 'public';
        }
    }

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $myId = auth()->user() ? auth()->user()->id  : null;

        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],

            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },

            'flash' => [
                'success' => session()->has('success') ? session()->get('success') : '',
                'error' => session()->has('error') ? session()->get('error') : '',
                'info' => session()->has('info') ? session()->get('info') : '',
                'warning' => session()->has('warning') ? session()->get('warning') : '',
            ],

            'cartItems' => \Cart::content(),
            'cartTotal' => \Cart::priceTotal(),
            'tax' => config('app.tax'),
            'countedTax' => \Cart::tax(),
            'deliveryCost' => config('app.deliveryCost'),
            'subTotal' => \Cart::subtotal() + \Cart::tax() + config('app.deliveryCost'),

            'newOrders' => Order::where('status', 'pending')->get(),

            'myAffiliateClicks' => AffiliateClick::where('user_id', $myId)->get(),
            'myAffiliateUsers' => User::where('parent_id', $myId)->get(),

            'menus' => Menu::all(),
            'customers' => User::where('user_type', 'customer')->get(),
            'subscriptions' => Subscription::where('status', 'running')->get(),
            'orders' => Order::where('status', 'pending')->get(),

            'newCustomers' => User::where('user_type', 'customer')
                ->where('created_at', '>', now()->subDays(30)->endOfDay())
                ->get(),

            'visitors' => Visitor::where('created_at', '>', now()->subDays(30)
                ->endOfDay())
                ->get(),

            'adminNotifications' => Notification::where('user_id', null)
                                                  ->where('status', false)
                                                  ->latest()
                                                  ->get(),

        ]);
    }
}
