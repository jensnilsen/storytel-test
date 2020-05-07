import React from 'react'
import MessageList from './Components/MessageList'
import MessageForm from './Components/MessageForm'

export const App = () => {
  return (
    <main>
      <MessageForm />
      <MessageList />
    </main>
  )
}
