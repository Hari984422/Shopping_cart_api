import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import UserHomePage from './Components/UserHome';
import UserSignUp from './Components/UserSignUp';
import AdminHome from './Components/AdminHome';
import './App.css';
import Error from './Components/Error'
import UserForgotPassword from './Components/UserForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';  
import MerchantSignUp from './Components/AdminSignUp';
import MerchantForgotPassword from './Components/MerchantForgotPassword';
import Protect from './Components/Protect';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/userlogin" element={<UserLogin/>}/>
      <Route  path='/userhome' element={<UserHomePage/>}/>
      <Route path='/merchantlogin' element={<AdminLogin/>}/>
      <Route path='/usersignup' element={<UserSignUp/>} />
      <Route path='*'element={<Error/>}/>
      <Route path='/merchanthome' element={<Protect Child={AdminHome}/>}/>
      {/* <Route path='/merchanthome' element={<Protect Child={component to be protected}/>}/> */}
      <Route path='/merchantsignup' element={<MerchantSignUp/>}/>
      <Route path='/userforgotpassword' element={<UserForgotPassword/>}/>
      <Route path='/merchantforgotpassword' element={<MerchantForgotPassword/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
