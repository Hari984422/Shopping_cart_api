import MerchantDashBoard from "./MerchantDashBoard";
import MerchantNavbar from "./MerchantNavbar";
import { Routes,Route } from "react-router-dom";
import Footer from "./Footer";
import AddItems from "./Additems";
import Products from "./Products";
const MerchantHomePage = () => {
    return ( 
        <div className="MechantHomePage">
            <MerchantNavbar/>
            <Routes>
                <Route path="/" element={<MerchantDashBoard/>}/>
                <Route path="/additems" element={<AddItems/>}/>
                <Route path='/products'element={<Products/>}/>
            </Routes>
            <Footer/>

        </div>
     );
}
 
export default MerchantHomePage;