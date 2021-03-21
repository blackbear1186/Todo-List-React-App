import React, {useState, useEffect, useRef} from "react";

const TodoList = ({id, name, deleteTasks, editTask }) => {

  const [newName, setNewName] = useState('')
  const [isEditing, setEditing] = useState(false)
  // create two useRef hooks for edit button and edit input
  // default value is null
  const editInputRef = useRef(null)
  const editButtonRef = useRef(null)
  
  const handleChangleEdit = e => {
    setNewName(e.target.value)
  }
  const handleSubmitEdit = e => {
    e.preventDefault()
    editTask(id, newName)
    setNewName('')
    setEditing(false)
  }

  // bring focus to edit input when isEditing is true
  useEffect(() => {
    if (isEditing) {
      editInputRef.current.focus()
    }
  }, [isEditing])
 
  const editTemplate = (
    <form onSubmit={handleSubmitEdit}>
      <div className='row'>
        <div className='col-lg-6 text-center mx-auto'>
            <div key={id} className='mt-2'>
              <input ref={editInputRef} id={id} type='text' className='edit-input' value={newName} onChange={handleChangleEdit} autoComplete='off'/>
              <button type='button' className='cancel-button' onClick={() => setEditing(false)}>Cancel</button>
              <button type='submit' className='save-button'>Save</button>
            </div>
        </div>
      </div>
    </form>
  )

  const viewTemplate = (
    <div className='row'>
      <div className='col-lg-6 text-center mx-auto'>
        <div key={id} className='mt-2'>
          <input id={id} type='text' className='added-input' value={name} readOnly/>
          <button ref={editButtonRef} type='button' className='update-button' onClick={() => setEditing(true)}>Edit</button>
          <button type='button' className='delete-button' onClick={() => deleteTasks(id)}>Delete</button>
          </div>
      </div>
    </div>
  )

  return <div>{isEditing ? editTemplate : viewTemplate}</div>
};

export default TodoList;
