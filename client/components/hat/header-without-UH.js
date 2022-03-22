import React from 'react'

import Logotype from './logotype'
import Login from './login'
import CurrencyPanel from './panel-currency'
import BasketButton from './btn-basket'

const HeaderWithoutUH = () => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <Login />
        <CurrencyPanel />
        <BasketButton />
      </div>
    </header>
  )
}

HeaderWithoutUH.propTypes = {}

export default React.memo(HeaderWithoutUH)
