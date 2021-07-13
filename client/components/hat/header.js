import React from 'react'

import Logotype from './logotype'
import Login from './login'
import CurrencyPanel from './panel-currency'
import BasketButton from './btn-basket'
import UnderHeader from './under-header'

const Header = () => {
  return (
    <header>
      <div className="header-panel">
        <div className="first-line">
          <Logotype />
          <Login />
        </div>
        <div className="second-line">
          <CurrencyPanel />
          <BasketButton />
        </div>
      </div>
      <UnderHeader />
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
