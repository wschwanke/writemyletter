/**
 * External dependencies
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="HeaderNavigation navbar navbar-expand-md">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav-dropdown" aria-controls="header-nav-dropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="header-nav-dropdown">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item MyAccountLink">
          <a className="nav-link" href="#">My Account</a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/our-services">Our Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/location">Location</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/pricing">Pricing</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
