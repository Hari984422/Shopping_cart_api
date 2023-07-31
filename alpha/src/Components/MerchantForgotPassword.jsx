import { useState } from "react";
import axios from "axios";
const MerchantForgotPassword = () => {
    let [email,setemail] = useState("")
    console.log(email);
    let handleclick = () =>{
        axios.post(`http://localhost/8080/merchants/verify/email=${email}`)
        .then(()=>{
            alert("OTP has been sent to your ",email)
        })
        .catch(()=>{
            alert("please enter the valid email")
        })
    }
    return ( 
        <div className="MerchantForgotPassword">
            <form action="">
            <input type="email" value={email} onchange={(e) => {setemail(e.target.value)}}  />
            <button onClick={handleclick}>Reset</button>
            </form>
           
        </div>
     );
}
 
export default MerchantForgotPassword;