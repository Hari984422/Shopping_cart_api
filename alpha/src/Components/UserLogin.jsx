import { useState } from 'react'
import { useNavigate} from 'react-router-dom'
const UserLogin = () => {
    let [uname,setuname] = useState("")
    let [pwd,setpwd] = useState("")
    let navigate  = useNavigate()
   let handleSubmit =()=>{
    if(uname === "abcd" && pwd === "1234"){
        navigate("/userlogin/userHome")
    }else{
        navigate("/usersignup")
    }
   }

    return ( 
        <div className="userlogin">

               <form onSubmit={handleSubmit} action="">
               <input value={uname} onChange={(e) => {setuname(e.target.value)}} placeholder="Username" type="text" />
                <input value={pwd} onChange={(e) => {setpwd(e.target.value)}} placeholder="Password" type="password" />
                <button>submit</button>
               </form>
        </div>
     );
}
 
export default UserLogin;