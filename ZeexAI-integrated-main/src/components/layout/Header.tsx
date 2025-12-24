import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {

  return (
    <header className="main-header">
      <div className="header-container">

        {/* LEFT — LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            <span className="logo-text">
              Zeex<span className="ai-text">AI</span>
            </span>
          </Link>
        </div>

        {/* CENTER — NAV LINKS */}
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" data-text="Home" className="nav-link slide-link">
              <span>Home</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/About" data-text="About" className="nav-link slide-link">
              <span>About</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Solution" data-text="Solutions" className="nav-link slide-link">
              <span>Solutions</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Services" data-text="Services" className="nav-link slide-link">
              <span>Services</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Blogs" data-text="Blogs" className="nav-link slide-link">
              <span>Blogs</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Contact" data-text="Contact" className="nav-link slide-link">
              <span>Contact</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/Career" data-text="Careers" className="nav-link slide-link">
              <span>Careers</span>
            </NavLink>
          </li>
        </ul>

        {/* RIGHT — BUTTON */}
        <div className="demo-btn">
          <Link to="/contact">
            <button className="get-demo">Get Demo</button>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
