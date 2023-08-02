import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const AdminLogin = () => {
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let navigate  = useNavigate()
    let handleSubmit =(e)=>{
      e.preventDefault()
      axios.post(`http://localhost:8080/merchants/verify?email=${email}&password=${password}`)
      .then((response)=>{
        
        let vemail = response.data.data.email
        let vpassword = response.data.data.password
      if (vemail == email && vpassword == password) 
      {
        localStorage.setItem("currentUSer" , JSON.stringify(response.data.data))
        navigate("/merchanthome")
      } 
       else {
        alert("Invalid Username or Password")
       }
      })
     }

    return ( 
        <div className="adminlogin">
 <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required value={email} onChange={(e) => {setemail(e.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required value={password} onChange={(e) => {setpassword(e.target.value)}}  type="password" placeholder="Password" />
      </Form.Group>
      <button className='btn btn-primary' onClick={handleSubmit}>Sign In</button>
        <Link to='/merchantsignup'><button  class="btn btn-outline-danger">Sign Up</button></Link>
        <Link to="/merchantforgotpassword">Forgot Password</Link>
    </Form>
             
        </div>
     );
}
export default AdminLogin;