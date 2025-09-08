function TaskItem({name, text, checked}){

    return(
        <label>
          <input type="checkbox" name={name} defaultChecked={checked}/>
          {checked ? <s>{text}</s> : text}
          <br/>
        </label>
    )
}

export default TaskItem
