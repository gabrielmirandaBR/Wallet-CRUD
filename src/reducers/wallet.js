import {
  REQUEST_API,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
  SAVE_DATA, DELETE_ITEM,
  UPDATE_VALUE_TOTAL,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  error: null,
  sumTotal: 0,
};

function removeItem(itens, id) {
  return itens.filter((item) => item.id !== id);
}

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

  case UPDATE_VALUE_TOTAL:
    return {
      ...state,
      sumTotal: action.payload,
    };

  case DELETE_ITEM:
    return {
      ...state,
      expenses: removeItem(state.expenses, action.payload),
    };

  default:
    return state;
  }
}

export default walletReducer;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
