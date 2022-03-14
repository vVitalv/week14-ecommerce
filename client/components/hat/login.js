import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import Button from '../btns/btn'
import LoginForm from './auth/auth-form'

const Login = () => {
  const [isPortalOpen, setPortalOpen] = useState(false)
  return (
    <div className="login">
      <Button
        operation="login"
        sign="Sign in"
        className="login-btn"
        data=""
        onClickFunction={() => setPortalOpen(true)}
      />
      {isPortalOpen && createPortal(<LoginForm setPortalOpen={setPortalOpen} />, document.body)}
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
