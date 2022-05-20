<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Tag;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class TagController extends Controller
{

    public function index(Request $request)
    {

        // dd($editTag);
        $tags = Tag::latest()->cursor();
        return Inertia::render('Admin/Menus/Tags', [
            'tags' => $tags
        ]);
    }

    public function create_tag(Request $request)
    {

        $validate = $request->validate([
            'name' => 'required|unique:tags,name|max:100',
            'description' => 'required',
        ]);

        $tag = new Tag();
        $tag->name = $request->name;
        $tag->slug = Str::slug($request->name);
        $tag->description = $request->description;
        $tag->save();

        // dd($tag);

        session()->flash('success', 'Tag created successfully!');

        return redirect()->back();
    }

    public function update_tag(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|max:100|unique:tags,name,'.$request->id,
            'description' => 'required',
        ]);

        $tag = Tag::findOrFail($request->id);
        $tag->name = $request->name;
        $tag->slug = Str::slug($request->name);
        $tag->description = $request->description;
        $tag->save();

        // dd($tag);

        session()->flash('success', 'The tag has been updated successfully!');
        return redirect()->back();
    }

    public function delete_tag(Request $request)
    {
        $tag = Tag::findOrFail($request->tagId);
        $tag->delete();

        session()->flash('info', 'The tag has been deleted successfully!');

        return redirect()->back();
    }
}
