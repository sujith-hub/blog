import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ background: '#34aaa0', padding: '1rem', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li><Link to="/blog" style={{ color: 'white' }}>Blog</Link></li>
        <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li> {/* Add this */}
        {user ? (
          <li>
            <button
              onClick={handleLogout}
              style={{ background: 'none', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              Logout
            </button>
          </li>
        ) : (
          <li><Link to="/login" style={{ color: 'white' }}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;