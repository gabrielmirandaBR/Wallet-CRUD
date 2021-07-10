import { GET_LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_LOGIN:
    return ({
      ...state,
      email: action.payload.email,
    });

  default:
    return state;
  }
}

export default userReducer;
// Esse reducer será responsável por tratar as informações da pessoa usuária
