import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAunthenticate , setIsAunthenticate] = useState(false);

    const Login = () => {
        setIsAunthenticate(true)
    }

     const Logout = () => {
        setIsAunthenticate(false)
    }


    return (
        <AuthContext.Provider value={{isAunthenticate , Login , Logout}}>

            {children}

        </AuthContext.Provider>
    )
}