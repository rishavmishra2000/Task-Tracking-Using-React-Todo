import React from "react";
import "./styles/TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete }) => {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img src={icon} className="task_column_icon" alt="To do" /> {title}
        </h2>

        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard
                key={index}
                title={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
              />
            )
        )}
      </section>
    </>
  );
};

export default TaskColumn;
