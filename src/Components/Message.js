import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ChangeForm from './ChangeForm'
import '../Css/Message.css'
import { getLoginAlias } from '../Selectors'

const Message = ({ message, deleteMessage, id }) => {
  const [change, setChange] = useState(false)
  const alias = useSelector(getLoginAlias)

  const hide = () => {
    setChange(false)
  }

  return (
    <section className="message-card">
      <div className="post-message">
        {!change ? (
          <div className="message-wrapper">
            {alias === message.client ? (
              <p className="my-alias"> {message.client}</p>
            ) : (
              <p className="alias">{message.client}</p>
            )}

            <p className="message">{message.message}</p>
          </div>
        ) : (
          <ChangeForm
            id={id}
            hide={hide}
            client={message.client}
            ChangeMessage={message.message}
          />
        )}
      </div>
      <div className="post-buttons">
        {!change ? (
          <div className="post-buttons">
            {alias === message.client ? (
              <button type="button" onClick={() => setChange(true)}>
                Edit
              </button>
            ) : (
              ''
            )}
          </div>
        ) : (
          <div className="post-buttons">
            <button
              className="edit-button"
              type="button"
              onClick={() => setChange(false)}
            >
              <span role="img" aria-label="buttonsymbol">
                Back
              </span>
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={deleteMessage}
            >
              <span className="trash-can" role="img" aria-label="buttonsymbol">
                Delete
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Message
