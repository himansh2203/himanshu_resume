import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleDropdown = () => setServicesDropdown(!servicesDropdown);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Himansu Singh
        </Link>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="dropdown-parent"
          ></li>
          <li>
            <Link to="/aboutUs">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button className="book-btn">
              <a href="tel:+919560652396" className="book-link">
                Call Now{" "}
              </a>
            </button>
          </li>
          <li className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </li>
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
