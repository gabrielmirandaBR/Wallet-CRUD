import {
  REQUEST_API,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
  SAVE_DATA,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
};

let countId = Number('-1');

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

  case SAVE_DATA:
    countId += 1;
    return {
      ...state,
      expenses: [...state.expenses, { ...action.payload, id: countId }],
    };

  default:
    return state;
  }
}

export default walletReducer;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
