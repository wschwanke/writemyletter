import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer className="Footer">
    <p className="Footer__copyright">Write My Letter {moment().format('YYYY')} &copy; Will Schwanke</p>
  </footer>
);

export default Footer;
