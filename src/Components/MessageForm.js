/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { URL } from '../constants'
import { fetchListsSuccess, fetchListsFailed } from '../actions'
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
        fetchList().then(setMessage(''))
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type here ..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <p>{message.length}/140</p>
      <button
        className="send-button"
        type="submit"
        // onClick={handleSubmit}
        disabled={message.length < 1 || message.length > 140}
      >
        Send Post
      </button>
    </form>
  )
}

export default MessageForm
