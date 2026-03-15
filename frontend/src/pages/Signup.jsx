import axios from "axios";
import {useState} from "react"
function signup(){
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const signup=async()=>{
        await axios.post(
        "http://localhost:5000/api/auth/signup",
        {name,email,password}
    )
    
    alert("Signup Success");
}
    return(
        <div>
            <input placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={signup}>SignUp</button>

        </div>
    )
}
export default signup;