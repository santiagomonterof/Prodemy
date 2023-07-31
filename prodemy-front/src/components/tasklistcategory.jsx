import TaskCardCategory from "./taskcardcategory";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskListCategory() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center ">
        No task yet
      </h1>
    );
  }

  return (
    <div className="categoryList__item">
      {tasks.map((task) => (
        <TaskCardCategory key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskListCategory;
