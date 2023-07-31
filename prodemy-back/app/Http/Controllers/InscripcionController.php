<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Inscripcion;


class InscripcionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeInscripciones = Inscripcion::all();
        return $listaDeInscripciones;
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
        $inscripcion = new Inscripcion();
        $inscripcion->fill($request->all());
        $inscripcion->save();
        return $inscripcion;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inscripcion  $inscripcion
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objInscripcion = Inscripcion::find($id);
        if ($objInscripcion == null) {
            return response()->json(["message" => "Inscripcion no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objInscripcion;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inscripcion  $inscripcion
     * @return \Illuminate\Http\Response
     */
    public function edit(Inscripcion $inscripcion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Inscripcion  $inscripcion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objInscripcion = Inscripcion::find($id);
        if ($objInscripcion == null) {
            return response()->json(["message" => "Inscripcion no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objInscripcion->fill($request->all());
        $objInscripcion->save();
        return $objInscripcion;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inscripcion  $inscripcion
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objInscripcion = Inscripcion::find($id);
        if ($objInscripcion == null) {
            return response()->json(["message" => "Inscripcion no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objInscripcion->delete();
        return response()->json(["message" => "Inscripcion eliminado"], Response::HTTP_OK);
    }
}
