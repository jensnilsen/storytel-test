const initialState = {
  postMessageListStatus: 'NOT_POSTED',
}

const messageForm = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_SUCCESS':
      return {
        ...state,
        postMessageListStatus: 'SUCCESS',
        messageList: action.payload,
      }
    case 'POST_FAILED':
      return {
        ...state,
        postMessageListStatus: 'FAILED',
      }
    default:
      return state
  }
}

export default messageForm
