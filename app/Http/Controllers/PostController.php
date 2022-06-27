<?php

namespace App\Http\Controllers;

use App\Models\Post;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function insertData(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:3',
            'content' => 'required|string|min:8',
        ]);
        if( $validator->fails()){
            return response()->json([
                'status' => 'error',
                'errors' =>  $validator->errors()
            ]);
        }

        $post = new Post();
        $post->title = $request->title;
        $post->content = $request->content;
        $post->save();

        return response()->json([
            'status' => 'success',
            'data' => $post
        ]);
    }

    public function getPosts(){
        $posts= Post::orderBy('id','desc')->get();
        return response()->json([
            'status' => 'success',
            'posts' =>$posts
        ]);
    }

    public function getPost($id){
        $post= Post::find($id);
        return response()->json([
            'status' => 'success',
            'post' =>$post
        ]);
    }

    public function updatePost(Request $request,$id){
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|min:3',
            'content' => 'required|string|min:8',
        ]);
        if( $validator->fails()){
            return response()->json([
                'status' => 'error',
                'errors' =>  $validator->errors()
            ]);
        }
        $current_post = Post::find($id);
        $current_post->title = $request->title;
        $current_post->content = $request->content;
        $current_post->save();
        return response()->json([
            'status' => 'success',
        ]);
    }

    public function deletePost($id){
        $post= Post::find($id);
        $post->delete();
        return response()->json([
            'status' => 'success',
        ]);
    }




}
