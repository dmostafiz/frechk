<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerControllerAdmin;
use App\Http\Controllers\Admin\MenuController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\PackageController;
use App\Http\Controllers\Admin\SubscriptionController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\PaymentProcessController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SubscribeController;
use App\Http\Controllers\UserController;
use App\Models\AffiliateClick;
use App\Models\Notification;
use App\Models\Order;
use App\Models\Subscription;
use App\Models\User;
use App\Services\GetMatrix;
use App\Services\MatrixProfite;
use App\Services\Paypal\WebHook;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('visitor')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('public.index');
    Route::get('/menus', [HomeController::class, 'menus'])->name('public.menus');
    Route::get('/checkout', [CheckoutController::class, 'index'])->name('public.checkout');
    Route::get('/subscribe/{slug}', [SubscribeController::class, 'index'])->name('public.subscribe');
    Route::get('/menu/{slug}', [HomeController::class, 'menuDetails'])->name('public.details');
});

Route::post('/add_to_cart', [CartController::class, 'addToCart'])->name('add.cart');
Route::post('/remove_from_cart', [CartController::class, 'removeFromCart'])->name('remove.cart');


Route::prefix('customer')->middleware(['auth', 'verified'])->group(function () {

    Route::get('/nodes', function (Request $request) {

        $myId = auth()->user() ? auth()->user()->id : null;

        $matrix = new GetMatrix();

        $myMatrix = $matrix->prepareNodes($myId);

        dd($myMatrix);
    });

    Route::get('/my_account', [CustomerController::class, 'profile'])->name('customer.profile');

    Route::get('/orders', [CustomerController::class, 'orders'])->name('customer.orders');
    Route::get('/affiliate_program', [CustomerController::class, 'affiliateProgram'])->name('customer.affiliate');
    Route::get('/subcriptions', [CustomerController::class, 'subcriptions'])->name('customer.subcriptions');
    Route::get('/favourites', [CustomerController::class, 'favourites'])->name('customer.favourites');
    Route::get('/addresses', [CustomerController::class, 'addresses'])->name('customer.addresses');

    Route::post('/save_address', [CustomerController::class, 'storeAddress'])->name('save.address');
    Route::post('/change_default_addr', [CustomerController::class, 'changeDefault_address'])->name('change.default_addr');
    Route::post('/delete_address', [CustomerController::class, 'delete_address'])->name('delete.address');

    Route::post('/submit_order', [CheckoutController::class, 'submit_order'])->name('submit_order');

    Route::post('/subscribe_now', [SubscribeController::class, 'subscribeNow'])->name('subscribe.now');

    Route::post('process-paypal', [PaymentProcessController::class, 'paypal'])->name('process.paypal');

    Route::get('handle-subscription-paypal', [PaymentProcessController::class, 'handleSubscriptionPurchase'])->name('handle.subscription');
});



