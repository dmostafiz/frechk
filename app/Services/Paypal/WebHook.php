<?php

namespace App\Services\Paypal;

use Exception;
use App\Services\PaypalService;
use PayPal\Api\WebhookEventType;
use PayPal\Api\Webhook as PaypalWebHook;

class WebHook extends PaypalService
{

    public function create()
    {

        $webhook = new PaypalWebHook();

        $uniqId = uniqid();

        $webhook->setUrl('https://frechk.com/webhook/execute/' . $uniqId);

        $webhookEventTypes = array();

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"PAYMENT.SALE.COMPLETED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"PAYMENT.SALE.DENIED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"BILLING.SUBSCRIPTION.EXPIRED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"BILLING.SUBSCRIPTION.ACTIVATED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"BILLING.SUBSCRIPTION.CANCELLED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"BILLING.SUBSCRIPTION.SUSPENDED"
            }'
        );

        $webhookEventTypes[] = new WebhookEventType(
            '{
                "name":"BILLING.SUBSCRIPTION.PAYMENT.FAILED"
            }'
        );

        $webhook->setEventTypes($webhookEventTypes);

        try {
            $output = $webhook->create($this->apiContext());

            // dd($output);

            if ($output) dd($uniqId);
        } catch (Exception $ex) {

            dd($ex);

            return false;
        }
    }

    public function verifyWebHook($request)
    {
        // get request headers
        $headers = apache_request_headers();

        // get http payload
        $body = file_get_contents('php://input');

        // compose signature string: The third part is the ID of the webhook ITSELF(!),
        // NOT the ID of the webhook event sent. You find the ID of the webhook
        // in Paypal's developer backend where you have created the webhook
        $data =
            $headers['Paypal-Transmission-Id'] . '|' .
            $headers['Paypal-Transmission-Time'] . '|' .
            'WH-85A927744X341853K-6K220008L9922782N' . '|' .
            crc32($body);

        // load certificate and extract public key
        $pubKey = openssl_pkey_get_public(file_get_contents($headers['Paypal-Cert-Url']));
        $key = openssl_pkey_get_details($pubKey)['key'];

        // verify data against provided signature 
        $result = openssl_verify(
            $data,
            base64_decode($headers['Paypal-Transmission-Sig']),
            $key,
            'sha256WithRSAEncryption'
        );

        if ($result == 1) {
            // webhook notification is verified
            return true;
        } else {
            return false;
        }
    }
}
