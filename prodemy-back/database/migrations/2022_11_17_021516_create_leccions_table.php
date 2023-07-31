<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leccions', function (Blueprint $table) {
            $table->id();
            $table->string('tema');
            $table->string('contenido');
            $table->string('video');
            $table->string('tipo');

            $table->bigInteger('curso_id')->unsigned();
            $table->foreign('curso_id')
                ->references('id')
                ->on('cursos')
                ->onDelete('cascade');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leccions');
    }
};
