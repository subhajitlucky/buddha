import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Buddha. All rights reserved.</p>
        <p className="footer-text">Dedicated to preserving the authentic teachings of the Enlightened One.</p>
      </div>
    </footer>
  );
};

export default Footer;