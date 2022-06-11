<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\MyFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function updateAvatar(Request $request)
    {
        //    dd($request->all());

        $user = User::where('id', auth()->user()->id)->first();

        $file = new MyFile();
        $filePath = $file->uploadDir('/profile')
            ->deleteByFilePath($user->avatar)
            ->upload($request->file)
            ->uploadedFilePath();

        $user->avatar = $filePath;
        $user->save();

        session()->flash('success', 'Avatar updated successfully!');
        return redirect()->back();
    }

    public function updateProfile(Request $request)
    {

        $request->validate([
            'first_name' => 'required|max:50',
            'last_name' => 'required|max:50',
            'email' => 'required|max:100|unique:users,email,' . auth()->user()->id,
        ]);

        $user = User::where('id', auth()->user()->id)->first();

        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;

        $user->save();

        session()->flash('success', 'Profile updated successfully!');
        return redirect()->back();
    }

    public function updatePassword(Request $request)
    {
        //   dd($request->all());
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|confirmed|min:6',
        ]);

        $user = User::where('id', auth()->user()->id)->first();

        // dd($request->current_password);

        if($user){
            if(Hash::check($request->current_password, $user->password)){
                $user->password = Hash::make($request->password);
                $user->save();

                session()->flash('success', 'Password changed successfully!');
                return redirect()->back();
            }
        }

        session()->flash('error', 'Password not matched!');
        return redirect()->back();
    }
}
