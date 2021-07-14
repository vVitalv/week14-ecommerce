import React from 'react'

import Logotype from '../hat/logotype'
import Login from '../hat/login'
import CurrencyPanel from '../hat/panel-currency'
import BasketButton from '../hat/btn-basket'
import CartHeaderThead from './basket-header-thead'

const BasketHeader = (props) => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <Login />
        <CurrencyPanel />
        <BasketButton />
      </div>
      {props.amount > 0 && <CartHeaderThead />}
    </header>
  )
}

BasketHeader.propTypes = {}

export default React.memo(BasketHeader)
