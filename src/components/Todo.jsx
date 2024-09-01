import React, { useEffect, useState } from 'react'
import "./Todo.css"
import Addtask from "./Addtask"
import Listtask from './Listtask'
const Todo = () => {
    const[task,setTask]=useState([])
   

    useEffect(()=>{
      document.title=`you have ${task.length} pending task`
    })
  const addTask=(title)=>{
const newTask=[...task,{title}]
setTask(newTask)
  }

const removeTask=(index)=>{
  const newTask=[...task]
  newTask.splice(index,1)
  setTask(newTask)
}



 


  return (<>
    <div className='todo-container '>
      <div className='header'>TODO app</div>
      <div className='add-task'><Addtask addTask={addTask}/></div>
      <div className='tasks'>
        {task.map((task,index)=>(
            <Listtask task={task} removeTask={removeTask} index={index} key={index} />
        ))}
        
        
        </div>


    </div>


           </>
  )
}

export default Todo
