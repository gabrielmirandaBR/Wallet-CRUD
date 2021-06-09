import {
  REQUEST_API,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  isLoading: false,
  error: null,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: Object.values(action.data),
      isLoading: false,
    };
  case REQUEST_CURRENCIES_ERROR:
    return {
      ...state,
      error: action.error,
    };

  default:
    return state;
  }
}

export default walletReducer;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
