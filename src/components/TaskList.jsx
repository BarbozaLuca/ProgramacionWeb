import TaskItem from "./TaskItem";

function TaskList() {

    return(
        <div>
          <TaskItem name="a" text="Task N" checked={false} />
          <TaskItem name="b" text="Task N-1" checked={false} />
          <TaskItem name="c" text="Completed Task N-2" checked={true} />
          <TaskItem name="d" text="Task k" checked={false} />
          <TaskItem name="e" text="Task 2" checked={false} />
          <TaskItem name="f" text="Completed Task 1" checked={true} />
        </div>
    )

}

export default TaskList
