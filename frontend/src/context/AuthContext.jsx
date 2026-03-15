import {createContext,useState} from "react";
const AuthContext=createContext();
const authProvider=({children})=>
{
    const [token,setToken]=useState(localStorage.getItem("token"));
    const login=(t)=>{
        localStorage.setItem("token",t);
        setToken(t);
    }
    return(
        <AuthContext.Provider value={{token,login}}>{children}</AuthContext.Provider>
    )
}