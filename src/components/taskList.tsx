import TaskItem from "./taskItem";
import { Task } from "./type";

interface TaskListProps {
    tasks: Task[];
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
}

export default function TaskList ({tasks, toggleTask, removeTask}: TaskListProps ){

    return (
        <div>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} toggleTask={toggleTask} removeTask={removeTask} />
          ))}
        </div>
    )
}