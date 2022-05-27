import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { updateLoginField, updatePasswordField, signIn } from '../../../redux/reducers/auth'
import { setLog } from '../../../redux/reducers/log'

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const { email } = useSelector((store) => store.auth)
  const { password } = useSelector((store) => store.auth)
  const { token } = useSelector((store) => store.auth)
  const { loginErrMessage } = useSelector((store) => store.auth)
  useEffect(() => {
    if (token) {
      dispatch(setLog('logged in'))
      props.setPortalOpen(false)
    }
    return () => {}
  })

  return (
    <div
      className="backing"
      role="menuitem"
      tabIndex={0}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.setPortalOpen(false)
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          props.setPortalOpen(false)
        }
      }}
    >
      <div className="login-modal">
        <form className="login-modal-form">
          <div className="username-field">
            <label className="username-field-label" htmlFor="username">
              Username
            </label>
            <input
              className="username-field-input"
              id="username"
              value={email}
              onChange={(e) => {
                dispatch(updateLoginField(e.target.value))
              }}
              type="text"
              placeholder="email"
              autoComplete="email"
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
              autoComplete="current-password"
            />
            <div className="pass-field-err">
              <p>{loginErrMessage}</p>
            </div>
          </div>
          <div className="btn-field">
            <button
              className="btn-field-button"
              type="button"
              onClick={() => {
                dispatch(signIn())
              }}
            >
              Sign In
            </button>
            <div className="btn-field-regist">
              <p className="btn-field-p">Or go</p>
              <p className="btn-field-link">
                <Link to="/registration">register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
