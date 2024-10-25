import { useState } from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {IconButton, TextField } from "@mui/material"

interface TaskInputProps {
    addTask: (title: string) => void;
}

export default function TaskInput ({addTask}: TaskInputProps) {

    const [taskTitle, setTaskTitle] = useState('');

    const handleAddTask = () => {
      if (!taskTitle.trim()) return
      addTask(taskTitle);
      setTaskTitle('');
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') handleAddTask();
    };

    return(
      <div className='input'>
        <TextField id="standard-basic" label="Новая заметка" variant="standard" onChange={(e) => setTaskTitle(e.target.value)} onKeyDown={handleKeyPress} placeholder="Введите новую заметку" value={taskTitle} sx={{width: '440px'}}/>
        <IconButton onClick={handleAddTask} sx={{width:'50px'}}><ArrowForwardIosIcon /></IconButton>
      </div>
    )
}