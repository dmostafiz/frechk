<?php

namespace App\Exceptions;


use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Inertia\Inertia;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        // dd($response);
        // app()->environment(['local', 'testing']) &&
        if (!app()->environment(['local', 'testing']) && in_array($response->getStatusCode(), [500, 503, 404, 403, 401])) {
            return Inertia::render('Errors/ErrorPage', ['statusCode' => $response->getStatusCode()])
                ->toResponse($request)
                ->setStatusCode($response->getStatusCode());
        } else if ($response->getStatusCode() === 419) {
            return back()->with([
                'message' => __('The page expired, please try again.'),
            ]);
        }
    
        return $response;
    }
}
