import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFormCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoria_id, setCategoria_id] = useState("");
  const { createCourse } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({
      title,
      description,
      categoria_id,
    });
    setTitle("");
    setDescription("");
    setCategoria_id("");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form__container__data">
        <input disabled id="domId_course" className="hidden" />
        <h1 className="form__container__data__title"> Crea tu curso</h1>
        <input
          placeholder="Añade tu título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          required
          id="domNombre_course"
        />
        <textarea
          placeholder="Añade tu descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          id="domDescripcion_course"
        ></textarea>
        <input
          placeholder="Añade la categoría"
          onChange={(e) => setCategoria_id(e.target.value)}
          value={categoria_id}
          autoFocus
          required
          id="domCategory_course"
        />
        <button className="form__container__data__btn">Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormCourse;
