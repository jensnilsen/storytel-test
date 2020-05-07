/* eslint-disable comma-dangle */

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
export const postMessageSucces = (postedMessage) => {
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
