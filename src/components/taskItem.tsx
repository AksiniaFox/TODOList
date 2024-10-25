import { Checkbox, IconButton} from "@mui/material";
import { Task } from "./type";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface TaskItem {
    task: Task;
    toggleTask: (id: number) => void;
    removeTask: (id: number) => void;
}

  export default function TaskItem({task, toggleTask, removeTask}:TaskItem) {

     return(
      <div className="output">
         <div className='task'>
            <Checkbox checked={task.completed} onChange={() => toggleTask(task.id)}/>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
               {task.title}
            </span> 
         </div>
         <IconButton onClick={() => removeTask(task.id)}><DeleteOutlineIcon/></IconButton>
      </div>
        
     )
  }