<?php

namespace App\Providers;

use App\Models\Day;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);

        // if(){

        // }
        if (Schema::hasTable('days')) {
            $days = [
                'Saturday',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
            ];

            $getDays = Day::all()->toArray();

            $checkDays = [];

            foreach ($getDays as $d) {
                $checkDays[] = $d['day'];
            }

            // dd($days);

            foreach ($days  as $day) {
                // $getDay = Day::where('day', $day)->first();

                if (!in_array($day, $checkDays)) {
                    $createDay = new Day();
                    $createDay->day = $day;
                    $createDay->save();
                }
            }
        }
    }
}
