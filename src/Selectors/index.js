export const getList = (state) => state.list
export const getMessageList = (state) => getList(state).messageList || []
export const getLogin = (state) => state.login
export const getLoginAlias = (state) => getLogin(state).alias || {}
