<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\User;
use App\Services\GetMatrix;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerControllerAdmin extends Controller
{
    //

    public function index(Request $request)
    {

        $q = User::with(['subscriptions', 'orders'])->where('user_type', 'customer');
        
        if($request->q){
            $q->where('customer_id', 'LIKE', '%' . $request->q . '%')
            ->orWhere('email', 'LIKE', '%' . $request->q . '%');
        }

        $customers = $q->get();
        
        
        return Inertia::render('Admin/Customers/CustomerList', [
            'customers' => $customers
        ]);
    }

    public function details(Request $request)
    {
        $customer = User::with([
            'subscriptions' => function($q){
               $q->with(['package']);
            },
            'orders',
            'children'
        ])->where('customer_id', $request->customerId)->first();

     
        $matrix = new GetMatrix();

        $matrix = $matrix->prepareNodes( $customer->id );

        // dd($matrix);

        $address = Address::where('user_id', $customer->id)->where('is_default', true)->first();

        return Inertia::render('Admin/Customers/CustomerDetails', [
            'user' => $customer,
            'address' => $address,
            'matrix' => $matrix
        ]);
    }
}
