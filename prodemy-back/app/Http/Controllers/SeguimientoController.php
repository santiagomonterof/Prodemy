<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\Models\Seguimiento;


class SeguimientoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $listaDeSeguimientos = Seguimiento::all();
        return $listaDeSeguimientos;
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
        $seguimiento = new Seguimiento();
        $seguimiento->fill($request->all());
        $seguimiento->save();
        return $seguimiento;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Seguimiento  $seguimiento
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $objSeguimiento = Seguimiento::find($id);
        if ($objSeguimiento == null) {
            return response()->json(["message" => "Seguimiento no encontrado"], Response::HTTP_NOT_FOUND);
        }
        return $objSeguimiento;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Seguimiento  $seguimiento
     * @return \Illuminate\Http\Response
     */
    public function edit(Seguimiento $seguimiento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Seguimiento  $seguimiento
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $objSeguimiento = Seguimiento::find($id);
        if ($objSeguimiento == null) {
            return response()->json(["message" => "Seguimiento no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objSeguimiento->fill($request->all());
        $objSeguimiento->save();
        return $objSeguimiento;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Seguimiento  $seguimiento
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $objSeguimiento = Seguimiento::find($id);
        if ($objSeguimiento == null) {
            return response()->json(["message" => "Seguimiento no encontrado"], Response::HTTP_NOT_FOUND);
        }

        $objSeguimiento->delete();
        return response()->json(["message" => "Seguimiento eliminado"], Response::HTTP_OK);
    }
}
