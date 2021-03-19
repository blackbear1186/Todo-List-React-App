import React, { useState } from "react";
import TodoList from './TodoList'
import {nanoid} from 'nanoid'


const TodoForm = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState([])

  const addTodo = (name) => {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false}
    setTodos([...todos, newTask])
  }

  const handleInput = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(name)
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1 className="mx-auto text-center">Todo List React App</h1>
        <div className="row">
          <div className="col-lg-6 text-center mx-auto">
            <input
              type="text"
              id="todo-input"
              name="todo-input"
              value={name}
              onChange={handleInput}
              placeholder="Add a task"
              autoComplete='off'
            />
            <button type="submit">Add</button>
          </div>
        </div>
        <TodoList todos={todos}/>
      </div>
    </form>
  );
};

export default TodoForm;
