import React from 'react'

const tasks = [
  { id: 'todo-0', name: 'Eat', completed: true}
]

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const taskList = task => {
    const newTask = [...todos, task]
  }
  return (
    <form>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 text-center mx-auto'>
            <input type='text' value={}/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TodoList
