import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar justify-content-center">
      <li className="nav-item nav-link">
        <Link to="/">Login</Link>
      </li>
      <li className="nav-item nav-link">
        <Link to="/stats">Stats</Link>
      </li>
    </nav>
  );
};

export default Header;
