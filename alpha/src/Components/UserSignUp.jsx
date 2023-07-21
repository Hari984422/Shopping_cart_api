import { useState } from "react";

const UserSignUp = () => {
    let [name,setname] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [gst,setgst] = useState("")
    let [phno,setphno] = useState("")

    let handleSubmit = () => {
        let data = {name,email,password,gst,phno}
        fetch('http://localhost:8080/merchants',{
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        alert("user data added to the list")
        
    }
    return (  
        <div className="usersignup">
            <form onSubmit={handleSubmit} action="">
                <form action="">
                    <label htmlFor="">
                        Name: <input value={name} onChange={(e) => (setname(e.target.value))} placeholder="Enter name" type="text" name="" id="" />
                    </label>
                    <label htmlFor="">
                        GST no: <input value={gst} onChange={(e) => (setgst(e.target.value))} type="text" placeholder="Enter GST number" />
                    </label>
                    <label htmlFor="">
                        phone no : <input value={phno} onChange={(e) => (setphno(e.target.value))} pattern="[0-9]{10}" type="tel" placeholder="Enter phone number" />
                    </label>
                    <label htmlFor="">
                        email : <input value={email} onChange={(e) => (setemail(e.target.value))} type="text" placeholder="Enter email" />
                    </label>
                    <label htmlFor="">
                        password : <input value={password} onChange={(e) => (setpassword(e.target.value))} type="password" placeholder="Enter password" />
                    </label>
                    <button >Submit</button>
                </form>
            </form>
        </div>
    );
}
 
export default UserSignUp;