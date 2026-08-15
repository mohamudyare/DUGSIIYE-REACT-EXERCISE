


import React,{useContext} from 'react';

import TodoContext from './src/TodoContext';


export const TodoItem = ({todo}) => {

  const {dispatch} = useContext(TodoContext)
  return (
    <li className='m-5 list-disc' >
       <span 
       style={{textDecoration: todo.completed ? "line-through" : "none" , cursor:"pointer"}}
       onClick={()=> dispatch({type:"toggle" , payload:todo.id})}
       >{todo.text}</span>  



       <button
        onClick={()=> dispatch({type:"delete", payload:todo.id})} 
        className='bg-red-600 text-white font-semibold text-center text-sm mb-1 ml-2 px-2 rounded cursor-pointer '
        >Delete</button>

    </li>
     
  )
}
