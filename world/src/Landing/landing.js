import { Link } from "react-router-dom";
import "./landing.css";
function Landing() {
  return (
    <div className="landing-container">
      <div className="content-box">
        <h1>Glam Beauty</h1>
        <p>
          Glam Beauty offers premium beauty and skincare products designed
          to enhance your natural glow. Our products are safe, affordable,
          and suitable for all skin types.
        </p>
        <p>
          Discover makeup, skincare, and beauty essentials that bring
          confidence and elegance to your everyday look.
        </p>
      </div>
      <div className="image-box">
        <img src="https://i0.wp.com/2.bp.blogspot.com/-RADSOTQBRTY/XpVvCecd4tI/AAAAAAAGsyA/ZrOaJwQXo80Ov6YfJAGqqJcSTbV97VqtQCLcBGAsYHQ/s1600/LudovicoRojas-Branding_Glam01.jpg?ssl=1" alt="Glam Beauty" />
        <Link to="/login" className="btn login-btn">Login</Link>
        <Link to="/sign" className="btn signup-btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Landing;
