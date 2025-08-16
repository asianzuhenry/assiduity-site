import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/components/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">Assiduity Engineering</Link>
      </div>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <Link to="/services/plumbing">Plumbing</Link>
            <Link to="/services/mechanical">Mechanical</Link>
            <Link to="/services/electrical">Electrical</Link>
            <Link to="/services/furniture">Furniture</Link>
          </div>
        </div>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </header>
  );
};

export default Navbar;
