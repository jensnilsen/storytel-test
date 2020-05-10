import React from 'react'
import MessageList from './Components/MessageList'
import MessageForm from './Components/MessageForm'
import Login from './Components/Login'
import Header from './Components/Header'

export const App = () => {
  return (
    <main>
      <section className="main-wrapper">
        <Header />
        <Login />
        <MessageForm />
        <MessageList />
      </section>
    </main>
  )
}
