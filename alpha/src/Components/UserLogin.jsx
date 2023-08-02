import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const UserLogin = () => {
  let[uname,setuname]=useState("")
    let [email,setEmail] = useState("")
    let [password,setpassword] = useState("")
    let navigate  = useNavigate()
   let handleSubmit =(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/users/verify?email=${email}&password=${password}`).then((response)=>{
      console.log(response);
    })
   }

    return ( 
        <div className="userlogin">
 <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => {setpassword(e.target.value)}}  type="password" placeholder="Password" />
      </Form.Group>
      <button className='btn btn-primary' onClick={handleSubmit}>Sign In</button>
        <Link to='/usersignup'><button  class="btn btn-outline-danger">Sign Up</button></Link>
        <Link to="/userforgotpassword">Forgot Password</Link>
   
    </Form>
             
        </div>
     );
}
 export default UserLogin;