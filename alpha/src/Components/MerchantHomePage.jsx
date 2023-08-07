import MerchantDashBoard from "./MerchantDashBoard";
import MerchantNavbar from "./MerchantNavbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Footer";
import AddItems from "./Additems";
const MerchantHomePage = () => {
    return ( 
        <div className="MechantHomePage">
            <MerchantNavbar/>
            <Routes>
                <Route path="/" element={<MerchantDashBoard/>}/>
                <Route path="/additems" element={<AddItems/>}/>
            </Routes>
            <Footer/>

        </div>
     );
}
 
export default MerchantHomePage;