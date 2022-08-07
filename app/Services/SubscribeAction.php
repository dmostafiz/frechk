<?php
namespace App\Services;

use App\Models\Address;
use Exception;
use App\Models\Plan;
use App\Models\User;
use App\Models\Earning;
use App\Models\PlanCharge;
use App\Models\Notification;
use App\Models\Package;
use App\Models\Subscription;
use App\Services\Paypal\PurchaseAgreement;
use Illuminate\Support\Facades\Log;

class SubscribeAction{

    public function action($agreement){
        try {

            // dd($agreement);

            $agreementAmount = (double) $agreement->plan->payment_definitions[0]->amount->value;

            $myId = auth()->user() ? auth()->user()->id : null;
            $address = Address::where('user_id', $myId)->where('is_default', true)->first();
    
    
            $package = Package::first();
            
            // dd($package );
            // dd($request->all());
            $subs = new Subscription();
            $subs->subscription_id = uniqid();
            $subs->paypal_agreement_id = $agreement->id;
            $subs->user_id = $myId;
            $subs->package_id = $package->id;
            $subs->address_id = $address->id;
            $subs->status = 'pending';
            $subs->save();
    
            $notify = new Notify();
            $notify->title('New subscription')
                   ->subtitle('#'.$subs->subscription_id)
                   ->url(route('admin.subscription.details', $subs->subscription_id))
                   ->storeDatabase();
                   
            session()->flash('success', 'You have successfully subscribed '. $package->name . ' plan');
            return redirect()->route('thank.you', ['type' => 'sbc']);

            //code...
        } catch (Exception $e) {
            // session()->flash('error', $e->getMessage());
            // dd($e);
            return true;
        }
    }
}
