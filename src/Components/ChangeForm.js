/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { URL } from '../constants'
import { fetchListsSuccess, fetchListsFailed } from '../actions'
import '../Css/ChangeForm.css'

// create new messages
const ChangeForm = ({ id, ChangeMessage, client, hide }) => {
  const [message, setMessage] = useState('')
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
    hide()
    fetch(URL + id, {
      method: 'PUT',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(fetchList)
      .catch((err) => console.log('error:', err))
  }

  return (
    <form className="change-form">
      <p className="alias">{client} :</p>
      <input
        className="change-input"
        type="text"
        defaultValue={ChangeMessage}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={message.length < 1 || message.length > 140}
        >
          OK
        </button>
      </div>
    </form>
  )
}

export default ChangeForm
