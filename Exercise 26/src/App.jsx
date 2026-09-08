import { useContext } from "react";
import {  NavLink, Outlet } from "react-router"
import { AuthContext } from "./ContextF/AuthContext";

const App = () => {

  const {isAunthenticate , Logout} = useContext(AuthContext);
  return (
  
    
    <div className="min-h-screen max-auto p-10 bg-gray-50">

      <div className="text-gray-800 font-semibold">

      <h2 className="text-xl font-semibold mb-5 text-gray-800">React Blog </h2>
      
      <nav className="mb-5">
      <NavLink 
          to="/"
          className={({isActive}) => (isActive ? " text-center text-white rounded-md p-2 bg-blue-500 font-medium mr-5" : undefined) }
      >
      Home</NavLink> {''}

      {isAunthenticate ? (
        <>
            <NavLink 
            to="/create"
            className={({isActive}) => (isActive ? " text-center text-white rounded-md p-2 bg-blue-500 font-medium  ml-5" : undefined) }
            >CreatePost</NavLink> {''}
            <button 
            onClick={Logout}
            className=" text-center text-white rounded-md p-2 bg-red-700 font-medium ml-3"
            >Logout</button>
        </>
      ) : (
           <NavLink to="/login" className={({isActive}) => (isActive ? " text-center text-white rounded-md px-2 py-1 bg-blue-500 font-medium mx-3" : undefined) }>Login</NavLink>
      ) }

     
      
     
      </nav>
      <hr />

      </div>

              <div>
                <Outlet/>
              </div>
          
    </div>

  

    
  )}


export default App;
