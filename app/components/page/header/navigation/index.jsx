/**
 * External dependencies
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navbar navbar-light navbar-expand-md">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav-dropdown" aria-controls="header-nav-dropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="header-nav-dropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/">Cover Letter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/">My Account</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/">Login</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
