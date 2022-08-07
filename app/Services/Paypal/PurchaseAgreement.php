<?php

namespace App\Services\Paypal;

use Carbon\Carbon;
use PayPal\Api\Plan;
use PayPal\Api\Payer;
use PayPal\Api\Agreement;
use App\Services\PaypalService;
use PayPal\Api\ShippingAddress;
use Carbon\Exceptions\Exception;
use App\Models\Plan as ModelsPlan;
use Inertia\Inertia;
use PayPal\Api\AgreementStateDescriptor;

class PurchaseAgreement extends PaypalService
{

    public function create($planModel, $user, $address)
    {

        $agreement = new Agreement();

        $agreement->setName($planModel->slug)
            ->setDescription($planModel->slug)
            ->setStartDate(Carbon::now()->addSecond(5));

        $plan = new Plan();
        $plan->setId($planModel->plan_id);
        $agreement->setPlan($plan);

        $payer = new Payer();
        $payer->setPaymentMethod('paypal');

        $agreement->setPayer($payer);

        $shippingAddress = new ShippingAddress();
        $shippingAddress->setLine1($address->street_address)
                        ->setCity($address->city)
                        ->setPostalCode($address->zip_code)
                        ->setCountryCode('CA');

        $agreement->setShippingAddress($shippingAddress);

        // dd($agreement);

        try {

            $agreement = $agreement->create($this->apiContext());

            return $agreement;
            // dd($agreement->links[0]->href);

            // return response()->json(['redirectTo' => $approvalUrl]);

            // dd((string) $approvalUrl);
            // return Inertia::render('RedirectToPaypal');

            // return response('', 409)->header('X-Inertia-Location', $agreement->getApprovalLink());


            // dd($approvalUrl);
            // Inertia::red
            // if ($agreement) {
            //     header('Location: '.$agreement->links[0]->href);
            //     return Inertia::location($agreement->links[0]->href);

            //     exit();

            //     // return Inertia::location($agreement->links[0]->href);
            // }

            // return Inertia::location($approvalUrl);

            // return redirect($approvalUrl, 301);

            // header('Location: '.'http://webexe.dev');
            // exit();
            // return redirect()->to($approvalUrl);

        } catch (Exception $ex) {
            dd($ex);
        }

        return $agreement;
    }

    public function execute($token)
    {

        // $token = $_GET['token'];
        $agreement = new \PayPal\Api\Agreement();
        try {

            $agreement->execute($token, $this->apiContext());
        } catch (Exception $ex) {
            return false;
            exit(1);
        }

        try {

            $agreement = \PayPal\Api\Agreement::get($agreement->getId(), $this->apiContext());
            return  $agreement;
        } catch (Exception $ex) {
            return false;
            exit(1);
        }
    }

    public function get($agreement_id)
    {
        try {
            $agreement = Agreement::get($agreement_id, $this->apiContext());
        } catch (Exception $ex) {
            // dd($ex);
            exit(1);
        }
        return $agreement;
    }

    public function suspend($id)
    {

        $createdAgreement = $this->get($id);

        $agreementStateDescriptor = new AgreementStateDescriptor();
        $agreementStateDescriptor->setNote("Suspending the agreement");

        try {
            $createdAgreement->suspend($agreementStateDescriptor, $this->apiContext());
            $agreement = Agreement::get($createdAgreement->getId(), $this->apiContext());
        } catch (Exception $ex) {
            // dd($ex);
            exit(1);
        }
        return $agreement;
    }

    public function cancel($id)
    {

        $createdAgreement = $this->get($id);

        $agreementStateDescriptor = new AgreementStateDescriptor();
        $agreementStateDescriptor->setNote("Cancelling the agreement");

        try {
            $createdAgreement->cancel($agreementStateDescriptor, $this->apiContext());
            $agreement = Agreement::get($createdAgreement->getId(), $this->apiContext());
        } catch (Exception $ex) {
            return $ex;
            exit(1);
        }
        return $agreement;
    }
}
