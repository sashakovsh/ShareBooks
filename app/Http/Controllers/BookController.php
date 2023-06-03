<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'img' => 'required|image',
            'name' => 'required|string',
            'author' => 'required|string',
            'description' => 'nullable|string',
        ]);


        $image = $validatedData['img'];


        $extension = $image->getClientOriginalExtension();
        $filename = Str::uuid() . '.' . $extension;


        $path = $image->storeAs('public/images', $filename);


        $imagePath = Storage::url($path);
        $name = $validatedData['name'];
        $author = $validatedData['author'];
        $description = $validatedData['description'];


        $model = new Book();
        $model->img = $imagePath;
        $model->name = $name;
        $model->author = $author;
        $model->description = $description;
        $model->save();

        return response()->json(['message' => 'Image stored successfully']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {

        $validatedData = $request->validate([
            'img' => 'required|image',
            'name' => 'required|string',
            'author' => 'required|string',
            'description' => 'nullable|string',
        ]);


        $model = Book::find($id);

        if (!$model) {
            return response()->json(['message' => 'Image not found'], 404);
        }

        // Update the model fields
        $model->title = $validatedData['title'];
        $model->description = $validatedData['description'];

        // Save the model changes
        $model->save();

        return response()->json(['message' => 'Image updated successfully']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }


    public function getBookList()
    {
        $bookList = [
            ["id" => 1, "name" => "book1", "author" => "A", "genre" => '1'],
            ["id" => 2, "name" => "book2", "author" => "B", "genre" => '2'],
            ["id" => 3, "name" => "book3", "author" => "C", "genre" => '1'],
            ["id" => 4, "name" => "book4", "author" => "C", "genre" => '2'],
        ];
        return response()->json($bookList);
    }

    public function getBookSingle(Request $req)
    {
        $bookList = [
            ["id" => 1, "name" => "book1", "author" => "A", "genre" => '1'],
        ];

        return response()->json($bookList);
    }
}
