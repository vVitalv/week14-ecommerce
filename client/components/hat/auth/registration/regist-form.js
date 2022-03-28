import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setLog } from '../../../../redux/reducers/log'
import {
  updateLoginField,
  updatePasswordField,
  updateNameField,
  register
} from '../../../../redux/reducers/auth'

const RegistrationForm = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    setLog(`navigate to ${window.location.pathname}`)
    return () => {}
  })
  const { email, password, name, errMessage } = useSelector((store) => store.auth)

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
        </div>
        <p className="pass-field-p">{errMessage}</p>
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
