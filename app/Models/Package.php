<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    use HasFactory;

    public function days()
    {
        return $this->belongsToMany(Day::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function menus()
    {
        return $this->belongsToMany(
            Menu::class,
            'day_menu',
            'package_id',
            'menu_id'
        );
    }
}
