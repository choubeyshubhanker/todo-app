import Header from './MyComponents/Header';
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, { useState, useEffect } from "react";

function App() {
  let initTodo //intializing array for todos

  if( localStorage.getItem("todos")===null){
    initTodo = [] //Setting variable in localstorage as a blank array
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos")); //getting arrays of todos from local storage
  }

  // Function to delete todo

  const onDelete = (todo) =>{ 
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))

  localStorage.setItem("todos",JSON.stringify(todos)); //Setting array again after deleting a todo
  }
  // Function to add todo
  const addTodo = (title, desc) =>{
    // console.log("Im adding", title, desc)
    let sno;
    if (todos.length===0){
      sno = 0
    }
    else{
     sno = todos[todos.length -1].sno +1; //last todos sno then adding 1 into that sno 
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
    
  }
  const [todos, setTodos] =useState(initTodo);
  
 useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos]) //setting todo in local storage every time todos change

  return (
    <>
     <Header title="Things To Do Today" />
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
