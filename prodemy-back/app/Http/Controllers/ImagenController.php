<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Imagen;
use Nette\Utils\Image;

class ImagenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeImagenes = Imagen::all();
        return $listaDeImagenes;
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
        $imagen = new Imagen();
        $imagen->fill($request->all());
        $imagen->save();
        return $imagen;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objImagen = Imagen::find($id);
        if ($objImagen == null) {
            return response()->json(["message" => "Imagen no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objImagen;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function edit(Imagen $imagen)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objImagen = Imagen::find($id);
        if ($objImagen == null) {
            return response()->json(["message" => "Imagen no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objImagen->fill($request->all());
        $objImagen->save();
        return $objImagen;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Imagen  $imagen
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objImagen = Imagen::find($id);
        if ($objImagen == null) {
            return response()->json(["message" => "Imagen no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objImagen->delete();
        return response()->json(["message" => "Imagen eliminado"], Response::HTTP_OK);
    }
}
