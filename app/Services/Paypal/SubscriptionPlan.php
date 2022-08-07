<?php

namespace App\Services\Paypal;

use App\Services\PaypalService;
use Exception;
use PayPal\Api\Plan;
use PayPal\Api\Patch;
use PayPal\Api\Currency;
use PayPal\Api\ChargeModel;
use PayPal\Api\PatchRequest;
use PayPal\Common\PayPalModel;
use PayPal\Api\PaymentDefinition;
use PayPal\Api\MerchantPreferences;

class SubscriptionPlan extends PaypalService{

    function create( $name, $desc, $interval, $price){

        $plan = new Plan();

        // # Basic Information
        // Fill up the basic information that is required for the plan
        $plan->setName($name)
            ->setDescription($name)
            ->setType('INFINITE');

        // # Payment definitions for this billing plan.
        $paymentDefinition = new PaymentDefinition();

        // The possible values for such setters are mentioned in the setter method documentation.
        // Just open the class file. e.g. lib/PayPal/Api/PaymentDefinition.php and look for setFrequency method.
        // You should be able to see the acceptable values in the comments.
        $paymentDefinition->setName('Regular Payments')
            ->setType('REGULAR')
            ->setFrequency(ucfirst($interval))
            ->setFrequencyInterval("1")
            ->setCycles("0")
            ->setAmount(
                new Currency(
                    array(
                        'value' => (int)$price,
                        'currency' => 'CAD'
                    )
                )
            );

        //Shipping charge

        // $shippingAmount = (($price / 100 * 2.9) + 0.30);

        // dd($shippingAmount);

        // Charge Models
        $chargeModel = new ChargeModel();
        $chargeModel->setType('TAX')
            ->setAmount(5);

        // $paymentDefinition->setChargeModels(array($chargeModel));

        $merchantPreferences = new MerchantPreferences();
        $baseUrl = asset('/');

        // ReturnURL and CancelURL are not required and used when creating billing agreement with payment_method as "credit_card".
        // However, it is generally a good idea to set these values, in case you plan to create billing agreements which accepts "paypal" as payment_method.
        // This will keep your plan compatible with both the possible scenarios on how it is being used in agreement.

        // $adminFees = $name == 'Income Plan' ? 65 : 1;

        $merchantPreferences->setReturnUrl($baseUrl."ExecuteAgreement.php?success=true")
            ->setCancelUrl($baseUrl."ExecuteAgreement.php?success=false")
            ->setAutoBillAmount("yes")
            ->setInitialFailAmountAction("CONTINUE")
            ->setMaxFailAttempts("0");


        $plan->setPaymentDefinitions(array($paymentDefinition));
        $plan->setMerchantPreferences($merchantPreferences);

        // For Sample Purposes Only.
        $request = clone $plan;

        // ### Create Plan
        try {
            $output = $plan->create($this->apiContext());
        } catch (Exception $ex) {

            dd($ex->getMessage());
            // exit(1);
        }

        // dd($output);
        return $output;
    }

    public function show($id){
        return Plan::get($id, $this->apiContext());
    }

    public function update($id){

        $plan = $this->show($id);

        $patch = new Patch();
        $value = new PayPalModel('{
            "state":"ACTIVE"
        }');

        $patch->setOp('replace')
            ->setPath('/')
            ->setValue($value);

        $patchRequest = new PatchRequest();
        $patchRequest->addPatch($patch);

        return $plan->update($patchRequest, $this->apiContext());

    }

    public function all(){
        try {
            $params = array('page_size' => '10', 'state' => 'active');
            return Plan::all($params, $this->apiContext());
        } catch (Exception $ex) {
            dd($ex->getMessage());
            exit(1);
        }
    }

}
