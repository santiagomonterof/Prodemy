import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskFormCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit} className="form__container__data">
        <input disabled id="domId" className="hidden" />
        <h1 className="form__container__data__title"> Crea tu categoría</h1>
        <input
          placeholder="Añade tu título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          required
          id="domNombre"
        />
        <textarea
          placeholder="Añade tu descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          id="domDescripcion"
        ></textarea>
        <button className="form__container__data__btn">Guardar</button>
      </form>
    </div>
  );
}

export default TaskFormCategory;
