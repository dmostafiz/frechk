<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\Subscription;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{

    public function affiliateProgram(Request $request)
    {
        // dd('Payments');
        return Inertia::render('AffiliateProgram');
    }

    public function subcriptions(Request $request)
    {
        $myId = auth()->user() ? auth()->user()->id : null;

        $subscriptions = Subscription::with([
            'package' => function($q){
                $q->with([
                    'days', 
                    'menus' => function($query){

                        $query->distinct();
        
                    }
                ]);
            },
            'address'
        ])
            ->where('user_id', $myId)
            ->get();

        return Inertia::render('Subcriptions', [
            'subscriptions' => $subscriptions
        ]);
    }


    public function orders(Request $request)
    {
        // dd('Orders');
        $myId = auth()->user() ? $request->user()->id : null;

        $orders = Order::with(['address', 'items'])->where('user_id', $myId)->latest()->get();

        // dd($myId);

        return Inertia::render('Orders', [
            'orders' => $orders,
        ]);
    }


    public function favourites(Request $request)
    {
        // dd('Favourites');
        return Inertia::render('Favourites');
    }


    public function addresses(Request $request)
    {
        // dd('Addresses');
        return Inertia::render('Addresses');
    }

    public function storeAddress(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|max:20',
            'phone' => 'required|max:20',
            'email' => 'required|max:100',
            'street' => 'required|max:255',
            'city' => 'required|max:100',
            'zip' => 'required|max:20',
        ]);

        $addresses = Address::where('user_id', auth()->user()->id)->get();

        foreach ($addresses as $adr) {
            $adr->is_default = false;
            $adr->save();
        }

        $addr = new Address();
        $addr->user_id = auth()->user()->id;
        $addr->name = $request->name;
        $addr->phone = $request->phone;
        $addr->email = $request->email;
        $addr->street_address = $request->street;
        $addr->city = $request->city;
        $addr->zip_code = $request->zip;
        $addr->is_default = true;
        $addr->save();

        session()->flash('success', 'Address created successfully!');
        return redirect()->back();
    }

    public function changeDefault_address(Request $request)
    {
        $addresses = Address::where('user_id', auth()->user()->id)->get();

        foreach ($addresses as $adr) {
            $adr->is_default = false;
            $adr->save();
        }

        $addr = Address::where('user_id', auth()->user()->id)->where('id', $request->addr_id)->first();

        if ($addr) {
            $addr->is_default = true;
            $addr->save();
        }

        session()->flash('success', 'Address changed to default.');
        return redirect()->back();
    }

    public function delete_address(Request $request)
    {
        $addr = Address::where('user_id', auth()->user()->id)->where('id', $request->addr_id)->first();

        if ($addr) {
            $addr->delete();

            if ($addr->is_default == true) {
                $adr = Address::where('user_id', auth()->user()->id)->first();

                if ($adr) {
                    $adr->is_default = true;
                    $adr->save();
                }
            }

            session()->flash('success', 'Address deleted successfully.');
            return redirect()->back();
        }
    }
}
