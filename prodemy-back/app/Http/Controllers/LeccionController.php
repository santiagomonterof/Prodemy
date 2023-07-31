<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use App\Models\Leccion;


class LeccionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeLecciones = Leccion::all();
        return $listaDeLecciones;
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
        $leccion = new Leccion();
        $leccion->fill($request->all());
        $leccion->save();
        return $leccion;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Leccion  $leccion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objLeccion = Leccion::find($id);
        if ($objLeccion == null) {
            return response()->json(["message" => "Leccion no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objLeccion;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Leccion  $leccion
     * @return \Illuminate\Http\Response
     */
    public function edit(Leccion $leccion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Leccion  $leccion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objLeccion = Leccion::find($id);
        if ($objLeccion == null) {
            return response()->json(["message" => "Leccion no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objLeccion->fill($request->all());
        $objLeccion->save();
        return $objLeccion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Leccion  $leccion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objLeccion = Leccion::find($id);
        if ($objLeccion == null) {
            return response()->json(["message" => "Leccion no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objLeccion->delete();
        return response()->json(["message" => "Leccion eliminado"], Response::HTTP_OK);
    }
}
