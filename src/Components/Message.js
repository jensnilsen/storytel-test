import React, { useState } from 'react'
import ChangeForm from './ChangeForm'
import '../Css/Message.css'

// should present message
// be able to delete, view, modify
const Message = ({ message, deleteMessage, id }) => {
  const [change, setChange] = useState(false)

  return (
    <section>
      <div className="post-message">
        {!change ? (
          <div>
            <h5>{message.client}</h5>
            <h3>{message.message}</h3>
          </div>
        ) : (
          <ChangeForm
            id={id}
            client={message.client}
            ChangeMessage={message.message}
          />
        )}
      </div>

      <div className="post-buttons">
        {!change ? (
          <button type="button" onClick={() => setChange(true)}>
            <span role="img" aria-label="buttonsymbol">
              ✏️
            </span>
          </button>
        ) : (
          <button type="button" onClick={() => setChange(false)}>
            <span role="img" aria-label="buttonsymbol">
              ❌
            </span>
          </button>
        )}
        <button type="button" onClick={deleteMessage}>
          <span className="trash-can" role="img" aria-label="buttonsymbol">
            🗑
          </span>
        </button>
      </div>
    </section>
  )
}

export default Message
