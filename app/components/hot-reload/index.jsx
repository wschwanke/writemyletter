/**
 * External dependencies
 */
import React from 'react';
import { hot } from 'react-hot-loader';

/**
 * Internal dependencies
 */
import Router from 'router';

const HotReload = props => (
  <Router {...props} />
);

export default hot(module)(HotReload);
