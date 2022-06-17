<?php

namespace App\Http\Middleware;

use App\Models\Visitor;
use Closure;
use Illuminate\Http\Request;

class VisitorMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {

        $user = Visitor::where('ip', $request->ip())
            ->where('created_at', '>', now()->subDays(2)->endOfDay())
            ->first();

        if (!$user) {
            $visit = new Visitor();
            $visit->ip = $request->ip();
            $visit->agent = $request->userAgent();
            $visit->path = $request->path();
            $visit->save();
        }

        return $next($request);
    }
}
