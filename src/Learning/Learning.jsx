import React, { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  const tasks = ["task1", "task2", "task3"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <h1>Task Registered: {count}</h1>
      <input
        type="text"
        className="px-4 py-3"
        placeholder="Enter Message"
        onChange={handleChange}
      />
      <button type="button" onClick={handleClick}>
        Create Todo
      </button>
      <h3>Task Input: {task}</h3>
      {tasks.map((task) => {
        return <li key={task.id}>{task}</li>;
      })}
    </>
  );
};

export default CreateTodo;
