import { Link } from "react-router-dom/dist";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <Link to="/addproduct">
                <img src="" alt="" />
                <h1>Add Product</h1>
            </Link>
            <Link to="/updatemerchant">
                <img src="" alt="" />
                <h1>Edit Profile</h1>
            </Link>
            <Link to="">
                <img src="" alt="" />
                <h1>View Products</h1>
            </Link>
            <Link to="">
                <img src="" alt="" />
                <h1>Logout</h1>
            </Link>
        </div>
     );
}
 
export default AdminHome;