import { STATUS } from '../constants'

const initialState = {
  postMessageListStatus: STATUS.NOT_LOADED,
}

const messageForm = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      return {
        ...state,
        postMessageListStatus: STATUS.SUCCESS,
        messageList: action.payload,
      }
    case 'POST_FAILED':
      return {
        ...state,
        postMessageListStatus: STATUS.FAILED,
      }
    default:
      return state
  }
}

export default messageForm
