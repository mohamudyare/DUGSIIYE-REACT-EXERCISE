
import { useForm } from "./useForm17";

const ContactForm17 = () => {


const {value , handleChange} = useForm({

      Phone: '' , 
      email: '' ,
      message : ''

})


const handleSubmit = (event)=> {
    event.preventDefault();
    console.log("Form Data" , value)
}

  return (
        <>
            <h1>Exercise 17</h1>

            <form onSubmit={handleSubmit}>
                
              <div>
                <label>
                    Phone : 
                    <input 
                    type="text" 
                    Phone="Phone"
                    value={value.Phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    required
                    />

                </label>
                 </div> <br />


                <div>
                <label>
                    Phone : 
                    <input 
                    type="text" 
                    name="Phone"
                    value={value.Phone}
                    onChange={handleChange}
                    placeholder="090566982"
                    required
                    />

                </label>
                 </div> <br />


                 <div>
                    <label>
                    Email : 
                    <input 
                    type="email" 
                    Phone= "email"
                    value={value.email}
                    onChange={handleChange}
                    placeholder="hole@gmail.com"
                    required
                    />

                </label>
                 </div> <br />


                 <div>
                    <label >
                        Message :
                        <textarea
                         Phone="textarea" 
                         value={value.textarea}
                         onChange={handleChange}
                         placeholder="Message"
                         required
                        /> 
                    </label>
                 </div> <br />
                  
                  <button type="submit">Submit</button>
           

            </form>
        
        
        
        </>
  )
}

export default ContactForm17;