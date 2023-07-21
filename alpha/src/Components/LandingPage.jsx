import {Link} from 'react-router-dom'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <div className="login">
                <div className="user">
                    <Link to="/userlogin">
                        <img src="" alt="" />
                        <h1>User Login</h1>
                    </Link>
                </div>
                <div className="merchant">
                <Link to="/merchantlogin">
                        <img src="" alt="" />
                        <h1>Merchant Login</h1>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default LandingPage;