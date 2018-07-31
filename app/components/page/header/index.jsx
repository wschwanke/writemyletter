import React from 'react';

import Logo from './logo';
import Navigation from './navigation';


const Header = () => (
  <div className="Header__container--border">
    <header className="Header__container">
      <div className="Header">
        <div className="Header__logo">
          <Logo />
        </div>
        <div className="Header__content">
          <Navigation />
        </div>
      </div>
    </header>
  </div>
);

export default Header;
