import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Incomplete Tasks
      </Link>
      <Link to="/completed" className="nav-link">
        Complete Tasks
      </Link>
    </nav>
  );
};

export default Nav;
