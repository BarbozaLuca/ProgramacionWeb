import { useState } from "react";

function TaskItem({task, deleteTask}) {

  const [completed, setCompleted] = useState(task.completed);
 
    return(
        <label>
          <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)}/>
          {completed ? <s>{task.text}</s> : task.text}
          <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          <br/>
        </label>
    );
}

export default TaskItem
