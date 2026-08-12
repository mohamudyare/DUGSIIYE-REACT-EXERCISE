


import React,{useContext} from 'react';

import TodoContext from './TodoContext';

import './todoItem.css'
export const TodoItem = ({todo}) => {

  const {dispatch} = useContext(TodoContext)
  return (
    <li className='li-item'>
       <span 
       style={{textDecoration: todo.completed ? "line-through" : "none" , cursor:"pointer"}}
       onClick={()=> dispatch({type:"toggle" , payload:todo.id})}
       className='span-item'
       >{todo.text}</span>  



       <button onClick={()=> dispatch({type:"delete", payload:todo.id})} className='btn-delete'>Delete</button>
    </li>
     
  )
}
