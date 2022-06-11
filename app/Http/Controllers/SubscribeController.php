<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Package;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscribeController extends Controller
{
    //
    public function index(Request $request)
    {

        $userId = auth()->user() ? auth()->user()->id : null;

        $addresses = Address::where('user_id', $userId)->get();

        $package = Package::with([

            'days' => function ($query) {
                $query->with(['menus']);
            },

            'menus'

        ])->where('slug', $request->slug)->first();

        // dd($package);

        $subscription = Subscription::where('user_id', $userId)
            ->where('package_id', $package->id)
            ->where('user_id',  $userId)
            ->first();

        return Inertia::render('SubscribeNow', [
            'addresses' => $addresses,
            'pkg' => $package,
            'subscription' => $subscription
        ]);
    }

    public function subscribeNow(Request $request)
    {

        $myId = auth()->user() ? auth()->user()->id : null;
        $address = Address::where('user_id', $myId)->where('is_default', true)->first();

        if (!$address) {
            session()->flash('error', 'Please select or create a new address.');
            return redirect()->back();
        }
        // dd($request->all());
        $subs = new Subscription();
        $subs->subscription_id = uniqid();
        $subs->user_id = $myId;
        $subs->package_id = $request->packageId;
        $subs->address_id = $address->id;
        $subs->status = 'running';
        $subs->save();

        session()->flash('success', 'You have successfully subscribed.');
        return redirect()->route('thank.you', ['type' => 'sbc']);
    }
}
