import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import UserLogin from './Components/UserLogin';
import AdminLogin from './Components/AdminLogin';
import UserHomePage from './Components/UserHome';
import UserSignUp from './Components/UserSignUp';
import './App.css';

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
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
