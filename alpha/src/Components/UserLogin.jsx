import Form from 'react-bootstrap/Form';
import '../styles/userlogin.css'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const UserLogin = () => {
  let [uname,setuname] = useState("")
  let [pwd,setpwd] = useState("")
  let navigate = useNavigate()
  let handleSubmit = () => {
    axios.post(`http://localhost:8080/users/verify/email=${uname}&password=${pwd}`)
    .then(()=>{
      navigate('/userhome')
    })
    .catch(()=>{
      alert("Invalid user name")
    })
  }
    return ( 
        <div className="userlogin">
           <div className="input_group">
           <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={uname} onChange={(e) => {setuname(e.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={(e) => {setpwd(e.target.value)}} type="password" placeholder=" Password" />
      </Form.Group>
      <button onClick={handleSubmit} className='btn btn-outline-primary'>Sign in</button> 
    <Link to="/usersignup"><button className='btn btn-danger'>Sign Up</button></Link>
    </Form>
   
           </div>
        </div>
     );
}
 
export default UserLogin;