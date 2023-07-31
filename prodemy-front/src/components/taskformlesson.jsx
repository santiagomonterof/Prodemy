import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFormLesson() {
  const [tema, setTema] = useState("");
  const [contenido, setContenido] = useState("");
  const [video, setVideo] = useState("");
  const [tipo, setTipo] = useState("");
  const [curso_id, setCurso_id] = useState("");
  const { createLesson } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createLesson({
      tema,
      contenido,
      video,
      tipo,
      curso_id,
    });
    setTema("");
    setContenido("");
    setTipo("");
    setVideo("");
    setCurso_id("");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form__container__data">
        <input disabled id="domLesson_id" className="hidden" />
        <h1 className="form__container__data__title"> Crea tu lección</h1>
        <input
          placeholder="Añade tu tema"
          onChange={(e) => setTema(e.target.value)}
          value={tema}
          autoFocus
          required
          id="domLesson_tema"
        />
        <textarea
          placeholder="Añade tu contenido"
          onChange={(e) => setContenido(e.target.value)}
          value={contenido}
          required
          id="domLesson_contenido"
        ></textarea>
        <input
          placeholder="Añade la video"
          onChange={(e) => setVideo(e.target.value)}
          value={video}
          autoFocus
          required
          id="domLesson_video"
        />
        <input
          placeholder="Añade la tipo"
          onChange={(e) => setTipo(e.target.value)}
          value={tipo}
          autoFocus
          required
          id="domLesson_tipo"
        />
        <input
          placeholder="Añade el id del curso"
          onChange={(e) => setCurso_id(e.target.value)}
          value={curso_id}
          autoFocus
          required
          id="domLesson_cursoID"
        />
        <button className="form__container__data__btn">Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormLesson;
