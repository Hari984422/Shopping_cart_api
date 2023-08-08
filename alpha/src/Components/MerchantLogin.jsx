import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom'
import '../styles/merchantlogin.css'
import { useState } from 'react';
import axios from 'axios';

const MerchantLogin = () => {
  let [email,setemail] = useState("")
  let [password,setpassword] = useState("")
  let navigate  = useNavigate()

  let handleSubmit =(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8080/merchants/verify?email=${email}&password=${password}`)
    .then((response)=>{
      console.log(response.data.message)
      console.log(response.data.data)
     
      localStorage.setItem("currentMerchant" , JSON.stringify(response.data.data));
      navigate("/merchanthome")
    } )
    .catch(()=>{
      alert("Invalid Credentials")
    }
    )
  }

    return ( 
        <div className="merchantlogin">
           <div className="input_group1">
           
            <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(f) => {setemail(f.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(d) => {setpassword(d.target.value)}} type="password" placeholder="Password" />
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