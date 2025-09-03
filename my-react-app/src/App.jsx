import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
       <h2>lista de tareas de luca</h2>
       <form>
          <input type='text' placeholder='Agregar nueva tarea'></input>
          <button type='submit'>ADD</button>
       </form>

       <div >
         <label><input type='checkbox' name='a'></input>Task N</label><br></br>
         <label><input type='checkbox' name='b'></input>Task N-1</label><br></br>
         <label><input type='checkbox' name='c' checked></input><s>Completed Task N-2</s></label><br></br>
         <label><input type='checkbox' name='d'></input>Task k</label><br></br>
         <label><input type='checkbox' name='e'></input>Task 2</label><br></br>
         <label><input type='checkbox' name='f' checked></input><s>Completed Task 1</s></label><br></br>
       </div>
    </>
  
  )
}

export default App
