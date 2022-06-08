<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use PhpParser\Node\Stmt\TryCatch;
use stdClass;

class MyFile
{
    private $uploadDir = "/";
    private $uploadedFileName;
    private $uploadedFilePath;

    public function uploadDir($uploadDir = "/")
    {
        $this->uploadDir = $uploadDir;
        return $this;
    }


    public function upload($file)
    {
        // dd('Uploaded File uuuu: ',$file);

        try {

            if (!Storage::disk('public')->exists($this->uploadDir)) {
                Storage::disk('public')->makeDirectory($this->uploadDir);
            }

            $ext = $file->getClientOriginalExtension();
            $fileName = $this->uploadDir . '-' . time() . mt_rand(1000000000, 9999999999) . '.' . $ext;

            $fullPath = 'storage/' . $this->uploadDir . '/' . $fileName;

            Image::make($file)->save($fullPath);

            $this->uploadedFileName = $fileName;
            $this->uploadedFilePath = $fullPath;

            return $this;
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    public function uploadedFileName()
    {
        return $this->uploadedFileName;
    }

    public function uploadedFilePath()
    {
        return $this->uploadedFilePath;
    }



    public function uploadedFileInfo()
    {

        $fileObj = new stdClass();
        $fileObj->uploadedFileName = $this->uploadedFileName;
        $fileObj->uploadedFilePath = $this->uploadedFilePath;

        return $fileObj;
    }

    public function deleteByFilePath($filePath)
    {

        try {

            if ($filePath != null && file_exists(public_path($filePath))) {

                unlink(public_path($filePath));
            }
        } catch (\Throwable $th) {
            throw $th;
        }

        return $this;
    }
}
