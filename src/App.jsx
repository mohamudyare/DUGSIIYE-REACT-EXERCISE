import Usecard  from './Exercise1'
import Blog  from './Exercise2'
import  DynamicCard from './Exercise3'
import ListProduct from './Exercise5'

// Exercise 4
import { useState } from 'react'


function App(){


    // Exercise 4
    const [btnTogle , setBtnTogle] = useState(true);

    const toggle = ()=>{

        setBtnTogle(!btnTogle);
    }

    // only Exercise 4 up teo const


    return(
        <>
           <Usecard/>
           <Blog/>

         <DynamicCard  name={"moha khalid"}  email={"mohak87@gmailcom"} />
         <DynamicCard  name={"jaamac xasan"}  email={"jamac12@gmail.com"}/>
         <DynamicCard  name={"Faarx wraabe"}  email={"Faarxa@gmail.com"}/>




         {/* Exercise 4 */}


        <h1>Exercise 4</h1>
         <p>The button is {btnTogle ? 'OFF' : 'ON'}</p> 
         <button onClick={toggle}> {btnTogle ? 'ON' : 'OFF'} </button>   <br/> <br/> <br/> <br/> <br/>






         {/* // Exercise 5 */}

        <ListProduct/>



        </>
       
    )
}


export default App;