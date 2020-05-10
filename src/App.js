import React from 'react'
import List from './Components/MessageList'
import Form from './Components/MessageForm'
import LogIn from './Components/Login'
import Head from './Components/Header'

export const App = () => {
  return (
    <main>
      <section className="main-wrapper">
        <Head />
        <LogIn />
        <Form />
        <List />
      </section>
    </main>
  )
}
