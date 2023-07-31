import TaskCardCourse from "./taskcardcourse";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskListCourse() {
  const { courses } = useContext(TaskContext);

  if (courses.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center ">
        No task yet
      </h1>
    );
  }

  return (
    <div className="categoryList__item">
      {courses.map((course) => (
        <TaskCardCourse key={course.id} course={course} />
      ))}
    </div>
  );
}

export default TaskListCourse;
