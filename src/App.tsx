import { useEffect, useState } from 'react';

import { Tabs, Tab } from "@mui/material";
import TaskInput from "./components/TaskInput"
import { Task } from './components/type';
import TaskList from './components/taskList';


const LOCAL_STORAGE_KEY = "todo-app-tasks";

function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedTasks) return
    setTasks(JSON.parse(storedTasks));
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = { id: Date.now(), title, completed: false };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
  }

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const filteredTasks = tasks.filter(task => {
    if (tab === 1) return !task.completed;
    if (tab === 2) return task.completed;   
    return true;
  });

  
  return (
    <div className='whole'>
      <TaskInput addTask={addTask}/>
      <Tabs value={tab} onChange={handleTabChange} aria-label="task tabs">
        <Tab label="Все задачи" sx={{marginTop: '10px'}}/>
        <Tab label="В работе" sx={{marginTop: '10px'}}/>
        <Tab label="Завершенные" sx={{marginTop: '10px'}}/>
      </Tabs>
      <TaskList tasks={filteredTasks} toggleTask={toggleTask} removeTask={removeTask}/>
    </div>
  )
}

export default App
