import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  updateLoginField,
  updatePasswordField,
  updateNameField,
  register
} from '../../../../redux/reducers/auth'
import { setLog } from '../../../../redux/reducers/log'

const RegistrationForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { email, password, name, registErrMessage } = useSelector((store) => store.auth)
  useEffect(() => {
    if (registErrMessage === 'New user created. Sign in please') {
      dispatch(setLog('created'))
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    return () => {}
  })

  return (
    <div className="registration">
      <h1 className="registration-header">Please, input your registration data</h1>
      <form className="registration-form">
        <div className="username-field">
          <label className="username-field-label" htmlFor="username">
            Username
          </label>
          <input
            className="username-field-input"
            id="username"
            value={name}
            onChange={(e) => {
              dispatch(updateNameField(e.target.value))
            }}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="email-field">
          <label className="email-field-label" htmlFor="email">
            Email
          </label>
          <input
            className="email-field-input"
            id="email"
            value={email}
            onChange={(e) => {
              dispatch(updateLoginField(e.target.value))
            }}
            type="text"
            placeholder="email"
          />
        </div>
        <div className="pass-field">
          <label className="pass-field-label" htmlFor="password">
            Password
          </label>
          <input
            className="pass-field-input"
            id="password"
            value={password}
            onChange={(e) => {
              dispatch(updatePasswordField(e.target.value))
            }}
            type="password"
            placeholder="******************"
          />
          <div className="pass-field-err">
            <p>{registErrMessage}</p>
          </div>
        </div>
        <div className="btn-field">
          <button
            className="btn-field-button"
            type="button"
            onClick={() => {
              dispatch(register())
            }}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default React.memo(RegistrationForm)
