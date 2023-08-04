import MerchantDashBoard from "./MerchantDashBoard";
import { Routes,Route } from "react-router-dom";
import MerchantNavbar from "./MerchantNavbar";
import AddItems from "./Additems";
const MerchantHomePage = () => {
    return ( 
        <div className="MechantHomePage">
            <MerchantNavbar/>
            <Routes>
                <Route path="/" element={<MerchantDashBoard/>}/>
                <Route path="/additems" element={<AddItems/>}/>
            </Routes>
        </div>
     );
}
 
export default MerchantHomePage;