import React, { useState, useContext } from 'react';

import { Link } from 'react-router-dom';

import '../index.css';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close dropdown after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          My Blog
        </Link>
        <button className="hamburger" onClick={toggleDropdown} aria-label="Toggle navigation">
          <span className="hamburger-icon">☰</span>
        </button>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleDropdown}>
            Home
          </Link>
          <Link to="/about" onClick={toggleDropdown}>
            About
          </Link>
          <Link to="/blog" onClick={toggleDropdown}>
            Blog
          </Link>
          <Link to="/contact" onClick={toggleDropdown}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;