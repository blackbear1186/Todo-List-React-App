import React, {useState} from 'react'

const tasks = [
  { id: 'todo-0', name: 'Eat', completed: true}
]

const TodoList = ({todos}) => {
  
  return (
    <form>
        <div className='row'>
          <div className='col-lg-6 text-center mx-auto'>
            {todos.map(todo => (
              <p>{todo.name}</p>
            ))}
            {/* <input type='text' value={}/> */}
          </div>
        </div>
    </form>
  )
}

export default TodoList
