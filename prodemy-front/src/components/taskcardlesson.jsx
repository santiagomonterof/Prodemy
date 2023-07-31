import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCardLesson({ lesson }) {
  const { deleteLesson, updateLesson } = useContext(TaskContext);

  return (
    <div className="categoryCard__container">
      <div className="categoryCard__container__card">
        <h1>{lesson.tema}</h1>
        <p>ID: {lesson.id}</p>
        <p>{lesson.contenido}</p>
        <button onClick={() => deleteLesson(lesson.id)}>Delete</button>
        <button
          onClick={() =>
            updateLesson(
              lesson.id,
              lesson.tema,
              lesson.contenido,
              lesson.video,
              lesson.tipo,
              lesson.curso_id
            )
          }
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default TaskCardLesson;
