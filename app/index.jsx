/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createReduxStore } from 'state';
import 'bootstrap';

/**
 * Internal dependencies
 */
import HotReload from 'components/hot-reload';

const store = createReduxStore();

ReactDOM.render(
  <HotReload store={store} />,
  document.getElementById('root'),
);
