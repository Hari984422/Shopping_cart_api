import Form from 'react-bootstrap/Form';
import '../styles/merchantsignup.css'
import { useState } from 'react';
import axios from 'axios'
const MerchantSignUp = () => {
    let [uname,setuname ] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [phone,setphone] = useState("")
    let [gst,setgst] = useState("")

    let data = {uname,email,password,phone,gst}

    let handleClick = () =>{
      axios.post('http://localhost:4000/Merchants',data)
    .then(()=>{
      alert("Data added Successfully")
      console.log("Data added Successfully");
    })
    .catch(()=>{
      alert("Invalid Format")
    })
    }

    return ( 
        <div className="MerchantSignUp">
            <Form id="form">
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control value={uname} onChange={(e) => {setuname(e.target.value)}}  type="text" placeholder="Enter Name" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Phone No</Form.Label>
        <Form.Control value={phone} onChange={(e) => {setphone(e.target.value)}} type="tel" pattern='[0-9]{10}' placeholder="Phone no" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>GST No</Form.Label>
        <Form.Control value={gst} onChange={(e) => {setgst(e.target.value)}} type="text" placeholder="Enter gst" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e) => {setemail(e.target.value)}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e) => {setpassword(e.target.value)}} type="password" placeholder="Password" />
      </Form.Group>
      <button onClick={handleClick}  className='btn btn-success  px-5'>Register</button>
    </Form>

        </div>
     );
}
 
export default MerchantSignUp;