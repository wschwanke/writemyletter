import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ text }) => {
  return <div className="Loading">{text}</div>
};

/**
 * Prop types
 */
Loading.propTypes = {
  text: PropTypes.string,
};

/**
 * Default props
 */
Loading.defaultProps = {
  text: 'Loading...',
};

export default Loading;
