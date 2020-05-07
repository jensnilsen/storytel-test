/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import React, { useState } from 'react'
import '../Css/ChangeForm.css'

const url = 'http://localhost:8080/'

// create new messages
const ChangeForm = ({ id, ChangeMessage, client }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    fetch(url + id, {
      method: 'PUT',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    }).catch((err) => console.log('error:', err))
  }

  return (
    <form>
      <h5>{client}</h5>
      <textarea
        defaultValue={ChangeMessage}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={message.length < 1 || message.length > 140}
        >
          <span role="img" aria-label="buttonsymbol">
            ✔️
          </span>
        </button>
      </div>
    </form>
  )
}

export default ChangeForm
