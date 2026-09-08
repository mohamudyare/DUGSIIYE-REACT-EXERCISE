import  { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../ContextF/AuthContext';

const Login = () => {

const {Login} = useContext(AuthContext);
const navigate = useNavigate();
const location = useLocation();

const handleLogin = () => {
  Login();
   const from = location.state?.from?.pathname || '/';
   navigate(from , {replace:true});
}



  return (
    <div className='bg-white shadow-sm mt-3 p-6'>
      <p>Login page </p>
      <p className='my-1'>you must log in to Access the create post page</p>
      <button onClick={handleLogin} className='bg-blue-500 rounded text-white text-sm text-center py-1 px-2 mt-1'>Login</button>
    </div>
  )
}

export default Login;