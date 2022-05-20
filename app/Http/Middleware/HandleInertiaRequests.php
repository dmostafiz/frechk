<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    // protected $rootView = 'admin';

    public function rootView(Request $request)
    {
        // dd($request->header());

        $pathArr = explode('/', $request->path());

        if($pathArr[0] && $pathArr[0] == 'admin'){
            
            return 'admin';

        }else{

            return 'public';

        }
        
    }

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
            'flash' => [
                'success' => session()->has('success') ? session()->get('success') : '',
                'error' => session()->has('error') ? session()->get('error') : '',
                'info' => session()->has('info') ? session()->get('info') : '',
                'warning' => session()->has('warning') ? session()->get('warning') : '',
            ],
        ]);
    }
}
