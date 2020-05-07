/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import React, { useState } from 'react'

const url = 'http://localhost:8080/'

// create new messages
const MessageForm = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        res.json(message)
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <form className="happy-form">
      <textarea
        rows="3"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="form-footer">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={message.length < 2 || message.length > 140}
        >
          Send Post
        </button>
      </div>
      {message.length > 0 ? <p>{message.length}/140</p> : ''}
    </form>
  )
}

export default MessageForm
