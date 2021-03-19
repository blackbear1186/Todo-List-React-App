import React, {useState} from 'react'

const TodoForm = () => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <h1 className='mx-auto text-center'>Todo List React App</h1>
        <div className='row'>
          <div className='col-lg-6 text-center mx-auto'>
          <input type='text' id='todo-input' name='todo-input' value={input} onChange={handleInput} placeholder='Add a task'/>
          <button type='submit'>Add</button>
          </div>
          
        </div>
      </div>
    </form>
  )
}

export default TodoForm
