import {Link} from 'react-router-dom';
import "./../navbar/navbar.css";


function Navbar(){
   
    return(
        <>
        <nav className="navbar">
           
            
            <ul className = "nav-links">
                <Link to = "/" className = "home">
                    <li>Home</li>
                </Link>
                <Link to = "/register" className = "home">
                    <li>Register</li>
                </Link>
                <Link to = "/login" className = "home">
                    <li>Login</li>
                </Link>
                <Link to = "/viewDetails" className = "home">
                    <li>View Details</li>
                </Link>
                <Link to = "/graph" className = "bollywood">
                    <li>Graph</li>
                </Link>
                <Link to = "/redux" className = "bollywood">
                    <li>redux</li>
                </Link>
                <Link to = "/logout" className = "bollywood">
                    <li>Logout</li>
                </Link>
                    
            
                
            </ul>
            
            
        </nav>
        <hr />
         </>
    );
}
export default Navbar;