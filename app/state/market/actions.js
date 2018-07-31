/**
 * External dependencies
 */
import axios from 'axios';

/**
 * Internal dependencies
 */
import { FETCH_MARKET_INFO } from 'state/action-types';

export const fetchMarketInfoAction = (phoneNumber) => {
  return {
    type: FETCH_MARKET_INFO,
    status: 'SUCCESS',
    payload: { phoneNumber },
  };
};

export const fetchMarketInfo = () => {
  return (dispatch) => {
    return axios.get('/v1/location?city=austin')
      .then(() => {
        dispatch(fetchMarketInfoAction('512-736-9655'));
      });
  };
};
