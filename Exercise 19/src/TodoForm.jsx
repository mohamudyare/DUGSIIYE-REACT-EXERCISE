

import React , {useState , useContext} from 'react';

import TodoContext from './TodoContext';

import './todoForm.css'

export const TodoForm = () => {

const[text , setText] = useState('');
const {dispatch} = useContext(TodoContext);


const handleAdd = () => {

  if(text.trim()) {
    const newTodo = {
      id :Date.now(), 
      text ,
      completed: false ,
    }

    dispatch({type: 'add' , payload: newTodo});
    setText('');
  }

}

  return (
    <div className='input-add'>
      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Enter a New Todo'
       />
      <button onClick={handleAdd} className='btn-add'>Add</button>
    </div>
  )
}
