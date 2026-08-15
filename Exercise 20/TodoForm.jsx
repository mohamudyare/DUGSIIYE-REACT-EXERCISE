

import React , {useState , useContext} from 'react';

import TodoContext from './src/TodoContext';


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
    <div className='m-5'>
      <input 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder='Enter a New Todo'
      className='border-2 border-b-blue-900 rounded'
       />
      <button onClick={handleAdd} className='bg-fuchsia-700 text-blue-50 font-semibold py-1 px-3 text-center rounded ml-4 cursor-pointer' >Add</button>
    </div>
  )
}
