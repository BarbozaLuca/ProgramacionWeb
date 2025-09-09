import { useState } from "react";
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, text: "Task N", completed: false },
    { id: 2, text: "Task N-1", completed: false },
    { id: 3, text: "Completed Task N-2", completed: true },
    { id: 4, text: "Task k", completed: false },
    { id: 5, text: "Task 2", completed: false },
    { id: 6, text: "Completed Task 1", completed: true },
  ]);

  const addTask = (text) => {
    setTasks([
      { id: Date.now(), text, completed: false }, ...tasks,
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (

    <>
       <h2>lista de tareas de luca</h2>
       <TaskForm addTask={addTask}/>
       <TaskList tasks={tasks} deleteTask={deleteTask}/>

    </>
  
  );
}

export default App
