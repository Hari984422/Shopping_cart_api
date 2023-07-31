import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
const UserLogin = () => {
    let [uname,setuname] = useState("")
    let [pwd,setpwd] = useState("")
    let navigate  = useNavigate()
   let handleSubmit =()=>{
    if(uname === "user" && pwd === "1234"){
        navigate("/userhome")
    }else{
        alert("Please enter your username")
    }
   }

    return ( 
        <div className="userlogin">
      
        <input value={uname} onChange={(e) => {setuname(e.target.value)}} type="email" placeholder="Enter email"  />
     
        <input value={pwd} onChange={(e) => {setpwd(e.target.value)}}  type="password" placeholder="Password" />
       <button onClick={handleSubmit}>Signin</button>
       <Link to="/usersignup">
       <button>Sign Up</button>
       </Link>
        </div>
     );
}
 
export default UserLogin;