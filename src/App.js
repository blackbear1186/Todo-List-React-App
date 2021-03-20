import "./App.css";
import React, {useState} from "react";
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { nanoid } from "nanoid";


function App() {

  const [tasks, setTasks] = useState([])

  
  
  const addTasks = name => {
    const newTask = {id: 'todo-' + nanoid(), name:name, completed: false}
    setTasks([...tasks, newTask])
  }
  const deleteTasks = id => {
    const remainingTasks = tasks.filter(task => id !== task.id)
    setTasks(remainingTasks)
  }
  const editTask = (id, newName) => {
    const updatedTask = tasks.map(task => {
      if (id === task.id) {
        return {...tasks, name: newName}
      }
      return task
    })
    setTasks(updatedTask)
  }
  
  return (
    <div className="App">
      <TodoForm addTasks={addTasks}/>
      <TodoList tasks={tasks} deleteTasks={deleteTasks} editTask={editTask}/>
    </div>
  );
}

export default App;
