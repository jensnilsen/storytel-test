/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchListsSuccess, fetchListsFailed } from '../actions'
import { getMessageList } from '../Selectors'
import Message from './Message'
import { URL } from '../constants'

const MessageList = () => {
  const messageList = useSelector(getMessageList)
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

  const deleteMessage = (id) => {
    fetch(`${URL}${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(fetchList)
      .catch((err) => console.log('error:', err))
  }

  return (
    <div className="list">
      {messageList.map((message) => (
        <Message
          key={message._id}
          message={message}
          fetchList={fetchList}
          deleteMessage={() => deleteMessage(message._id)}
          id={message._id}
        />
      ))}
    </div>
  )
}

export default MessageList
