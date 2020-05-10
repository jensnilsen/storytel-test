import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { URL } from '../constants'
import {
  fetchListsSuccess,
  fetchListsFailed,
  postMessageSuccess,
  postMessageFailed,
} from '../actions'
import { getLoginAlias } from '../Selectors'
import '../Css/MessageForm.css'

const MessageForm = () => {
  const [message, setMessage] = useState('')
  const client = useSelector(getLoginAlias)

  const dispatch = useDispatch()

  const fetchList = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((json) => dispatch(fetchListsSuccess(json)))
      .catch((error) => dispatch(fetchListsFailed(error)))
  }

  useEffect(() => {
    fetchList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ message, client }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        res.json(message)
        dispatch(postMessageSuccess(message))
        fetchList().then(setMessage(''))
      })
      .catch((error) => dispatch(postMessageFailed(error)))
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here ..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <p
        disabled={message.length < 1 || message.length > 50}
        className="message-length"
      >
        {message.length}/50
      </p>
      <button
        className="send-button"
        type="submit"
        disabled={message.length < 1 || message.length > 50}
      >
        Post
      </button>
    </form>
  )
}

export default MessageForm
