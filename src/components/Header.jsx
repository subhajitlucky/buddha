import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">The Life and Teachings of Buddha</h1>
        <nav className="navigation">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/life" className="nav-link">Life of Buddha</Link>
            </li>
            <li className="nav-item">
              <Link to="/teachings" className="nav-link">Teachings</Link>
            </li>
            <li className="nav-item">
              <Link to="/meditation" className="nav-link">Meditation</Link>
            </li>
            <li className="nav-item">
              <Link to="/texts" className="nav-link">Buddhist Texts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;