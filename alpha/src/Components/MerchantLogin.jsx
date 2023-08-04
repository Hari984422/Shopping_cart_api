import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/merchantlogin.css'
import { useState } from 'react';
import axios from 'axios';

const MerchantLogin = () => {
  let [uname,setuname] = useState("")
  let [pwd,setpwd] = useState("")
  let navigate = useNavigate()
  let handleSubmit = () => {
    axios.post(`http://localhost:8080/merchants/verify/email=${uname}&password=${pwd}`)
    .then((res)=>{
let email = res.data
      navigate('/merchanthome')
    })
    .catch(()=>{
      alert("Invalid user name")
    })
  }
    return ( 
        <div className="merchantlogin">
           <div className="input_group1">
           
            <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={uname} onChange={(f) => {setuname(f.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={pwd} onChange={(d) => {setpwd(d.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
      <button onClick={handleSubmit} className='btn btn-primary'>Sign In</button>
    <Link to="/merchantsignup"><button className='btn btn-outline-danger'>Sign Up</button></Link>
    <Link to="/setpassword">Forgot Password?</Link>
    </Form>
   

           </div>
        </div>
     );
}
 
export default MerchantLogin;