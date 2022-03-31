import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'

import LoginForm from './auth/login-form'
import { logOut } from '../../redux/reducers/auth'

const Login = () => {
  const { user } = useSelector((store) => store.auth)
  const dispatch = useDispatch()
  const loginSign = user.name ? `${user.name} (logout)` : 'Sign in'
  const [isPortalOpen, setPortalOpen] = useState(false)
  const onLoginClick = () => {
    if (user.name) {
      dispatch(logOut())
    } else {
      setPortalOpen(true)
    }
  }
  return (
    <div className="login">
      <button type="button" className="login-btn" onClick={() => onLoginClick()}>
        {loginSign}
      </button>
      {isPortalOpen && createPortal(<LoginForm setPortalOpen={setPortalOpen} />, document.body)}
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
