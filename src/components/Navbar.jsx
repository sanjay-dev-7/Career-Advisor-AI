import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CareerPilot <span>AI</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/career-advisor" className="nav-btn">
            Career Advisor
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;