import React, { useState } from "react";
import "../styles/Home.css";
import Task from "./Task";
function Home() {
  // const [inputValue,setInputValue]=useState(0);
  const [task, setTask] = useState([]);
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task,{
        title,description
    }]);
  };

  const deleteTask=(index)=>{
      const filterArray = task.filter((val,i)=>{
            return i!==index;
      });
      setTask(filterArray);
  };
  return (
    <div className="container">
      <h1>Daily Task</h1>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder="title.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <textarea placeholder="description..." value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
        <button type="submit">ADD</button>
      </form>
      {task.map((item,index) => ( 
        <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index}/>
      ))}
    </div>
  );
}

export default Home;
