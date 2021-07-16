import React from 'react'

import Logotype from '../../hat/logotype'
import Login from '../../hat/login'
import CurrencyPanel from '../../hat/panel-currency'
import BasketButton from '../../hat/btn-basket'

const ProdHeader = () => {
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

ProdHeader.propTypes = {}

export default React.memo(ProdHeader)
