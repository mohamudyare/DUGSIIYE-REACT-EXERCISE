import Usecard  from './Exercise1'
import Blog  from './Exercise2'
import  DynamicCard from './Exercise3'
import ListProduct from './Exercise5'


import React , { useEffect , useState } from 'react'




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




    // // Exercise 7
    // const [mouse , setMouse] = useState({x:0,y:0});

    // useEffect(()=>{
    //     const handleMouseMove = (e)=>{
    //         setMouse({x : e.clientX ,  y: e.clientY})
    //     };

    //     window.addEventListener("mousemove" , handleMouseMove );


    //     return ()=>{
    //         window.removeEventListener("mousemove" , handleMouseMove )
    //     }
    // })




    // Exercise 8

    const [initialTime , setInitalTime] = useState(30);

    const [time , setTime] = useState(30);

    const [running , setRunning] = useState(false);



    useEffect(()=>{

       
        let timerId;

        if(running){
            timerId = setInterval(()=>{
                setTime((prev)=> prev + 1)
            })
        }

        return ()=> clearInterval(timerId)

    },[running , time])


    const handleStart = ()=>{
        setRunning(true);
    }


    
    const handleStop = ()=>{
        setRunning(false);
    }


    
    const handleReset = ()=>{
        setRunning(false);
        setTime(initialTime);
    }


    const handleChange = (e)=>{
        const value = Number(e.target.value)
        setInitalTime(value);
        setTime(value);
        setRunning(false);
    }

    // Exerxise 8 end



        // Exercise 9

        const [search , setSearch] = useState('');
        const [userData , setUserData] = useState(null);
        const [loading , setLoading] = useState(false);
        const [error , setError] = useState('');


        useEffect(()=>{

            if(error) {
                console.error("Error fetching GitHub user:" , error)
            }
           
        },[error])


         const handleSearch = async()=> {

                if(!search.trim()) return



                setLoading(true)
                setError('');
                setUserData(null);


                try{

                    await new Promise((resolve) => setTimeout(resolve , 1000));

                    const response = await fetch(`https://api.github.com/users/${searchTerm.toLowerCase()}`)


                    if(!response.ok){

                        throw new Error("GitHub user not found")
                    }

                    const data = await response.json();
                    setUserData(data);


                }catch(err){
                    setError(err.message)
                }finally{
                    setLoading(false)
                }
            }

            // Exercise 9 is finish




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
          /> <br/> <br/> <br/> <br/>






          {/* Exercise 7 */}

            {/* <div>
                <h1>Exercise 7</h1>
                 <h4>Mouse X : {mouse.x}</h4>

                <h4>Mouse Y : {mouse.y}</h4> 
            </div>  */}




            {/* Exercise 8 */}

            <div>
                    <h1>Exercise 8</h1>
                    <h2>Countdown timer</h2>

                    <label>Set-Time (seconds) :</label>

                    <input
                     type="text" 
                     value={initialTime}
                     onChange={handleChange}
                     /> <br/>

                  <p>Time Left : {time}second</p>

                <button onClick={ handleStart} disabled={running || time === 0}>Start</button>
                <button  onClick={ handleStop} disabled={!running}>Stop</button>
                 <button  onClick={ handleReset}>Reset</button>

         </div> <br /> <br /> <br />


                {/* Exercise 9 */}
   
     <div>
        <h1>Exercise 9 </h1> <br />
        <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {userData && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{userData.name || userData.login}</h3>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: '50%' }}
          />
          <p>Location: {userData.location || 'N/A'}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>

        </>
       
    )
}


export default App;