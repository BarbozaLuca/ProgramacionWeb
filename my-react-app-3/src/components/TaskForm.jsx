import { useState } from "react";

function TaskForm({addTask}) {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Agregar nueva tarea' value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button type='submit'>ADD</button>
    </form>
  );
}

export default TaskForm
