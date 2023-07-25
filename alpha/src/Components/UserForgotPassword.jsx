import { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
const UserForgotPassword = () => {
    let [email,setemail] = useState("")
    let handleclick = () =>{
        axios.post('')
        .then(()=>{
            alert("OTP has been sent to your ",email)
        })
        .catch(()=>{
            alert("please enter the valid email")
        })
    }
    return ( 
        <div className="UserForgotPassword">
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onchange={(e) => {setemail(e.target.value)}} type="email" placeholder="name@example.com" />
        <button onClick={handleclick}>Reset</button>
      </Form.Group>
      </Form>
        </div>
     );
}
 
export default UserForgotPassword;