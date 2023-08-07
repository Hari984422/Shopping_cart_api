import { Navigate } from "react-router-dom";
let Protect = ({Child})=>{
    let verify = ()=>{
       let x = localStorage.getItem("currentMerchant");
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








// import { Navigate } from "react-router-dom";
// const Protect = ({Child}) => {

//    let verify =() =>{
//     let x = localStorage.getItem("currentMerchant")
//     if(x==null){
//         return false;
//     }
//     else{
//         return true;
//     }
//    }

//     return ( 
//         <div className="protect">
//             {verify() ? <Child/> : <Navigate to="/merchantlogin" />}
//         </div>
//      );
// }
 
// export default Protect;