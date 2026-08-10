
import React from 'react'

export const ContactItem = ({contact , dispatch , setEditContact}) => {

    const {id, name ,email , phone , favorite} = contact;
    

  return (
    
            <li style={{marginBottom: "10px"}}>

            <strong>{name}</strong> {favorite && '★'}

            <p>Email : {email}</p>
            <p>Phone : {phone}</p>

          <button onClick={()=> dispatch({type: "toggleFavorite" , payload:id})}>
            {favorite ? "unFavorite" : "Favorite"}
          </button>

          <button onClick={()=> setEditContact(contact)}>Edit</button>

          <button onClick={()=> dispatch({type:"delete" , payload:id})}>Delete</button>

            </li>
  
  )
}
