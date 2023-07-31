import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskCardCourse({ course }) {
  const { deleteCourse, updateCourse } = useContext(TaskContext);

  return (
    <div className="categoryCard__container">
      <div className="categoryCard__container__card">
        <h1>{course.nombre}</h1>
        <p>ID: {course.id}</p>
        <p>{course.descripcion}</p>
        <button onClick={() => deleteCourse(course.id)}>Delete</button>
        <button
          onClick={() => updateCourse(course.id, course.nombre, course.descripcion, course.categoria_id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default TaskCardCourse;
