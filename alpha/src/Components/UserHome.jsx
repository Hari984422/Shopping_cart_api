import { Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import ViewProducts from "./viewProducts";
const UserHome = () => {
  return ( 
    <div className="Userhome">
     <Navbar/>
      <Routes>
        <Route path="/" element={<ViewProducts/>}/>
      </Routes>
    </div>
   );
}
 
export default UserHome;