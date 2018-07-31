/**
 * External dependencies
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

/**
 * Internal dependencies
 */
import market from './market/reducer';

export const reducer = combineReducers({
  market,
});

const middleware = [
  thunk,
  logger,
];


export const createReduxStore = () => (createStore(reducer, {}, applyMiddleware(...middleware)));
