/* eslint-disable comma-dangle */
const initialState = {
  fetchMessageListStatus: 'NOT_LOADED',
  deleteMessageStatus: 'NOT_LOADED',
  messageList: [],
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_SUCCESS':
      return {
        ...state,
        fetchMessageListStatus: 'SUCCESS',
        messageList: action.payload,
      }
    case 'FETCHED_FAILED':
      return {
        ...state,
        fetchMessageListStatus: 'FAILED',
        messageList: [],
      }
    case 'DELETE_MESSAGE_SUCCESS':
      return {
        ...state,
        deleteMessageStatus: 'SUCCESS',
      }
    case 'DELETE_MESSAGE_FAILED':
      return {
        ...state,
        deleteMessageStatus: 'FAILED',
      }
    default:
      return state
  }
}

export default list
