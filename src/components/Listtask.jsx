import React from 'react'

const Listtask = ({task,index,removeTask}) => {
  return (
    <>
      <div className='List-class'>
        {task.title} 
        <button  onClick={()=>{removeTask(index)}} className='Delete-btn'>Delete</button>
      </div>
    </>
  )
}

export default Listtask
