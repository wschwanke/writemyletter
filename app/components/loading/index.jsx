import React from 'react';
import PropTypes from 'prop-types';

const Loading = text => (
  <div class="Loading">
    <div class="Loading__cube Loading__cube--1"></div>
    <div class="Loading__cube Loading__cube--2"></div>
    <div class="Loading__cube Loading__cube--3"></div>
    <div class="Loading__cube Loading__cube--4"></div>
    <div class="Loading__cube Loading__cube--5"></div>
    <div class="Loading__cube Loading__cube--6"></div>
    <div class="Loading__cube Loading__cube--7"></div>
    <div class="Loading__cube Loading__cube--8"></div>
    <div class="Loading__cube Loading__cube--9"></div>
  </div>
);

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
