import React,{useState} from "react";
import Task from "./Task"

function TaskList({taskList,setTaskList}) {
  
  function handleRemove(id){
    let newList = taskList.filter((el)=>{
      return el !== taskList[id]
    })
    setTaskList(newList)

  }
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList.map((taskObj,i) => {
        return(
          <Task 
            handleRemove = {handleRemove}
            category={taskObj.category} 
            text={taskObj.text} 
            id={i}
            key={i}/>
        )
      })}
    </div>
  );
}

export default TaskList;
