import React from 'react'
import MessageList from './Components/MessageList'
import MessageForm from './Components/MessageForm'
import Login from './Components/Login'

export const App = () => {
  return (
    <main>
      {/* <Login /> */}
      <MessageForm />
      <MessageList />
    </main>
  )
}
