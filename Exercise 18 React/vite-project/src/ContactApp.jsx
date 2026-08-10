
import React,{useReducer , useState} from 'react';

import {reducer , initialState} from './reducer';

import { ContactForm } from './ContactForm';
import { ContactList} from './ContactList';

export const ContactApp = () => {

    const[state , dispatch] = useReducer(reducer,initialState);
    
    const[editContact , setEditContact] = useState(null);

  return (
   
        <div>
                <h2>Contact Management App</h2>
                 <ContactForm
                   editContact={editContact}
                    dispatch={dispatch}
                    setEditContact={setEditContact}
                 />

                 <ContactList
                    contacts={state}
                    dispatch={dispatch}
                    setEditContact={setEditContact}
                 />
        </div>
       

    
  )
}
