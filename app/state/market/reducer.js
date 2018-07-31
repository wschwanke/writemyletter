import { FETCH_MARKET_INFO } from 'state/action-types';

const initialState = {
  status: 'PENDING',
  phoneNumber: null,
};

const market = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MARKET_INFO:
      return {
        ...state,
        status: action.status,
        ...action.payload,
      };
    default: return state;
  }
};

export default market;
