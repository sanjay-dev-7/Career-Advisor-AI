import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="space-navbar">
      <div className="navbar-container">
        {/* Brand / Logo */}
        <div className="brand-logo">
          🚀 CareerPilot<span className="brand-accent">.AI</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/career-advisor" className="nav-link">
            Form
          </a>
          <a href="#waypoints" className="nav-link">
            Roadmaps
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
        </div>

        {/* Status Chip */}
        <div className="status-badge">
          AI Engine: ONLINE
        </div>
      </div>
    </nav>
  );
}

export default Navbar;