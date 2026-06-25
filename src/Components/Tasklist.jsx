import React from "react";

export default function Tasklist({ tasks, updateTask, deleteTask }) {
  const handleToggleComplete = (index) => {
    const updatedTask = {
      ...tasks[index],
      completed: !tasks[index].completed, // ✅ consistent property name
    };
    updateTask(updatedTask, index); // ✅ call the prop from App.js
  };

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
          </div>

          <div>
            <button onClick={() => handleToggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
