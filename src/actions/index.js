export const fetchListsSuccess = (messageList) => {
  return {
    type: 'FETCHED_SUCCESS',
    payload: messageList,
  }
}
export const fetchListsFailed = (error) => {
  return {
    type: 'FETCHED_FAILED',
    payload: error,
  }
}
export const postMessageSuccess = (postedMessage) => {
  return {
    type: 'POST_SUCCESS',
    payload: postedMessage,
  }
}
export const postMessageFailed = (error) => {
  return {
    type: 'POST_FAILED',
    payload: error,
  }
}
export const logIn = (alias) => {
  return {
    type: 'LOGGED_IN',
    payload: alias,
  }
}
export const logOut = () => {
  return {
    type: 'LOGGED_OUT',
    payload: [],
  }
}
export const loginFailed = (error) => {
  return {
    type: 'LOGIN_FAILED',
    payload: error,
  }
}
export const deleteSuccess = (deleted) => {
  return {
    type: 'DELETE_SUCCESS',
    payload: deleted,
  }
}
