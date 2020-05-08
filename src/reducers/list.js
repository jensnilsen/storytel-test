/* eslint-disable comma-dangle */
import { STATUS } from '../constants'

const initialState = {
  fetchMessageListStatus: STATUS.NOT_LOADED,
  deleteMessageStatus: STATUS.NOT_LOADED,
  messageList: [],
}

const list = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHED_SUCCESS':
      return {
        ...state,
        fetchMessageListStatus: STATUS.SUCCESS,
        messageList: action.payload,
      }
    case 'FETCHED_FAILED':
      return {
        ...state,
        fetchMessageListStatus: STATUS.FAILED,
        messageList: [],
      }
    case 'DELETE_MESSAGE_SUCCESS':
      return {
        ...state,
        deleteMessageStatus: STATUS.SUCCESS,
      }
    case 'DELETE_MESSAGE_FAILED':
      return {
        ...state,
        deleteMessageStatus: STATUS.FAILED,
      }
    default:
      return state
  }
}

export default list
