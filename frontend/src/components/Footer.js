import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: '#34aaa0',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>© 2025 MERN Blog. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', margin: '0 10px' }}
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/sujith-gurrapu/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', margin: '0 10px' }}
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sujith-hub"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', margin: '0 10px' }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;