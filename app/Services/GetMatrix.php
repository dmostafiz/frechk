<?php

namespace App\Services;

use App\Models\User;
use stdClass;

class GetMatrix
{

    private $maxDepth = 10;

    public function prepareNodes($userID)
    {

        $user =  User::where('id', $userID)->first();

        $std = new stdClass();
        $std->id = $user->id;
        $std->name = $user->first_name.' '.$user->last_name;
        $std->title = $user->email;
        $std->children = $this->getChildren($user, $this->maxDepth, 0);

        return $std;
    }

    protected function getChildren($parent, $maxDepth, $currentDepth = 0)
    {

        $node = [];

        $children =  User::where('parent_id', $parent->id)->get();
 
        $nextDepth = ++$currentDepth;

        foreach ($children as $child) {

            if ($maxDepth > $currentDepth) {

                $std = new stdClass();
                $std->id = $child->id;
                $std->name = $child->first_name. ' '. $child->last_name;
                $std->title = $child->email;
                $std->ref_id = $child->parent_id;
                $std->children = $this->getChildren($child, $maxDepth, $nextDepth);

                $node[] = $std;
            }
        }

        return $node;
    }
}
