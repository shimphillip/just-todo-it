import React from 'react';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="/" className="nav-link">
        Incomplete Tasks
      </a>
      <a href="/" className="nav-link">
        Complete Tasks
      </a>
    </nav>
  );
};

export default Nav;
