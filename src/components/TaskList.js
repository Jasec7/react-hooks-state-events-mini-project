import React from "react";
import Task from './Task'

function TaskList({tasks, onDelete}){
  
   const taskArray = tasks.map((task, index) =>{
      return <Task key={index} text={task.text} category={task.category} onDelete={onDelete} />
   })
   console.log("TaskList props:", { tasks, onDelete });
  return(
    <div className="tasks">{taskArray}</div>
  );
}

export default TaskList;


