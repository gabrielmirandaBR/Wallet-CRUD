export const GET_LOGIN = 'GET_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';
export const SAVE_DATA = 'SAVE_DATA';
export const DELETE_ITEM = 'DELETE_ITEM';
export const UPDATE_VALUE_TOTAL = 'UPDATE_VALUE_TOTAL';

// Action Login

export function getEmail(email) {
  return {
    type: GET_LOGIN,
    payload: {
      email,
    },
  };
}

// Actions Wallet

export function updateValueTotal(payload) {
  return {
    type: UPDATE_VALUE_TOTAL,
    payload,
  };
}

export function removeItem(payload) {
  return {
    type: DELETE_ITEM,
    payload,
  };
}

export function saveData(payload) {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    payload.exchangeRates = data;
    dispatch({
      type: SAVE_DATA,
      payload,
    });
  };
}

export function requestAPI() {
  return {
    type: REQUEST_API,
  };
}

export function requestCurrenciesSuccess(data) {
  return {
    type: REQUEST_CURRENCIES_SUCCESS,
    data,
  };
}
export function requestCurrenciesError(error) {
  return {
    type: REQUEST_CURRENCIES_ERROR,
    error,
  };
}

export function fetchAPI() {
  return async (dispatch) => {
    try {
      dispatch(requestAPI()); // isLoading is true
      // chama API
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(requestCurrenciesSuccess(data)); // atualiza o estado global
    } catch (error) {
      dispatch(requestCurrenciesError(error)); // atualiza o estado global
    }
  };
}
