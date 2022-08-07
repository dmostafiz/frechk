<?php
return [

    'env' => env('PAYPAL_ENV', 'sandbox'),
    
    'client_id' => env('PAYPAL_CLIENT_ID', null),
    'client_secret' => env('PAYPAL_CLIENT_SECRET', null),

    'test' => [
        'client_id' => env('PAYPAL_CLIENT_ID_SANDBOX', null),
        'client_secret' => env('PAYPAL_CLIENT_SECRET_SANDBOX', null),
    ]
];
