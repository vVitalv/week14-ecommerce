import React from 'react'

import Logotype from '../hat/logotype'
import CurrencyPanel from '../hat/panel-currency'
import BasketButton from '../hat/btn-basket'
import HeaderThead from './basket-header-thead'

const BasketHeader = (props) => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <CurrencyPanel />
        <BasketButton />
      </div>
      {props.amount > 0 && (
        <div className="basket-panel">
          <HeaderThead />
        </div>
      )}
    </header>
  )
}

BasketHeader.propTypes = {}

export default React.memo(BasketHeader)
