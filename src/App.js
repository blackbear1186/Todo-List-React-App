import "./App.css";
import React from "react";
import TodoForm from './components/TodoForm'

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
      <TodoForm />
    </div>
  );
}

export default App;
