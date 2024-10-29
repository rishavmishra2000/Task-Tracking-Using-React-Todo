import React, { useState } from "react";
import "./styles/TaskForm.css";
import Tag from "./Tag";
const TaskForm = ({ setTasks }) => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // Alternate way for declaring
  // treating variable as an object in JSON data.
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  // Fetching Todo task and status from the form.
  const handleTaskData = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;

    // Alternate way of assigning values to variables
    const { name, value } = event.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // this return true of false if tag is already selected or not to checkedTag value of Tag
  const checkedTag = (tag) => {
    return taskData.tags.includes(tag);
  };

  // toggling the tags and adding it to array
  const selectTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // submit the form and resetting the form values
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task} // this clean the input after submit
          className="task_input"
          placeholder="Enter your task..."
          onChange={handleTaskData}
          required
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              checkedTag={checkedTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              checkedTag={checkedTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              checkedTag={checkedTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              checkedTag={checkedTag("React")}
            />
            <Tag
              tagName="Angular"
              selectTag={selectTag}
              checkedTag={checkedTag("Angular")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleTaskData}
              value={taskData.status} // to reset the status tag to todo
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
