import { Link } from "react-router-dom";
import '../styles/navbar.css'
import { useState } from "react";
const Navbar = () => {
    let [sub,setsub] = useState(false)
    return ( 
        <div className="Navbar">
            <div className="nav">
                <div className="logo">
                    <img src="https://logolook.net/wp-content/uploads/2023/03/Ajio-Logo.png" alt="" />
                </div>
                <div className="options"> 
                <div className="wishlist">
                    <Link to=""><h3>Wishlist</h3></Link>
                </div>
                <div className="search">
                    <input placeholder="Search for Products, Brands and More" type="text" />
                    <button className="btn btn-info">Search</button>
                </div>
                <div onClick={()=>{setsub(!sub)}}  className="profile">
                    <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" alt="" />
                    {sub && <div  className="sub1">
                    <Link to="" id="l1">Edit Profile</Link>
                    <Link to="" id="l2">Check Order</Link>
                    <Link to="" id="l3">Update Adress</Link>
                    <Link to="" id="l4">Logout</Link>
                   </div>}
                    </div>
                </div>
                <div className="hambarger">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIxoVu_8TdRE3ch49htqsXQ726DpZyWeg2_eSNDpmEg&s" alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;