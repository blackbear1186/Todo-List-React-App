import "./App.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTasks = (name) => {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  };
  const deleteTasks = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };
  const editTask = (id, newName) => {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, id, name: newName };
      }
      return task;
    });
    setTasks(updatedTask);
  };
  const taskList = tasks.map((task) => (
    <TodoList
      id={task.id}
      name={task.name}
      deleteTasks={deleteTasks}
      editTask={editTask}
    />
  ));

  return (
    <div className="App">
      <TodoForm tasks={tasks} addTasks={addTasks} />
      {taskList}
    </div>
  );
}

export default App;
