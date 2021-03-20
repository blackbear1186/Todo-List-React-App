import React, { useState } from "react";
import TodoList from "./TodoList";
import { nanoid } from "nanoid";

const TodoForm = () => {
  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    addTasks(name)
    setName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="todo-header mx-auto text-center">Todo List React App</h1>
        <div className="row">
          <div className="col-lg-6 text-center mx-auto mb-4">
            <input
              type="text"
              placeholder="Add a task"
              value={name}
              autoComplete="off"
              className="add-input"
              onChange={handleChange}
              autoFocus
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </div>
        <TodoList editTask={editTask} tasks={tasks} deleteTasks={deleteTasks}/>
      </div>
    </form>
  );
};

export default TodoForm;
