<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Menu;
use App\Services\MyFile;
use Illuminate\Support\Str;

class MenuController extends Controller
{

    public function index(Request $request)
    {

        // dd($request->all());    

        $menus = Menu::query();

        if ($request->status) {
            $menus->where('status', $request->status);
        }
        // dd($request->q);
        if ($request->category) {
            $menus->where('category_id', $request->category);
        }

        if ($request->q) {
            $menus->where('name', 'LIKE', '%' . $request->q . '%')
                ->orWhere('title', 'LIKE', '%' . $request->q . '%')
                ->orWhere('description', 'LIKE', '%' . $request->q . '%')
                ->orWhere('price', 'LIKE', '%' . $request->q . '%')
                ->orWhere('status', 'LIKE', '%' . $request->q . '%');
        }


        if ($request->orderBy) {
            $menus->orderBy($request->orderBy, 'DESC');
        }



        // if ($request->category) {
        //     $menus->where('category', function($category) use ($request){
        //         dd($category);
        //         return $request->category;
        //     });
        // }



        $menus = $menus->get()
            ->load([
                'category',
                'tags'
            ])
            ->map(function ($menu) {
                $menu->images = json_decode($menu->images);
                return $menu;
            });

        $categories = Category::all();

        // dd($menus);



        return Inertia::render('Admin/Menus/Menus', [
            'menus' => $menus,
            'categories' => $categories
        ]);
    }

    public function create_menu()
    {
        $tags = Tag::latest()->cursor();
        $categories = Category::latest()->cursor();

        return Inertia::render('Admin/Menus/CreateMenu', [
            'tags' => $tags,
            'categories' => $categories
        ]);
    }

    public function store_menu(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|max:120|unique:menus,name',
            'title' => 'required|max:200',
            'price' => 'required|integer',
            'description' => 'required',
            'image' => 'required|image|max:2024',
            'images*' => 'required|image|max:2024',
            'category' => 'required',
            'tags' => 'required',
            'status' => 'required'
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {
            $file = new MyFile();
            $imagePath = $file->uploadDir('menu')
                ->upload($request->file('image'))
                ->uploadedFilePath();
        }

        $images = [];

        if ($request->has('images')) {
            foreach ($request->images as $imageFile) {
                $file = new MyFile();
                $images[] = $file->uploadDir('menu_gallery')
                    ->upload($imageFile)
                    ->uploadedFilePath();
            }
        }

        $encodedImages = json_encode($images);

        $menu = new Menu();
        $menu->name = $request->name;
        $menu->slug = Str::slug($request->name);
        $menu->title = $request->title;
        $menu->price = $request->price;
        $menu->description = $request->description;
        $menu->image = $imagePath;
        $menu->images = $encodedImages;
        $menu->category_id = $request->category;
        $menu->status = $request->status;
        $menu->homepageCarousel = $request->homepageCarousel;
        $menu->popularFoods = $request->popularFoods;
        $menu->save();

        $tagIds = [];

        foreach ($request->tags as $tag) {
            $tagIds[] = $tag['value'];
        }

        $menu->tags()->attach($tagIds);

        session()->flash('success', 'Menu created successfully!');

        return redirect()->route('admin.menu.all');
    }


    public function edit_menu(Request $request)
    {
        $menu = Menu::query()->where('id', $request->menuId)->get()->load('tags')->map(function ($menu) {
            $menu->images = json_decode($menu->images);
            return $menu;
        });

        $menu = $menu[0];

        $tags = Tag::latest()->cursor();
        $categories = Category::latest()->cursor();

        return Inertia::render('Admin/Menus/EditMenu', [
            'menu' => $menu,
            'tags' => $tags,
            'categories' => $categories,
        ]);
    }


    public function update_menu(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|max:120|unique:menus,name,' . $request->id,
            'title' => 'required|max:200',
            'price' => 'required|integer',
            'description' => 'required',
            'category' => 'required',
            'tags' => 'required',
            'status' => 'required'
        ]);

        $menu = Menu::where('id', $request->id)->get()->map(function ($menu) {
            $menu->images = json_decode($menu->images);
            return $menu;
        })[0];

        $imagePath = $menu->image;

        if ($request->hasFile('image') == true) {

            $request->validate([
                'image' => 'image|max:2024',
            ]);

            $file = new MyFile();
            $file->uploadDir('menu');
            if ($menu->image) {
                $file->deleteByFilePath($menu->image);
            }
            $file->upload($request->file('image'));
            $imagePath = $file->uploadedFilePath();
        }

        $images = [];


        if ($request->hasFile('images') == true) {

            $request->validate([
                'images.*' => 'image|max:2024'
            ]);

            if ($menu->images) {
                foreach ($menu->images as $img) {
                    $file = new MyFile();
                    $file->deleteByFilePath($img);
                }
            }


            foreach ($request->images as $imageFile) {
                $file = new MyFile();
                $images[] = $file->uploadDir('menu_gallery')
                    ->upload($imageFile)
                    ->uploadedFilePath();
            }
        } else {
            $images = $menu->images;
        }

        $encodedImages = json_encode($images);

        $menu->name = $request->name;
        $menu->slug = Str::slug($request->name);
        $menu->title = $request->title;
        $menu->price = $request->price;
        $menu->description = $request->description;
        $menu->image = $imagePath;
        $menu->images = $encodedImages;
        $menu->category_id = $request->category;
        $menu->status = $request->status;
        $menu->homepageCarousel = $request->homepageCarousel;
        $menu->popularFoods = $request->popularFoods;
        $menu->save();

        $tagIds = [];

        foreach ($request->tags as $tag) {
            $tagIds[] = $tag['value'];
        }

        $menu->tags()->sync($tagIds);

        session()->flash('success', 'Menu updated successfully!');

        return redirect()->back();
    }

    public function delete_menu(Request $request)
    {

        $menu = Menu::findOrFail($request->id);


        if ($menu->image) {
            $mg = new MyFile();
            $mg->deleteByFilePath($menu->image);
        }

        if ($menu->images) {
            $images = json_decode($menu->images);

            foreach ($images as $image) {
                $mg = new MyFile();
                $mg->deleteByFilePath($menu->image);
            }
        }

        $menu->tags()->detach();
        $menu->delete();

        session()->flash('success', 'Menu deleted successfully!');



        return redirect()->route('admin.menu.edit', $request->id);
    }
}
