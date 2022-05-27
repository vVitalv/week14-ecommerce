import React from 'react'

import Logo from './SVG-logo'
import Login from './auth/login'
import CurrencyPanel from './panel-currency'
import BasketButton from './cart-btn/btn-basket'

const Header = (props) => {
  return (
    <header>
      <div className="header-panel">
        <Logo />
        <BasketButton />
        <Login />
        <CurrencyPanel />
      </div>
      {props.UH ? props.UH() : null}
    </header>
  )
}

export default Header
