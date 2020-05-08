/* eslint-disable comma-dangle */
const initialState = {
  loginStatus: 'NOT_LOGGED',
  alias: '',
  logged: false,
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return {
        ...state,
        loginStatus: 'LOGGED_IN',
        alias: action.payload,
        logged: true,
      }
    case 'LOGED_OUT':
      return {
        ...state,
        loginStatus: 'LOGGED_OUT',
        alias: '',
        logged: false,
      }
    default:
      return state
  }
}

export default login
