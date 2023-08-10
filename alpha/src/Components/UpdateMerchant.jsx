import axios from 'axios'
import React, { useState } from 'react'

const UpdateMerchant = () => {
    let [id,setid]=useState("") 
    let [name,setname] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [gst,setgst] = useState("")
    let [phone,setphone] = useState("")
    let merchant=JSON.parse(localStorage.getItem("currentUSer"))
    let handleSubmit = (e) => {
        e.preventDefault()
        let merchant = {id,name,email,password,gst,phone}
        axios.put("http://localhost:8080/merchants",merchant).then((response)=>{
            alert("merchant updated")
            console.log(response.data.data);})    
    }
  return (
    <div className="merchantupdate">
    <form onSubmit={handleSubmit} action="">
        <input type='hidden' value={merchant.id} ></input>
            <label htmlFor="">
                Name: <input value={merchant.name} onChange={(e) => (setname(e.target.value))} placeholder="Enter name" type="text" name="" id="" />
            </label>
            <label htmlFor="">
                GST no: <input value={merchant.gst} onChange={(e) => (setgst(e.target.value))} type="text" placeholder="Enter GST number" />
            </label>
            <label htmlFor="">
                phone no : <input value={merchant.phone} onChange={(e) => (setphone(e.target.value))} pattern="[0-9]{10}" type="tel" placeholder="Enter phone number" />
            </label>
            <label htmlFor="">
                email : <input value={merchant.email} onChange={(e) => (setemail(e.target.value))} type="text" placeholder="Enter email" />
            </label>
            <label htmlFor="">
                password : <input value={merchant.password} onChange={(e) => (setpassword(e.target.value))} type="password" placeholder="Enter password" />
            </label>
            <button >Submit</button>
        </form>
</div>
  )
}

export default UpdateMerchant