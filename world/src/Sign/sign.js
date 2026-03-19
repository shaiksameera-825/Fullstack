import {Link} from "react-router-dom";
import "./sign.css"
function Signup()
{
    return(
        <>
        <div className="login">
            <div className="login-box">
            <h3>Signup</h3>
                <p className="name">Username</p>
                <input type="email" placeholder="Enter your email"/>
                <p className="name">Password</p>
                <input type="password" placeholder="Enter your password"/>
                <p className="name">Confirm Password</p>
                <input type="password" placeholder="Enter your password"/><br/>
                <Link to="/login">
                <button>Sign Up</button>
                </Link>
                 <p id="valid">Already Have an account?<Link to="/login"><a>Login</a></Link></p>
            </div>
           
        </div>
        </>
    )
}
export default Signup;