import React , {useContext} from 'react';

import LangContext from './LangContext';

export const LangExercise15 = () => {
  
    const Language = useContext(LangContext);

    const Message = {

      English: 'Hello!' ,
      Spanish: '!Hola' ,
    }

  return (
    <div>
      <h2>{Message[Language]}</h2>
    </div>
  )
}

