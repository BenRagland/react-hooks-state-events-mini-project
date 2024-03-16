import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
let TASKSDATA = TASKS

function App() {
  const [TASKS, setTASKS] = useState(TASKSDATA)
  console.log( "TASKS State", TASKS)
  const [ taskList, setTaskList ] = useState(TASKSDATA)
  console.log(taskList, "this is TaskList state")



  function onTaskFormSubmit(newObj){
    console.log(newObj)
    setTASKS((list)=>[...list,newObj])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        taskData ={TASKS}
        setTaskList={setTaskList}
        taskList={taskList} 
        categories={CATEGORIES}
      />
      <NewTaskForm
        categories={CATEGORIES}
        formSubmit = {onTaskFormSubmit}

      />
      <TaskList 
        setTaskList={setTaskList}
        taskList={taskList} 
      />
    </div>
  );
}

export default App;
