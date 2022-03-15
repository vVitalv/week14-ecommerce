import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import LoginForm from './auth/auth-form'

const Login = () => {
  const [isPortalOpen, setPortalOpen] = useState(false)
  return (
    <div className="login">
      <button type="button" className="login-btn" onClick={() => setPortalOpen(true)}>
        Sign in
      </button>
      {isPortalOpen && createPortal(<LoginForm setPortalOpen={setPortalOpen} />, document.body)}
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
