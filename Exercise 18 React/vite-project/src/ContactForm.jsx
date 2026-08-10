

import React, {useEffect , useState} from 'react';



export const ContactForm = ({dispatch , editContact , setEditContact}) => {

    const [contact , setContact] = useState(
        editContact || {id: null , name: '' , email: '', phone: ''}
           
    );

    const[isEdit , setIsEdit] = useState(false);


    useEffect(()=> {
        if(editContact){
            setContact(editContact);
            setIsEdit(true);
        }
    },[editContact])

        const handleChange = (e) => {
            const {name , value} = e.target;
            setContact({...contact , [name] : value})
        }

        const handleSubmit = (e) => {
            e.preventDefault();

            if(contact.name && contact.email && contact.phone) {

                if(isEdit){
                    dispatch({type: "edit" , payload:contact})
                    setIsEdit(false);
                    setEditContact(null);

                }else{

                    dispatch({type:"add" , payload: {...contact , id:Date.now() , favorite:false}})
                }

                setContact({id:null , name:'' , email:'' , phone:''})
            }
        }


        const handleCancelEdit = () => {
            setContact({id:null , name:'' , email:'' , phone:''});
            setIsEdit(false);
        }

  return (
   

    <form onSubmit={handleSubmit}>

        <h2>{isEdit ? "Edit Contact" : "Add new Contact"}</h2>

    <div>
        <label>
            Name :
            <input
             type="text"
             name="name" 
             value={contact.name}
             onChange={handleChange}
             required
         />
        </label>
     </div>


     <div>
        <label>
            Email :
            <input
               type="email"
               name="email"
              value={contact.email}
              onChange={handleChange}
              required
         />
        </label>
     </div>

     <div>
        <label>
            Phone :
            <input
               type="tel"
               name="phone"
               value={contact.phone}
              onChange={handleChange}
            required
         />
        </label>
     </div>

        <button type='submit'>{isEdit ? 'update' : 'add'}</button>

        {isEdit && <button type="button"  onClick={handleCancelEdit}> Cancel </button>}

    </form>
      
    
    
   
  )
}























// kii Saxdaa ahaa