Route::middleware(['auth'])->group(function () {
    Route::post('/update_avatar', [UserController::class, 'updateAvatar'])->name('update.avatar');
    Route::post('/update_profile', [UserController::class, 'updateProfile'])->name('update.profile');
    Route::post('/update_password', [UserController::class, 'updatePassword'])->name('update.password');


    Route::post('/notification', function (Request $request) {

        // dd($request->all());

        $not = Notification::where('id', $request->notificationId)->first();

        if ($not) {
            $not->status = true;
            $not->save();

            return redirect()->to($not->url);
        }
    })->name('view.notification');
});


Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function () {

    Route::get('/dashboard', function () {
        $recentActivities = Notification::where('user_id', null)
            ->where('status', true)
            ->latest()
            ->get()
            ->take(6);

        $pendingOrders = Order::where('status', 'pending')->get();
        $processingOrders = Order::where('status', 'processing')->get();
        $deliveredOrders = Order::where('status', 'delivered')->get();

        return Inertia::render('Admin/Dashboard', [
            'recentActivities' => $recentActivities,
            'pendingOrders' => $pendingOrders,
            'processingOrders' => $processingOrders,
            'deliveredOrders' => $deliveredOrders,
        ]);
    })->name('admin.dashboard');

    Route::get('/my_account', [AdminController::class, 'profile'])->name('admin.profile');

    Route::get('/menus', [MenuController::class, 'index'])->name('admin.menu.all');
    Route::get('/create_menu', [MenuController::class, 'create_menu'])->name('admin.menu.create');
    Route::post('/create_menu', [MenuController::class, 'store_menu'])->name('menus.create');
    Route::get('/edit_menu/{menuId}', [MenuController::class, 'edit_menu'])->name('admin.menu.edit');
    Route::post('/edit_menu', [MenuController::class, 'update_menu'])->name('menus.update');
    Route::post('/delete_menu', [MenuController::class, 'delete_menu'])->name('menus.delete');

    Route::get('/tags', [TagController::class, 'index'])->name('admin.category.tags');
    Route::post('/tags', [TagController::class, 'create_tag'])->name('tags.create');
    Route::post('/tags_update', [TagController::class, 'update_tag'])->name('tags.update');
    Route::post('/delete_tag', [TagController::class, 'delete_tag'])->name('tags.delete');

    Route::get('/categories', [CategoryController::class, 'index'])->name('admin.category.categories');
    Route::post('/categories', [CategoryController::class, 'create_category'])->name('categories.create');
    Route::post('/categories_update', [CategoryController::class, 'update_category'])->name('categories.update');
    Route::post('/delete_category', [CategoryController::class, 'delete_category'])->name('categories.delete');

    Route::get('/orders', [OrderController::class, 'index'])->name('admin.orders.all');
    Route::get('/order/{orderId}', [OrderController::class, 'orderDetails'])->name('admin.orders.details');
    Route::post('/order/update', [OrderController::class, 'updateOrderStatus'])->name('admin.update.order');


    Route::get('/packages', [PackageController::class, 'index'])->name('admin.package.all');
    Route::get('/packages/create', [PackageController::class, 'create'])->name('admin.package.create');
    Route::get('/package/{packageId}/edit', [PackageController::class, 'edit'])->name('admin.package.edit');
    Route::get('/package/{packageId}/details', [PackageController::class, 'details'])->name('admin.package.details');

    Route::post('/packages/create', [PackageController::class, 'store'])->name('create.package');
    Route::post('/packages/update', [PackageController::class, 'update'])->name('update.package');

    Route::post('/pkg/menu/day/update', [PackageController::class, 'menuPackageDayUpdate'])->name('menu.package.day.update');

    Route::get('/subscriptions', [SubscriptionController::class, 'index'])->name('admin.subscription.all');

    Route::get('/subscription/{subscriptionId}', [SubscriptionController::class, 'subscription'])->name('admin.subscription.details');

    Route::get('/deliveries', [SubscriptionController::class, 'deliveries'])->name('admin.deliveries');

    Route::post('/deliveries', [SubscriptionController::class, 'makeDelivery'])->name('admin.deliver');

    Route::get('/customers', [CustomerControllerAdmin::class, 'index'])->name('admin.customers.all');
    Route::get('/customer/{customerId}', [CustomerControllerAdmin::class, 'details'])->name('admin.customers.details');
});

Route::get('/ref/{customerId}', function (Request $request) {

    $parent = User::where('customer_id', $request->customerId)->first();

    if ($parent) {

        session()->put('ref', $parent->id);

        $ac = new AffiliateClick();
        $ac->user_id = $parent->id;
        $ac->save();
    }

    return redirect()->route('register');
})->name('invite');

Route::get('/redirect_to', function (Request $request) {

    // dd($request);
    // dd( $request->user()->user_type );
    if ($request->user() && $request->user()->user_type == 'admin') {
        return Inertia::location('/admin/dashboard');
    }

    return Inertia::location('/');
});

Route::get('/thank_you', function (Request $request) {
    $type = $request->t;
    return Inertia::render('ThankYou', [
        'type' => $type
    ]);
})->middleware('auth')->name('thank.you');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('ExecuteAgreement.php', [PaymentProcessController::class, 'executePaypalAgreement'])->name('axecute.agreement');


// Route::get('create_webhook', function () {

//     $wh = new WebHook();
//     $wh->create();
// });

Route::post('/webhook/execute/62efefdab7ff2', function (Request $request) {

    // $wh = new WebHook();
    // if ($wh->verifyWebHook($request)) {

    if ($request->event_type = 'PAYMENT.SALE.COMPLETED') {

        $paypalAgreementID = $request->resource->billing_agreement_id;

        if ($request->resource->state == 'completed') {

            $subscription = Subscription::where('paypal_agreement_id', $paypalAgreementID);

            if ($subscription) {

                $subscription->status = 'running';
                $subscription->save();

                $user = User::where('id', $subscription->user_id)->first();

                $mp = new MatrixProfite();
                $mp->execute($user, 10, $request->resource->amount->total);
            }
        }
    }
    // } else {
    //     dd('Webhook not verified!');
    // }
})->name('webhook');

require __DIR__ . '/auth.php';
