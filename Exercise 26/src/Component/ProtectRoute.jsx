
import { useContext } from 'react'
import { AuthContext } from '../ContextF/AuthContext';
import { Navigate,useLocation } from 'react-router';

const ProtectRoute = ({children}) => {

  const {isAunthenticate} = useContext(AuthContext);
  const location = useLocation();

  if(!isAunthenticate) {

    return <Navigate to="/login" state={{from:location}} replace/>
  }

  return children;
   
}

export default ProtectRoute;