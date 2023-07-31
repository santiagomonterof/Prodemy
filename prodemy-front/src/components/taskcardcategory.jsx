import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCardCategory({ task }) {
  const { deleteTask, updateTask } = useContext(TaskContext);

  return (
    <div className="categoryCard__container">
      <div className="categoryCard__container__card">
        <h1>{task.nombre}</h1>
        <p>ID: {task.id}</p>
        <p>{task.descripcion}</p>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <button
          onClick={() => updateTask(task.id, task.nombre, task.descripcion)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default TaskCardCategory;
