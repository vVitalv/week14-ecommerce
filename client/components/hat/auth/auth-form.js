import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginField, updatePasswordField, signIn } from '../../../redux/reducers/auth'

const LoginForm = (props) => {
  const dispatch = useDispatch()
  const { login, password } = useSelector((store) => store.auth)
  const escapeModalOnKeyPress = (e) => {
    if (e.key === 'Escape') {
      props.setPortalOpen(false)
    }
  }
  const escapeModalOnClick = (e) => {
    if (e.target === e.currentTarget) {
      props.setPortalOpen(false)
    }
  }

  return (
    <div
      className="backing"
      role="menuitem"
      tabIndex={0}
      onClick={(e) => escapeModalOnClick(e)}
      onKeyDown={(e) => escapeModalOnKeyPress(e)}
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
              value={login}
              onChange={(e) => {
                dispatch(updateLoginField(e.target.value))
              }}
              type="text"
              placeholder="Username"
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
            <p className="pass-field-p">Please choose a password.</p>
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
