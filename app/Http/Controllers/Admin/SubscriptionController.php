<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use App\Models\SubscriptionDelivery;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionController extends Controller
{
    //
    public function index()
    {

        $subscriptions = Subscription::with('user', 'package')->where('status', 'running')->get();
        // dd($subscriptions);
        return Inertia::render('Admin/Subscriptions/SubscriptionList', [
            'subscriptions' => $subscriptions
        ]);
    }

    public function subscription(Request $request)
    {

        $subscription = Subscription::with('user', 'package', 'address')
            ->where('subscription_id', $request->subscriptionId)
            ->first();

        $deliveries = SubscriptionDelivery::where('subscription_id', $subscription->id)->get();

        return Inertia::render('Admin/Subscriptions/SubscriptionDetails', [
            'subscription' => $subscription,
            'deliveries' => $deliveries
        ]);
    }

    public function deliveries()
    {
        $deliveries = SubscriptionDelivery::whereDate('created_at', Carbon::today())
            ->where('package_id', 1)
            ->get();

        $subscriptions = Subscription::with([
            'user',
            'package',
            'address'
        ])
            ->where('package_id', 1)
            ->where('status', 'running')
            ->get();


            // dd($subscriptions);

        return Inertia::render('Admin/Subscriptions/SubscriptionDeliveries', [
            'subscriptions' => $subscriptions,
            'deliveries' => $deliveries,
            'today' => Carbon::today()
        ]);
    }

    public function makeDelivery(Request $request){
        // dd($request->all());
        $del = new SubscriptionDelivery();
        $del->subscription_id = $request->subscriptionId;
        $del->package_id = $request->packageId;
        $del->user_id = $request->userId;
        $del->save();

        session()->flash('success', 'Delivery done!');
        return redirect()->back();
    }
}
