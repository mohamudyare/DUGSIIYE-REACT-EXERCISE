import Usecard  from './Exercise1'
import Blog  from './Exercise2'
import  DynamicCard from './Exercise3'
import ListProduct from './Exercise5'


import { useEffect , useState } from 'react'


function App(){


    // Exercise 4
    const [btnTogle , setBtnTogle] = useState(true);

    const toggle = ()=>{

        setBtnTogle(!btnTogle);
    }

    // only Exercise 4 up teo const



    

    // Exercise 6

    const [name , setName] = useState();

    const [great , setGreat] = useState("Hello");

    useEffect(()=>{
        if(!name){
            document.title = "Welcome"
        }else{
                document.title = `${great} , ${name}`
        }

    },[name , great ])

    // exerise 6 end

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



        {/* Exercise 6 */}
         <h1>Exercise 6</h1> <br/>
         <h2>Enter your Name</h2>
         <input 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
          /> <br/> <br/>

            <h2>Choose a Greating</h2>
            <input 
                type="text"
                value={great}
                onChange={(e)=> setGreat(e.target.value)}
          />


        </>
       
    )
}


export default App;