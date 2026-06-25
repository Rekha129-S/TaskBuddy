import React, { useState, useEffect } from 'react';
import Taskform from './Components/Taskform';
import Tasklist from './Components/Tasklist';
import ProgressTracker from './Components/ProgressTracker';

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the app starts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;   // ✅ fixed typo (newTasks not newtasks)
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));  // ✅ use !==
  };

  return (
    <div>
      <h2>Task Buddy</h2>
      <h4><i>The friendly task manager</i></h4>

      <Taskform addTask={addTask} />
      <Tasklist 
        tasks={tasks} 
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks} />
    </div>
  );
}
