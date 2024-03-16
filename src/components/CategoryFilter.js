import React,{useState} from "react";

function CategoryFilter({categories,taskData, taskList,setTaskList}) {

  const [selectedButton, setSelectedButton] = useState("All")
  
  
  function handCategoryClick(cat){
    setSelectedButton(cat)
    if (cat !== "All"){
      const newList = taskData.filter((el,i)=>{
        return el.category === cat
      })
      setTaskList(newList)
    }else {
      setTaskList(taskData)
    }
    
  }
  function Filter(){

  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( (cat, i) =>{
        return(
          <button
          name={cat}
          className={ cat === selectedButton ? "selected": ""}
          onClick={(e)=>{ handCategoryClick(cat)}}
          key={i}>{cat}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
