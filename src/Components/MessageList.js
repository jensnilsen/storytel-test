/* eslint-disable no-underscore-dangle */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchListsSuccess,
  fetchListsFailed,
  deleteSuccess,
  deleteFailed,
} from '../actions'
import { getMessageList } from '../Selectors'
import Message from './Message'
import { URL } from '../constants'
import LoadingScreen from './LodaingScreen'

export const MessageList = () => {
  const [loading, setLodading] = useState(true)
  const messageList = useSelector(getMessageList)
  const dispatch = useDispatch()

  const fetchList = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((json) => dispatch(fetchListsSuccess(json)))
      .then(setLodading(false))
      .catch((error) => dispatch(fetchListsFailed(error)))
  }
  useEffect(() => {
    fetchList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const deleteMessage = (id) => {
    fetch(`${URL}${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(dispatch(deleteSuccess(id)))
      .then(fetchList)
      .catch((error) => dispatch(deleteFailed(error)))
  }

  return (
    <div className="list">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
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
      )}
    </div>
  )
}

export default MessageList
