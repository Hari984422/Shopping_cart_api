import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const AdminLogin = () => {
    let [uname,setuname] = useState("")
    let [pwd,setpwd] = useState("")
    let navigate  = useNavigate()
        if (uname=="abcd" && pwd==1234) {
            navigate("/adminlogin/adminhome")
        }
        else{
            navigate("/adminsignup")
        }
    return ( 
        <div className="adminlogin">
                <input value={uname} onChange={(e) => setuname(e.target.value)} placeholder="Username" type="text" />
                <input value={pwd} onChange={(e) => setpwd(e.target.value)} placeholder="Password" type="password" />
        </div>
     );
}
 
export default AdminLogin;