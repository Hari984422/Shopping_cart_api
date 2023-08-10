import { Link } from "react-router-dom";
import '../styles/footer.css'
const Footer = () => {
    return ( 
        <div className="Footer">
           <Link to="">About</Link>
           <Link to="">Contact Us</Link> 
        </div>
     );
}
 
export default Footer;