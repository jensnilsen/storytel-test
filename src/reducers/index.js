/* eslint-disable comma-dangle */
import { combineReducers } from 'redux'
import list from './list'
import messageForm from './messageForm'

const allReducers = combineReducers({
  list,
  messageForm,
})

export default allReducers
