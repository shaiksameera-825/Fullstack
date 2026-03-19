import"./login.css";
import {Link} from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <div className="login-box">
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Link to="/home">
        <button>Login</button>
        </Link>
        <p className="hint">Don't have an account? Sign up</p>
        
      </div>
    </div>
  );
}
export default Login;
// import "./login.css";
// import { Link } from "react-router-dom";
// import { useState, useContext } from "react";
// import { StoreContext } from "../Storecontext/store";
// import { useNavigate } from "react-router-dom";
// function Login() {
//   const { login } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   // Fixed credentials
//   const validEmail = "sameera@example.com";
//   const validPassword = "12345";

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === validEmail && password === validPassword) {
//       login(); //
//       navigate("/home");
//     } else {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login">
//       <div className="login-box">
//         <h1>Login</h1>
//         {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
//         <form onSubmit={handleLogin}>
//           <input type="email" placeholder="Email" value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input type="password" placeholder="Password" value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         <p>
//           Don’t have an account?
//           <Link to="/sign"> Sign up</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;
