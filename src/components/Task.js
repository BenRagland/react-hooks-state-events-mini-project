import React from "react";

function Task({text,category,handleRemove, id}) {
  

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={e => handleRemove(id)} className="delete">X</button>
    </div>
  );
}

export default Task;
