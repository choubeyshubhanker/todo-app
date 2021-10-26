import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "10px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className= "text-center">Todos List</h3>
            <hr/>
            {props.todos.length ===0? "No Todos to display":
            props.todos.map((todo)=>{
                return (
                    <div key ={todo.sno}>
                 <TodoItem todo= {todo} onDelete={props.onDelete}/>
                <hr/>
                </div>
                )
            })}
        </div>
    )
}
