import React, { useState } from 'react'
import ChangeForm from './ChangeForm'
import '../Css/Message.css'

// should present message
// be able to delete, view, modify
const Message = ({ message, deleteMessage, id }) => {
  const [change, setChange] = useState(false)

  return (
    <section>
      {!change ? (
        <div>
          <h3>{message.message}</h3>
          <button type="button" onClick={() => setChange(true)}>
            <span role="img" aria-label="buttonsymbol">
              ✏️
            </span>
          </button>
        </div>
      ) : (
        <div>
          <ChangeForm id={id} ChangeMessage={message.message} />
          <button type="button" onClick={() => setChange(false)}>
            <span role="img" aria-label="buttonsymbol">
              ❌
            </span>
          </button>
        </div>
      )}
      <button type="button" onClick={deleteMessage}>
        <span className="trash-can" role="img" aria-label="buttonsymbol">
          🗑
        </span>
      </button>
    </section>
  )
}

export default Message
