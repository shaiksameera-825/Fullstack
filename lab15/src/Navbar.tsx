import { Link } from "react-router-dom";
import './navbar.css';
function Navbar(){
  return (
    <nav className="navbar">
      <h2>MyCompany</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
