import { Routes,Route } from "react-router-dom";
import UserDashBoard from "./UserDashboard";
import Navbar from "./Navbar";
const UserHome = () => {
  return ( 
    <div className="Userhome">
     <Navbar/>
      <Routes>
        <Route path="/" element={<UserDashBoard/>}/>
      </Routes>
    </div>
   );
}
 
export default UserHome;