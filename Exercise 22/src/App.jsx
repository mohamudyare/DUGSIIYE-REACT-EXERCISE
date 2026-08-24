import React , {useState} from 'react'
import './App.css'

const App = () => {

    const[inputValue , setInputValue] = useState({

  username:"" ,
  email:"" ,
  password:""
    })

    const [isSelected , setIsSelected] = useState("");

    const [isChecked , setIsChecked] = useState(false);


     const handleSubmit = (event) => {
          event.preventDefault();

          console.log(inputValue);

          if(!inputValue) {
                alert("please write input value");
                return
          }

          console.log(isSelected);

          if(isSelected === "") {
              alert("please select Language");
              return
          }
        
          console.log(isChecked);
          
          if(!isChecked) {
              alert("please check box");
              return
          }
     }



     const handleChangeInput = (event) => {

          const {name , value} = event.target

        setInputValue((prevnt) => ({...prevnt , [name] : value}))
     }


     const handleChangeChecked = (e) => {
          setIsChecked(e.target.checked)
     }

  return (
          <>
           <h2>Exercise 22 React</h2>

          <form onSubmit={handleSubmit} className='form'>
           
            <h4>Form Registration</h4>
            <label>
                  Username :  </label>
            <input 
            type="text"
            className='input'
            placeholder='Enter username'
            name="username"
            value={inputValue.username}
            onChange={handleChangeInput}
             /> <br />
            
            
            <label>
                  Email : </label>
              <input 
            type="email"
             className='input'
            placeholder='Enter email'
            name="email"
            value={inputValue.email}
            onChange={handleChangeInput}
             /> <br />
             

            <label>
                  Password :  </label>
              <input 
            type="password"
             className='input'
            placeholder='Enter password'
            name="password"
            value={inputValue.password}
            onChange={handleChangeInput}
             /> <br />
            
          <input 
             type="checkbox" 
              value={isChecked}
              onChange={handleChangeChecked}
           />

    <select value={isSelected} onChange={(e)=> setIsSelected(e.target.value)}
      className='select'>
                <option value="first">HTML</option>
                <option value="second">CSS</option>
                <option value="third">JavaScript</option>
    </select> <br />

             <button type='submit' className='btn'>Submit</button>

          </form>
    </>      
   
  )
}

export default App;