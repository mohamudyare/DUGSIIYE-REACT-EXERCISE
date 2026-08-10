
import React from 'react'

import {ContactItem} from './ContactItem';

export const ContactList = ({contacts , dispatch , setEditContact}) => {



  return (
    <div>
        <h2>Contacts</h2>

        { contacts.length > 0 ? (
        <ul>
            {
                contacts.map((contact)=> (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        dispatch={dispatch}
                        setEditContact={setEditContact}
                    />
                ))
            }
        </ul>

      ) : (<p>No Contact available</p>) }
    </div>
  )
}
