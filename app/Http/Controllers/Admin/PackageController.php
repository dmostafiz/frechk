<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Day;
use App\Models\Menu;
use App\Models\Package;
use App\Services\Paypal\SubscriptionPlan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PackageController extends Controller
{
    //
    public function index()
    {
        $packages = Package::with(['days', 'users'])->get();

        return Inertia::render('Admin/Package/PackageList', [
            'packages' => $packages
        ]);
    }

    public function create()
    {

        $days = Day::get();

        return Inertia::render('Admin/Package/PackageCreate', [
            'days' => $days
        ]);
    }

    public function edit(Request $request)
    {

        $package = Package::where('id', $request->packageId)->with(['days', 'users'])->first();
        $days = Day::get();

        // dd( $package );

        return Inertia::render('Admin/Package/PackageEdit', [
            'pkg' => $package,
            'days' => $days
        ]);
    }

    public function details(Request $request)
    {

        $package = Package::where('id', $request->packageId)
            ->with([

                'days' => function ($query) {
                    $query->with([
                        'menus' => function ($query) {
                            $query->with(['packages']);
                        }
                    ]);
                },

                'users'
            ])
            ->first();

        $days = Day::get();

        $menus = Menu::all();

        // dd( $package );

        return Inertia::render('Admin/Package/PackageDetails', [
            'pkg' => $package,
            'days' => $days,
            'menus' => $menus
        ]);
    }


    public function store(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|max:120|unique:packages,name',
            'title' => 'required|max:200',
            'price' => 'required|integer',
            'description' => 'required',
            'paypal_plan_id' => 'required',
            'days' => 'required',
        ]);


        // $splan = new SubscriptionPlan();

        // $sp = $splan->create(
        //     $request->name,
        //     $request->description,
        //     'month',
        //     $request->price
        // );

        // $splan->update($sp->id);

        // dd($request->all());
        $pkg = new Package();
        $pkg->plan_id = $request->paypal_plan_id;
        $pkg->name = $request->name;
        $pkg->title = $request->title;
        $pkg->slug = Str::slug($request->name);
        $pkg->price = $request->price;
        $pkg->description = $request->description;
        $pkg->payment_interval = 'month';

        $pkg->save();

        $dayIds = [];

        foreach ($request->days as $day) {
            $dayIds[] = $day['value'];
        }

        $pkg->days()->attach($dayIds);

        session()->flash('success', 'Package created successfully!');
        return redirect()->route('admin.package.all');
    }

    public function update(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|max:120|unique:packages,name,' . $request->id,
            'title' => 'required|max:200',
            'price' => 'required|integer',
            'description' => 'required',
            // 'paypal_plan_id' => 'required',
            'days' => 'required',
        ]);

        // dd($request->all());

        $splan = new SubscriptionPlan();

        $sp = $splan->create(
            $request->name,
            $request->description,
            'month',
            $request->price
        );

        $splan->update($sp->id);

        $pkg = Package::where('id', $request->id)->first();
        $pkg->plan_id = $sp->id;
        $pkg->name = $request->name;
        $pkg->title = $request->title;
        $pkg->slug = Str::slug($request->name);
        $pkg->price = $request->price;
        $pkg->description = $request->description;
        $pkg->save();

        $dayIds = [];

        foreach ($request->days as $day) {
            $dayIds[] = $day['value'];
        }

        $pkg->days()->sync($dayIds);

        session()->flash('success', 'Package updated successfully!');
        return redirect()->route('admin.package.edit', $request->id);
    }

    public function menuPackageDayUpdate(Request $request)
    {
        // dd($request->all());
        $day = Day::where('id', $request->dayId)->first();
        $day->menus()->syncWithPivotValues($request->menuIds, ['package_id' => $request->packageId]);

        // $pkg = Package::where('id', $request->packageId)->first();
        // $pkg->menus()->sync($request->menuIds);

        session()->flash('success', 'Menus are synced to the package successfully!');
        return redirect()->route('admin.package.details', $request->packageId);
    }
}
