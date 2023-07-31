import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const UserSignUp = () => {
    let [name,setname] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [gst,setgst] = useState("")
    let [phone,setphone] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault()
        let merchant = {name,email,password,gst,phone}
        axios.post("http://localhost:8080/users",merchant).then((response)=>{console.log(response);}) .catch(()=>{console.log("wronggggggggg");})   
    }
    return (  
        <div className="usersignup">
            <form onSubmit={handleSubmit} action="">
                    <label htmlFor="">
                        Name: <input value={name} onChange={(e) => (setname(e.target.value))} placeholder="Enter name" type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        GST no: <input value={gst} onChange={(e) => (setgst(e.target.value))} type="text" placeholder="Enter GST number" />
                    </label>
                    <label htmlFor="">
                        phone no : <input value={phone} onChange={(e) => (setphone(e.target.value))} pattern="[0-9]{10}" type="tel" placeholder="Enter phone number" />
                    </label>
                    <label htmlFor="">
                        email : <input value={email} onChange={(e) => (setemail(e.target.value))} type="text" placeholder="Enter email" />
                    </label>
                    <label htmlFor="">
                        password : <input value={password} onChange={(e) => (setpassword(e.target.value))} type="password" placeholder="Enter password" />
                    </label>
                    <button >Submit</button>
                </form>
        </div>
    );
}
 
export default UserSignUp;