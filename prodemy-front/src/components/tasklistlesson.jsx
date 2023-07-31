import TaskCardLesson from "./taskcardlesson";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskListLesson() {
  const { lessons } = useContext(TaskContext);

  if (lessons.length === 0) {
    return <h1>No task yet</h1>;
  }

  return (
    <div className="categoryList__item">
      {lessons.map((lesson) => (
        <TaskCardLesson key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}

export default TaskListLesson;
