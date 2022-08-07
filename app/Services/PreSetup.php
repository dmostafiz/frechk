<?php
namespace App\Services;

use App\Models\Plan;
use App\Models\Rank;
use App\Services\Paypal\SubscriptionPlan;

class PreSetup{

    public function createIncomePlan(){

        $desc = 'The income plan is needed to help you pay the bills that you know are coming in each month. Even those unexpected bills that arise like your child need braces, or the transmission broke on your car.
        Just imagine how you will feel when you start receiving those checks in the mail to pay your bills with. You will not have to take your paycheck to pay those bills like you have always been doing before the Income Plan came along. What could you do with more money in your pocket? After a few short months with the Income Plan you will start to notice that you will be making enough money to pay all your bills each month.';

        $splan = new SubscriptionPlan();
        $sp = $splan->create(
            'Income Plan',
            $desc,
            'month',
            100
        );
        // dd($sp);

        $splan->update($sp->id);

        $pln = new Plan();
        $pln->name = 'Income Plan';
        $pln->desc = $desc;
        $pln->plan_id = 'income_plan';
        $pln->paypal_plan_id = $sp->id;
        $pln->amount = 100;
        $pln->interval = 'month';
        $pln->compensation_period = 0;
        $pln->compensation_coverage = 0;
        $pln->save();

    }


    public function createCoopProgram(){

        $desc = "This is for business builder, we take your $5.00 monthly investment and advertise for you. When someone joins the income plan from this advertisement we place them under you. your income will start to soar each and every month. Grow your business with out doing any additional work. join the co-op and let us build it for you.";

        $splan = new SubscriptionPlan();
        $sp = $splan->create(
            'Coop Program',
            $desc,
            'month',
            5
        );

        $splan->update($sp->id);

        $pln = new Plan();
        $pln->name = 'Coop Program';
        $pln->desc = $desc;
        $pln->plan_id = 'coop';
        $pln->paypal_plan_id =  $sp->id;
        $pln->amount = 5;
        $pln->interval = 'month';
        $pln->compensation_period = 0;
        $pln->compensation_coverage = 0;
        $pln->save();

    }

    public function addRanks(){
        $ranks = [
            ['rank' => 'Pvt', 'sponsors' => 0, 'payouts' => 0],
            ['rank' => 'Pfc', 'sponsors' => 20, 'payouts' => 1000],
            ['rank' => 'Lcpl', 'sponsors' => 40, 'payouts' => 2000],
            ['rank' => 'Cpl', 'sponsors' => 60, 'payouts' => 3000],
            ['rank' => 'Sgt', 'sponsors' => 80, 'payouts' => 4000],
            ['rank' => 'Ssgt', 'sponsors' => 100, 'payouts' => 5000],
            ['rank' => 'Gysgt', 'sponsors' => 120, 'payouts' => 6000],
            ['rank' => 'Msgt', 'sponsors' => 140, 'payouts' => 7000],
            ['rank' => 'First sgt', 'sponsors' => 160, 'payouts' => 8000],
            ['rank' => 'Sgt maj', 'sponsors' => 180, 'payouts' => 9000],
            ['rank' => 'Wo', 'sponsors' => 200, 'payouts' => 10000],
            ['rank' => 'Cwo2', 'sponsors' => 220, 'payouts' => 11000],
            ['rank' => 'Cwo3', 'sponsors' => 240, 'payouts' => 12000],
            ['rank' => 'Cwo4', 'sponsors' => 260, 'payouts' => 13000],
            ['rank' => '2nd lt', 'sponsors' => 280, 'payouts' => 14000],
            ['rank' => 'Ist lt', 'sponsors' => 300, 'payouts' => 15000],
            ['rank' => 'Capt', 'sponsors' => 320, 'payouts' => 16000],
            ['rank' => 'Major', 'sponsors' => 340, 'payouts' => 17000],
            ['rank' => 'Lt col', 'sponsors' => 360, 'payouts' => 18000],
            ['rank' => 'Col', 'sponsors' => 380, 'payouts' => 19000],
            ['rank' => 'Brig gen', 'sponsors' => 400, 'payouts' => 20000],
            ['rank' => 'Major gen', 'sponsors' => 420, 'payouts' => 21000],
            ['rank' => 'LT gen', 'sponsors' => 440, 'payouts' => 22000],
            ['rank' => 'General', 'sponsors' => 460, 'payouts' => 23000],
            ['rank' => 'Admiral', 'sponsors' => 480, 'payouts' => 24000],
            ['rank' => 'Presidential', 'sponsors' => 500, 'payouts' => 25000],
            ['rank' => 'P1', 'sponsors' => 600, 'payouts' => 30000],
            ['rank' => 'P2', 'sponsors' => 700, 'payouts' => 35000],
            ['rank' => 'P3', 'sponsors' => 800, 'payouts' => 40000],
            ['rank' => 'P4', 'sponsors' => 900, 'payouts' => 45000],
            ['rank' => 'P5', 'sponsors' => 1000, 'payouts' => 50000],
        ];

        $existingRanks = Rank::all();

        if(!count($existingRanks)){
            foreach($ranks as $rank){
                $r = new Rank();
                $r->rank = $rank['rank'];
                $r->sponsors = $rank['sponsors'];
                $r->payouts = $rank['payouts'];
                $r->save();
            }
        }
    }
}
