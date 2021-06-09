export const GET_LOGIN = 'GET_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';
// Action Login

export function getEmail(email) {
  return {
    type: GET_LOGIN,
    payload: {
      email,
    },
  };
}

// Action Wallet

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
// Coloque aqui suas actions
