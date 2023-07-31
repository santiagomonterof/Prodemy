<?php

namespace App\Http\Controllers;

use App\Models\Curso;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class CursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeCursos = Curso::all();
        return $listaDeCursos;
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
        $curso = new Curso();
        $curso->fill($request->all());
        $curso->save();
        return $curso;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objCurso = Curso::find($id);
        if ($objCurso == null) {
            return response()->json(["message" => "Curso no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objCurso;
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function edit(Curso $curso)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objUpdate = Update::find($id);
        if ($objUpdate == null) {
            return response()->json(["message" => "Update no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objUpdate->fill($request->all());
        $objUpdate->save();
        return $objUpdate;
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Curso  $curso
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objCurso = Curso::find($id);
        if ($objCurso == null) {
            return response()->json(["message" => "Curso no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objCurso->delete();
        return response()->json(["message" => "Curso eliminado"], Response::HTTP_OK);
    }
}
