<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Categoria;


class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeCategorias = Categoria::all();
        return $listaDeCategorias;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $categoria = new Categoria();
        $categoria->fill($request->all());
        $categoria->save();
        return $categoria;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objCategoria = Categoria::find($id);
        if ($objCategoria == null) {
            return response()->json(["message" => "Categoria no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objCategoria;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objCategoria = Categoria::find($id);
        if ($objCategoria == null) {
            return response()->json(["message" => "Categoria no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objCategoria->fill($request->all());
        $objCategoria->save();
        return $objCategoria;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objCategoria = Categoria::find($id);
        if ($objCategoria == null) {
            return response()->json(["message" => "Categoria no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objCategoria->delete();
        return response()->json(["message" => "Categoria eliminado"], Response::HTTP_OK);
    }
}
