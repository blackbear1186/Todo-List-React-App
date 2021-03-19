import React from "react";

const TodoList = ({ todos, deleteTodo }) => {

 
  return (
    <div className="row">
      <div className="col-lg-6 text-center mx-auto">
        {todos.map((todo) => (
          <div>
            <input
              className="added-input"
              key={todo.id}
              type="text"
              value={todo.name}
              readOnly
            />
            <button type="button" className="delete-button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
