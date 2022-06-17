<?php

namespace App\Services;

use App\Models\Notification;
use Exception;

class Notify
{
    private $user = null;
    private $title = null;
    private $subtitle = null;
    private $text = null;
    private $url = null;

    public function user($user)
    {
        $this->user = $user;
        return $this;
    }

    public function title($title)
    {
        $this->title = $title;
        return $this;
    }

    public function subtitle($subtitle)
    {
        $this->subtitle = $subtitle;
        return $this;
    }
    
    public function text($text)
    {
        $this->text = $text;
        return $this;
    }

    public function url($url)
    {
        $this->url = $url;
        return $this;
    }

    public function storeDatabase()
    {
        
        if($this->title == null){
            throw new Exception('No notification title was given');
        }

        if($this->subtitle == null){
            throw new Exception('No notification subtitle was given');
        }

        $notify = new Notification();
        $notify->user_id = $this->user ? $this->user->id : null;
        $notify->title = $this->title;
        $notify->subtitle = $this->subtitle;
        $notify->text = $this->text;
        $notify->url = $this->url;
        $notify->save();

        return $this;
    } 

    public function sendEmail(){

        if($this->title == null){
            throw new Exception('No notification title was given');
        }

        if($this->subtitle == null){
            throw new Exception('No notification subtitle was given');
        }

        return $this;
    }

    public function sendMessage(){
        
        if($this->title == null){
            throw new Exception('No notification title was given');
        }

        if($this->subtitle == null){
            throw new Exception('No notification subtitle was given');
        }

        return $this;
    }
}
