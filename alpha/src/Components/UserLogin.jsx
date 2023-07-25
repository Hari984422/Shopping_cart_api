import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
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
 <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={uname} onChange={(e) => {setuname(e.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={(e) => {setpwd(e.target.value)}}  type="password" placeholder="Password" />
      </Form.Group>
      <button className='btn btn-primary' onClick={handleSubmit}>Sign In</button>
        <Link to='/usersignup'><button  class="btn btn-outline-danger">Sign Up</button></Link>
        <Link to="/userforgotpassword">Forgot Password</Link>
   
    </Form>
             
        </div>
     );
}
 
export default UserLogin;