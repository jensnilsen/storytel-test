export const getList = (state) => state.list
export const getMessageList = (state) => getList(state).getMessageList

export const getLogin = (state) => state.login
export const getLoginAlias = (state) => getLogin(state).alias
