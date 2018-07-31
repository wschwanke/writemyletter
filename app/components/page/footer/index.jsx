import React from 'react';
import moment from 'moment';

const Footer = () => {
  const date = moment().format('YYYY');
  return (
    <footer className="Footer">
      <p className="Footer__copyright">Write My Letter {date} &copy; Will Schwanke</p>
    </footer>
  );
};

export default Footer;
