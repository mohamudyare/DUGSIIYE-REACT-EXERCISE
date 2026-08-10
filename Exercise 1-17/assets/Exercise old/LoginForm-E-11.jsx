
import {useState} from 'react'

const LoginForm = ()=> {


    const [isLogin , setIsLogin] = useState(false);
    const [username , setUsername] = useState('');
    const [ password , setPassword] = useState('');



    const handleLogin = (event)=> {
        event.preventDefault();

        if (username && password) {
            setIsLogin(true)
        }

    }


    const handleLogout = ()=> {

        setIsLogin(false);
        setUsername('');
        setPassword('')

    }

  

    if (isLogin) {
        return (
            <div>
                <h1>Welcome , {username}!</h1>
                <button onClick={handleLogout}>Logout</button> <br/> <br/> <br/>
            </div>
        )

    }

    return(
        <div>
           <h1>Exercise 11</h1>

           <h2>Login</h2>

           <form onSubmit={handleLogin}>

            <label> Username: </label>       
            <input 
            type="text" 
            placeholder='username' 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            required /> <br />
            


            <label>  Password: </label>         
            <input 
            type="password"
             placeholder='password' 
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
             required /> 
              <br/> <br/>

            <button type='submit'>Login</button> 

            </form> <br/> <br/> <br/>
 
        </div>
    )



}


export default LoginForm;