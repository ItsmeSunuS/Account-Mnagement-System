import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Statement from "./pages/Statement";
import ProtectedRoute from "./src/pages/ProtecteedRoute";
function App(){
    return(
        <BrowserRouter>
        <Routes>

        <Route path="/"element ={<Login/>}/>
        <Route path="/signup"element ={<Signup/>}/>
        <Route path="/dashboard" element ={<ProtectedRoute><Dashboard/> </ProtectedRoute>}/>
        <Route path="/send"element={<SendMoney/>}/>
        <Route path="/statement"element ={<Statement/>}/>

        </Routes>
       </BrowserRouter>
    )
}

export default App;