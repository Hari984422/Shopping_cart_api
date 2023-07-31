<<<<<<< HEAD
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

=======
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

>>>>>>> 66f48c47be12975270ab0794411a314aefc53b68
export default Protect;