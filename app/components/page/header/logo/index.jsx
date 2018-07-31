import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Logo = () => {
  const imageUri = '/dist/images/logo.png';
  const imageTitle = 'Write My Letter';
  const imageAlt = 'Write My Letter';

  return (
    <div className="Logo">
      <Link to="/"><img src={imageUri} title={imageTitle} alt={imageAlt} /></Link>
    </div>
  );
};

Logo.propTypes = {
  imageUri: PropTypes.string,
  imageTitle: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Logo;
