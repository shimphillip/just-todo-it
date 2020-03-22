import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <NavLink exact to="/" className="nav-link" activeClassName="nav-link--active">
        Incomplete Tasks
      </NavLink>
      <NavLink
        exact to="/completed"
        className="nav-link"
        activeClassName="nav-link--active"
      >
        Complete Tasks
      </NavLink>
    </nav>
  );
};

export default Nav;
