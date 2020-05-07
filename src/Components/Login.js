import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../actions'
import { getLogin } from '../Selectors'
import '../Css/Login.css'

// create new messages
const Login = () => {
  const [client, setClient] = useState('')

  const Logg = useSelector(getLogin)
  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(logIn(client))
  }
  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logOut(client))
  }

  return (
    <div className="wrapper">
      {!Logg.logged ? (
        <div className="login">
          <form className="login-form">
            <textarea
              type="text"
              rows="1"
              placeholder="alias"
              value={client}
              onChange={(event) => setClient(event.target.value)}
            />
            <div className="form-footer">
              <button type="submit" onClick={handleLogin}>
                Log In
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <button type="submit" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Login
