<?php

namespace App\Services;

use App\Models\User;

class MatrixProfite
{

    protected $amount;

    public function execute($user, $level, $sellPrice)
    {

        if ($sellPrice > 0) {

            // Calculate 5% of gross sale
            $this->amount =  $sellPrice * 5 / 100;

            $this->shareProfite($user, $level, 1);
        }
    }

    protected function shareProfite($user, $finalLevel, $currentLevel)
    {

        $nextLevel = $currentLevel  + 1;

        if ($currentLevel <= $finalLevel) {

            if ($user->parent_id) {

                $parent = User::where('id', $user->parent_id)->first();

                // Update parent wallet
                if ($currentLevel == 1) {
                    // 17% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 17 / 100);
                } elseif ($currentLevel == 2) {
                    // 14% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 14  / 100);
                } elseif ($currentLevel == 3) {
                    // 13% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 13  / 100);
                } elseif ($currentLevel == 4) {
                    // 11% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 11  / 100);
                } elseif ($currentLevel == 5) {
                    // 10% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 10  / 100);
                } elseif ($currentLevel == 6) {
                    // 9% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 9  / 100);
                } elseif ($currentLevel == 7) {
                    // 8% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 8  / 100);
                } elseif ($currentLevel == 8) {
                    // 7% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 7  / 100);
                } elseif ($currentLevel == 9) {
                    // 6% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 6  / 100);
                } elseif ($currentLevel == 10) {
                    // 5% of (5% of gross sale)
                    $parent->wallet = $parent->wallet + ($this->amount * 5  / 100);
                }

                $parent->save();

                // Update parent wallet

                $this->shareProfite( $parent, $finalLevel, $nextLevel );
            }
        }
    }
}
