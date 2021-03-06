import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../actions'
import { getLogin } from '../Selectors'
import '../Css/Login.css'

// create new messages
export const Login = () => {
  const [client, setClient] = useState('')
  const LoggIn = useSelector(getLogin)
  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(logIn(client))
    setClient('')
  }
  const handleLogout = () => {
    dispatch(logOut())
  }

  return (
    <section className="login-wrapper">
      {!LoggIn.logged ? (
        <div className="login">
          <form className="login-form" onSubmit={handleLogin}>
            <p className="login-length">{client.length}/8</p>
            <input
              className="login-input"
              type="text"
              placeholder="alias"
              value={client}
              onChange={(event) => setClient(event.target.value)}
            />
            <button
              type="submit"
              disabled={client.length < 1 || client.length > 8}
            >
              Log In
            </button>
          </form>
        </div>
      ) : (
        <button className="logout" type="button" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </section>
  )
}

export default Login
