import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const AdminLogin = () => {
    let [uname,setuname] = useState("")
    let [pwd,setpwd] = useState("")
    let navigate  = useNavigate()
   let handleSubmit =()=>{

    axios.post(`http://localhost:8080/merchants/verify?email=${uname}&password=${pwd}`)
    .then(()=>{
        console.log("Login Successfull");
    navigate("/merchanthome")

    })
    .catch(()=>{
        alert("Login Failed")
    })
   }

    return ( 
        <div className="adminlogin">
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
        <Link to='/merchantsignup'><button  class="btn btn-outline-danger">Sign Up</button></Link>
        <Link to="/merchantforgotpassword">Forgot Password</Link>
    </Form>
             
        </div>
     );
}
 
export default AdminLogin;