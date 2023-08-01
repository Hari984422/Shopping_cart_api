import { Link } from "react-router-dom/dist";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <h1>Admin Home</h1>
            <div className="landingpage">
    <div className="login">
        <div className="user">
            <Link to="/addproduct">
                <img src="" alt="" />
                <h1>Add Product</h1>
            </Link>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default AdminHome;