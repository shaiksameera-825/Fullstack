import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
function Navbar({ cartCount, setIsLoggedIn }) {
  const navigate = useNavigate();  
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };
  
  return (
    <div className="navbar">
    <div className="glam">
    <img src="https://i.pinimg.com/736x/7d/3e/3b/7d3e3bfd3e917d3760937d7afce57f08.jpg"alt=""/>
    </div>
      <h2>GLAM💄💅</h2>
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/features"><li>Features</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/sign"><li>Sign in</li></Link>
        <Link to="/cart"><li>Cart ({cartCount})</li></Link>
        <button onClick={logout}><li>Logout</li></button>

        {/* <Link to="/payment"><li>Payments</li></Link> */}
      </ul>
    </div>
  );
}
export default Navbar;