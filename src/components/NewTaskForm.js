import React,{useState} from "react";

function NewTaskForm({categories,formSubmit}) {
  const [details, setDetails] = useState("")
  const [chosenCategory, setChosenCategory] = useState(categories[1])
  console.log("details---->", details)
  console.log("chosen Category ---->",chosenCategory)
  return (
    <form className="new-task-form">
      <label>
        Details
        <input 
        value={details}
        onChange={(e)=>{setDetails(e.target.value)}}
        type="text" name="text" />
      </label>
      <label>
        Category
        <select 
        onChange={(e)=>{setChosenCategory(e.target.value)}}
        value={chosenCategory}
        name="category">

          {categories.map((el,i)=>{
            if (el !== "All"){
              return(
                <option 
                value={el}
                key={i}
                >{el}</option>
              )
            }

          })}
        
        </select>
      </label>
      {/* Adds Task , AKA submit Button */}
      <input
      onClick={(e)=>{
        e.preventDefault()
        formSubmit({text:details , category:chosenCategory})
      }}
      type="submit" 
      value="Add task" />
    </form>
  );
}

export default NewTaskForm;
