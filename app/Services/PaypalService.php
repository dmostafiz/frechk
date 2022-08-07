<?php
namespace App\Services;

use Exception;
use PayPal\Api\Plan;
use PayPal\Api\Patch;
use PayPal\Api\Currency;
use PayPal\Api\ChargeModel;
use PayPal\Api\PatchRequest;
use PayPal\Common\PayPalModel;
use PayPal\Api\PaymentDefinition;
use PayPal\Api\MerchantPreferences;

class PaypalService{

    protected function apiContext(){

        $client_id = config('paypal.env') == 'sandbox' ? config('paypal.test.client_id') : config('paypal.client_id');
        $client_secret = config('paypal.env') == 'sandbox' ? config('paypal.test.client_secret') : config('paypal.client_secret');

        $apiContext = new \PayPal\Rest\ApiContext(
            new \PayPal\Auth\OAuthTokenCredential(
                $client_id,
                $client_secret
            )
        );

        $apiContext->setConfig(
            array(
                'mode' => config('paypal.env') == 'sandbox' ? 'sandbox' : 'live',
                // 'log.LogEnabled' => false,
                // 'log.FileName' => '../PayPal.log',
                // 'log.LogLevel' => 'INFO', // PLEASE USE `INFO` LEVEL FOR LOGGING IN LIVE ENVIRONMENTS
                // 'cache.enabled' => false,
            )
        );

        // dd($apiContext);

        return $apiContext;

    }

    public function paypalBackUrl($status){
        return 'https://foodweb.test/process-purchase/'.$status;
    }
}
