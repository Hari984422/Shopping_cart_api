
import { Navigate } from "react-router-dom";

let Protect = ({Child})=>{

    let verify = ()=>{
       let x = localStorage.getItem("currentUSer");
       if(x==null)
       {
        return false;
       }
       else{
        return true;
       }
    }

    return(
        <>
            {verify() ? <Child/> : <Navigate to="/merchantlogin"/>}
        </>
    )
}
export default Protect;