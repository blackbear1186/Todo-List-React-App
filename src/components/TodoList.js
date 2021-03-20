import React, {useState} from "react";

const TodoList = ({tasks, deleteTasks, editTask }) => {

  const [newName, setNewName] = useState('')
  const [isEditing, setEditing] = useState(false)

  const handleChangleEdit = e => {
    setNewName(e.target.value)
  }
  const handleSubmitEdit = e => {
    e.preventDefault()
    editTask(tasks.id, newName)
    setNewName('')
    setEditing(false)
  }

  const editTemplate = (
    <form onSubmit={handleSubmitEdit}>
      <div className='row'>
        <div className='col-lg-6 text-center mx-auto'>
          {tasks.map(task =>(
            <div key={task.id} className='mt-2'>
              <input type='text' className='edit-input' value={newName} onChange={handleChangleEdit}/>
              <button type='button' className='cancel-button' onClick={() => setEditing(false)}>Cancel</button>
              <button type='submit' className='save-button'>Save</button>
            </div>
          ))}
        </div>
      </div>
    </form>
  )

  const viewTemplate = (
    <div className='row'>
      <div className='col-lg-6 text-center mx-auto'>
      {tasks.map(task => (
        <div key={task.id} className='mt-2'>
          <input type='text' className='added-input' value={task.name} readOnly/>
          <button type='button' className='update-button' onClick={() => setEditing(true)}>Update</button>
          <button type='button' className='delete-button' onClick={() => deleteTasks(task.id)}>Delete</button>
          </div>
      ))}
      </div>
    </div>
  )

  return <div>{isEditing ? editTemplate : viewTemplate}</div>
};

export default TodoList;
