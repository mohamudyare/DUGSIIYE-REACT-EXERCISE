
import React , {useState} from 'react';

export const useForm = (initialValue) => {

    const[value , setValue] = useState(initialValue);

    const handleChange = (event)=> {

        const {name , value } = event.target;
         setValue({...value ,[name]: value})
    }
      
    return {value , handleChange}

  return (
    <div>useForm17</div>
  )
}
