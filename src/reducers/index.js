import { combineReducers } from 'redux'
import list from './list'
import messageForm from './messageForm'
import login from './login'

const allReducers = combineReducers({
  list,
  messageForm,
  login,
})

export default allReducers
