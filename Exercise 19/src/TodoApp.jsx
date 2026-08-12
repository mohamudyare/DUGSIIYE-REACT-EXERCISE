
import React, { useReducer } from 'react';

import TodoContext from './TodoContext';
import {reducer , initialState } from './reducer';

import {TodoForm } from './TodoForm';
import {TodoList} from './TodoList';



export const TodoApp = () => {

    const[state , dispatch] = useReducer(reducer , initialState)

  return (
    
    <TodoContext.Provider value={{state , dispatch}} className='todo-app'>


        <TodoForm/>
        <TodoList/>
        
    </TodoContext.Provider>
  )
}
