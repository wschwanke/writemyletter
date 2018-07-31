import React from 'react';

import Logo from './logo';
import Navigation from './navigation';


const Header = () => (
  <header className="Header container">
    <div className="row">
      <div className="Header__logo col">
        <Logo />
      </div>
      <div className="Header__content col">
        <Navigation />
      </div>
    </div>
  </header>
);

export default Header;
