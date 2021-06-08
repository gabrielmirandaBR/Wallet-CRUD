export const GET_LOGIN = 'GET_LOGIN';

function getEmail(email) {
  return {
    type: GET_LOGIN,
    payload: {
      email,
    },
  };
}

export default getEmail;
// Coloque aqui suas actions
