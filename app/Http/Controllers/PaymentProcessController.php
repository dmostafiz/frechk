<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Address;
use App\Models\Package;
use App\Models\Subscription;
use App\Models\User;
use App\Services\Paypal\PurchaseAgreement;
use App\Services\SubscribeAction;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PaymentProcessController extends Controller
{
    public function paypal(Request $request)
    {

        $user = User::whereId(auth()->user()->id)->first();
        $address = Address::where('user_id', $user->id)->where('is_default', true)->first();

        // dd( $address );

        $planModel = Package::where('id', $request->packageId)
            ->first();

        // dd($planModel);

        if (!$user) {
            session()->flash('error', 'You are not authenticated!');
            return redirect()->back();
        }


        if (!$address) {
            session()->flash('error', 'Please select or create a new shipping address');
            return redirect()->back();
        }


        if (!$planModel) {
            session()->flash('error', 'Opps! Something wen wrong.');
            return redirect()->back();
        }

        $pa = new PurchaseAgreement();

        $agreement = $pa->create($planModel, $user, $address);

        // dd($agreement);

        if ($agreement) {

            $approvalUrl = $agreement->getApprovalLink();
            return Inertia::location($approvalUrl);
        }
    }

    public function executePaypalAgreement(Request $request)
    {

        $plan = Package::first();

        if ($request->success && $request->success == 'true') {
            $pa = new PurchaseAgreement();
            $execute = $pa->execute($request->token);

            // dd('Execute: ', $execute);

            if ($execute) {

                $sa = new SubscribeAction();
                $action = $sa->action($execute);

                if ($action) {
                    return redirect()->route('public.subscribe', $plan->slug);
                }
            } else {
                session()->flash('error', 'Oppss! Unknown error ocurred. Please try again later.');
                return redirect()->route('public.subscribe', $plan->slug);
            }
        } else {
            session()->flash('info', 'You returned back from paypal without completing the payment.');
            return redirect()->route('public.subscribe', $plan->slug);
        }
    }
}
