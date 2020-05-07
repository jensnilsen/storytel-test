const messageForm = (state = {}, action) => {
  console.log(state)
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
      return {
        ...state,
        postMessageListStatus: 'NOT_POSTED',
      }
  }
}

export default messageForm
