<?php

namespace App\Http\Controllers;

use App\Models\Livro;
use Illuminate\Http\Request;

class LivroController extends Controller
{
    public function index()
    {
        $livros = Livro::all();
        return response()->json($livros);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'isbn' => 'required',
            'pages' => 'required|integer',
            'edition' => 'required',
            'publisher' => 'required',
        ]);

        $livro = Livro::create($request->all());
        return response()->json($livro);
    }

    public function show(Livro $livro)
    {
        return response()->json($livro);
    }

    public function update(Request $request, Book $livro)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'isbn' => 'required',
            'pages' => 'required|integer',
            'edition' => 'required',
            'publisher' => 'required',
        ]);

        $livro->update($request->all());
        return response()->json($livro);
    }

    public function destroy(Livro $livro)
    {
        $livro->delete();
        return response()->json(['message' => 'Livro excluído com sucesso']);
    }
}