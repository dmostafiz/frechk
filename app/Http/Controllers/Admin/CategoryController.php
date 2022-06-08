<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Services\MyFile;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $categories = Category::latest()->cursor();
        return Inertia::render('Admin/Menus/Categories', [
            'categories' => $categories
        ]);
    }

    public function create_category(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|unique:categories,name|max:100',
            'description' => 'required',
            'image' => 'required|image'
        ]);

        $imagePath = null;

        if ($request->hasFile('image')) {

            $file = new MyFile();
            $imagePath = $file->uploadDir('category')
                ->upload($request->file('image'))
                ->uploadedFilePath();
        }

        $category = new Category();
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->description = $request->description;
        $category->image = $imagePath;
        $category->save();

        // dd($category);

        session()->flash('success', 'Category created successfully!');

        return redirect()->back();
    }

    public function update_category(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|max:100|unique:categories,name,' . $request->id,
            'description' => 'required'
        ]);

        $category = Category::findOrFail($request->id);

        $filePath = $category->image;

        if($request->hasFile('image')){
            $file = new MyFile();
            $filePath = $file->uploadDir('category')
            ->deleteByFilePath($category->image)
            ->upload($request->file('image'))
            ->uploadedFilePath();
        }

        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->description = $request->description;
        $category->image =  $filePath;
        $category->save();

        // dd($category);

        session()->flash('success', 'The category has been updated successfully!');
        return redirect()->back();
    }

    public function delete_category(Request $request)
    {
        $category = Category::findOrFail($request->catId);

        $file = new MyFile();
        $file->deleteByFilePath($category->image);

        $category->delete();

        session()->flash('info', 'The category has been deleted successfully!');

        return redirect()->back();
    }
}
