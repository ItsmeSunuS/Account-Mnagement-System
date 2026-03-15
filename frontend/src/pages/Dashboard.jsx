import axios  from "axios";
import { useEffect,useState } from "react";
import {Link} from "react-router-dom";
function Dashboard(){
const [balance,setBalance]=useState(0);
useEffect(()=>{
    const token =localStorage.getItem("token-");
    axios.get(
        "http://localhost:5000/api/account/balance",
        {headers:{authorization:token}}
    ).then(res=>setBalance(res.data.balance));
},[])

return(
<div>
   <h1> Balance: {balance}</h1>
   <Link to="/send">Send Money</Link>   <br/>
   <Link to="/statement">Account Statement</Link>  
 
</div>


)
}

export default Dashboard;