import React, { useState } from "react";

const TodoForm = ({tasks, addTasks}) => {
  const [name, setName] = useState('')

  const handleChange = e => {
    setName(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    addTasks(name)
    setName('')
  }
  const taskID = tasks.map(task => task.id)
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="todo-header mx-auto text-center">Todo List React App</h1>
        <div className="row">
          <div className="col-lg-6 text-center mx-auto mb-4">
            <input
              key={{taskID}}
              id={{taskID}}
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
      </div>
    </form>
  );
};

export default TodoForm;
